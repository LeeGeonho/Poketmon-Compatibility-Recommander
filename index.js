require("dotenv").config();
const fs = require("fs");
const { login } = require("./discord");
const { COMPATIBILITY, ATTR, TIP, CAUTION } = require("./constants/types");
const { RAID_MONSTERS, USER_MONSTERS } = require("./constants/monsters");

const inputValidation = (name, teraType) => {
  // ATTR validation
  if (
    !Object.values(ATTR)
      .map((item) => item === teraType)
      .includes(true)
  ) {
    return [false, "[ERROR] 존재하지 않는 속성입니다."];
  }
  // Monster validation
  if (!RAID_MONSTERS[name])
    return [false, "[ERROR] 존재하지 않는 몬스터입니다."];

  return [true];
};

const findEntry = (
  user_monsters,
  raid_monsters,
  compatibility,
  monsterName,
  monsterTeraType
) => {
  const entry = [];

  Object.entries(user_monsters).map(async (myMonster) => {
    const name = myMonster[0]; // key
    const { style, type, safeType, dangerType, tera } = myMonster[1]; // value

    const raidMonsterSkillTypes = raid_monsters[monsterName].skillType;

    // 1. 상대 몬스터의 skillType이 dangerType(2배 이상의 약점)인지 체크
    const calDangerTypes = raidMonsterSkillTypes.filter((item) =>
      dangerType.includes(item)
    );
    // 1-1. 하나라도 있으면 엔트리에서 제외
    if (calDangerTypes.length !== 0) return;

    // 2. 상대 몬스터의 skillType이 나의 몬스터의 safeType인지 체크
    const calSafeTypes = raidMonsterSkillTypes.filter((item) =>
      Object.keys(safeType).includes(item)
    );
    // 2-1. calSafeTypes가 없으면 엔트리에서 제외
    if (calSafeTypes.length === 0) return;
    // 2-2. calSafeTypes가 raidMonsterSkillTypes과 두개 이상 차이나면 엔트리에서 제외
    if (
      raidMonsterSkillTypes.length >= 3 &&
      calSafeTypes.length < raidMonsterSkillTypes.length - 2
    ) {
      return;
    }

    // 2-3. (특성과 같이 특이사항으로)제외할 타입 체크
    if (raid_monsters[monsterName].excludeType) {
      const excludeTypes = raid_monsters[monsterName].excludeType.filter(
        (item) => tera.includes(item)
      );
      if (excludeTypes.length !== 0) return;
    }

    // 2-4. score 계산
    const score = calSafeTypes
      .map((type) => safeType[type])
      .reduce((sum, currValue) => sum + currValue, 0);

    // 0: 효과가 굉장함
    // 1: 효과가 있음
    [0, 1].map((stage) => {
      // 3. 사용자 몬스터가 가진 기술이 상대방 몬스터한테 유리한 속성인지 체크
      const attackTypes = type.filter((item) =>
        compatibility[monsterTeraType][stage].includes(item)
      );

      // 4. attackType중에 tera타입이 있는지 체크
      const teraTypes = attackTypes.filter((item) => tera.includes(item));

      // 5. 추천 몬스터를 선정
      let recommand = 0;
      if (stage === 0 && teraTypes.length !== 0 && score < calSafeTypes.length)
        recommand = 1;

      // 6. caution에 따른 사용자 몬스터 필터링
      if (raid_monsters[monsterName].caution) {
        // 물공제외
        let excludeCaution = [
          CAUTION.BURN,
          CAUTION.CHARM,
          CAUTION.DANCE,
          CAUTION.TICKLE,
          CAUTION.EYE,
        ].filter((item) => raid_monsters[monsterName].caution.includes(item));
        if (excludeCaution.length > 0 && style === TIP.ATTACKA) {
          recommand = -1;
        }

        // 특공제외
        excludeCaution = [CAUTION.ICESCALE, CAUTION.FLATTER].filter((item) =>
          raid_monsters[monsterName].caution.includes(item)
        );
        if (excludeCaution.length > 0 && style === TIP.ATTACKC) {
          recommand = -1;
        }
      }

      if (attackTypes.length > 0) {
        entry.push({
          stage,
          name,
          teraTypes,
          attackTypes,
          safeTypes: calSafeTypes,
          recommand,
          score,
        });
      }
    });
  });

  return entry;
};

const sortEntry = (entries) => {
  const sortEntries = JSON.parse(JSON.stringify(entries)); // object deep copy

  // 정렬 우선순위
  // safeTypes를 많이 갖고 있고 효과가 굉장한 기술을 갖고 있고 테라 타입을 보유중이며, 방어상성(스코어)이 좋은 순
  sortEntries.sort(function (a, b) {
    const recommandA = a.recommand;
    const recommandB = b.recommand;
    const safeA = a.safeTypes.length;
    const safeB = b.safeTypes.length;
    const stageA = a.stage;
    const stageB = b.stage;
    const scoreA = a.score;
    const scoreB = b.score;

    if (recommandA > recommandB) return -1;
    if (recommandA < recommandB) return 1;
    if (safeA > safeB) return -1;
    if (safeA < safeB) return 1;
    if (stageA < stageB) return -1;
    if (stageA > stageB) return 1;
    if (scoreA < scoreB) return -1;
    if (scoreA > scoreB) return 1;
    return 0;
  });

  return sortEntries;
};

const filterEntry = (entries) => {
  // recommand 별로 5개씩만 필터링
  const lineup = [
    ...entries.filter((item) => item.recommand === 1).slice(0, 5),
    ...entries.filter((item) => item.recommand === 0).slice(0, 5),
    ...entries.filter((item) => item.recommand === -1).slice(0, 5),
  ];

  return lineup;
};

const findByMonster = (monsterName, teraType) => {
  const entries = findEntry(
    USER_MONSTERS,
    RAID_MONSTERS,
    COMPATIBILITY,
    monsterName,
    teraType
  );

  const sortedEntries = sortEntry(entries);

  const lineup = filterEntry(sortedEntries);

  return lineup;
};

const generateText = (
  user_monsters,
  raid_monsters,
  compatibility,
  tip,
  name,
  teraType,
  entries
) => {
  const message = [];
  // 상대방 몬스터 정보
  message.push("--------------------------------------");
  message.push(`**${name} ${teraType}**`);
  message.push(`타입: ${raid_monsters[name].style}`);
  message.push(`약점속성: ${compatibility[teraType][0].join(", ")}`);
  message.push(`기술속성: ${raid_monsters[name].skillType.join(", ")}`);
  if (raid_monsters[name].tip) {
    message.push(`참고: ${raid_monsters[name].tip.join(", ")}`);
  }
  if (raid_monsters[name].caution) {
    message.push(`주의: ${raid_monsters[name].caution.join(", ")}`);
  }

  // 사용자 몬스터
  message.push("--------------------------------------");
  const userMonsters = [];
  for (const {
    name,
    stage,
    teraTypes,
    attackTypes,
    safeTypes,
    recommand,
    score,
  } of entries) {
    const { safeType, style, tip: monsterTip } = user_monsters[name];
    const userMonster = [];

    switch (recommand) {
      case -1:
        userMonster.push(`👎 ${name}(${style})`);
        break;
      case 0:
        userMonster.push(`${name}(${style})`);
        break;
      case 1:
        userMonster.push(`👍 ${name}(${style})`);
        break;
    }

    const typeWithTera = attackTypes.map((item) => {
      if (teraTypes.includes(item)) {
        return `💠 ${item}`;
      }
      return item;
    });

    const tipResult = monsterTip
      .filter((item) => !(item === tip.BUFFA || item === tip.BUFFC))
      .map((item) => (item === tip.HPROVOCATION ? "💢" : item));

    userMonster.push(typeWithTera.join(", "));
    userMonster.push(stage === 0 ? "⭐" : "🌕");
    userMonster.push(
      `${score} (${safeTypes
        .map((item) => item.substr(0, 1) + safeType[item])
        .join(", ")
        .replaceAll("0.", ".")})`
    );
    if (tipResult.length > 0) userMonster.push(tipResult.join(", "));
    userMonsters.push(userMonster.join(" / "));

    // if (userMonsters.length >= 10) break;
  }
  message.push(userMonsters.join("\n"));
  message.push("--------------------------------------");

  return message.join("\n");
};

const startFind = (name, teraType) => {
  const [validate, failMsg] = inputValidation(name, teraType);
  if (!validate) return failMsg;

  const entry = findByMonster(name, teraType);

  if (!Array.isArray(entry) || entry.length === 0) {
    return "[INFO] 추천할 포켓몬이 없습니다.";
  }

  const text = generateText(
    USER_MONSTERS,
    RAID_MONSTERS,
    COMPATIBILITY,
    TIP,
    name,
    teraType,
    entry
  );
  return text;
};

const recommandMonster = () => {
  const message = [];
  // 사용자 몬스터들의 테라 속성 리스트
  message.push("--------------------------------------");
  // 모든 type에 대해서 초기값 셋팅
  const teraTypeList = Object.values(ATTR).map((type) => ({
    type,
    count: 0,
    monsters: [],
  }));

  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0];
    const { tera: teraTypes } = monster[1];

    teraTypes.map((type) => {
      const index = teraTypeList.findIndex((item) => item.type === type);
      teraTypeList[index].count++;
      teraTypeList[index].monsters.push(name.substr(0, 3));
    });
  });

  teraTypeList.sort((a, b) => {
    return b.count - a.count;
  });

  for (const { type, count, monsters } of teraTypeList) {
    message.push(`${type}, ${count}, (${monsters.join(", ")})`);
  }
  return message.join("\n");
};

const detail = (type) => {
  const message = [];

  message.push("--------------------------------------");
  message.push(`**${type}** 타입 몬스터 상세정보`);
  message.push("--------------------------------------");

  // type에 해당하는 사용자 몬스터 필터
  const monsterNames = Object.keys(USER_MONSTERS).filter((monster) =>
    USER_MONSTERS[monster].type.includes(type)
  );
  const mergeDangerTypes = [
    ...new Set(
      [
        ...monsterNames.map((name, index) => {
          const {
            style,
            dangerType,
            safeType: tSafeType,
          } = USER_MONSTERS[name];

          const safeType = Object.keys(tSafeType).sort();
          const normalSafeType = safeType
            .filter((type) => USER_MONSTERS[name].safeType[type] === 1)
            .sort();
          const superSafeType = safeType
            .filter((type) => USER_MONSTERS[name].safeType[type] !== 1)
            .sort();

          message.push(`**${index + 1}.${name}** (${style})`);
          message.push(
            `위험 속성(${dangerType.length}) : ${dangerType.join(", ")}`
          );
          message.push(
            `보통 속성(${normalSafeType.length}) : ${normalSafeType.join(", ")}`
          );
          message.push(
            `안전 속성(${superSafeType.length}) : ${superSafeType.join(", ")}`
          );
          message.push("--------------------------------------");
          return dangerType;
        }),
      ].flat()
    ),
  ];

  // 위험 속성을 제외하고 남은 속성을 보여준다. (새로운 샘플 만들때 참고)
  // let excludeCaution = Object.values(ATTR)
  //   .filter((attrType) => !mergeDangerTypes.includes(attrType))
  //   .sort();
  // message.push(`추천 위험 속성 : ${excludeCaution.join(", ")}`);
  // message.push("--------------------------------------");
  return message.join("\n");
};

const findMonster = (monsterName, teraType) => {
  const [validate, failMsg] = inputValidation(monsterName, teraType);
  if (!validate) return failMsg;

  const compTypes = COMPATIBILITY[teraType][0];
  const raidMonsterSkillTypes = RAID_MONSTERS[monsterName].skillType;

  const finalEntry = [];
  compTypes.map((type) => {
    const mapJson = JSON.parse(
      fs.readFileSync(`./data/monsterMap_${type}.json`, "utf8")
    );

    Object.entries(mapJson)
      .filter((monster) => monster[1].totalStat > 500)
      .map((monster) => {
        const name = monster[0]; // key
        const { safeType, dangerType, totalStat } = monster[1]; // value

        const calDangerTypes = raidMonsterSkillTypes.filter((item) =>
          Object.keys(dangerType).includes(item)
        );
        // dangerType이 하나라도 있으면 제외
        if (calDangerTypes.length !== 0) return;

        const calSafeTypes = raidMonsterSkillTypes.filter((item) =>
          Object.keys(safeType).includes(item)
        );
        // safeType이 없으면 제외
        if (calSafeTypes.length === 0) return;
        // raidMonsterSkillTypes이 3개 이상인 경우 raidMonsterSkillTypes-2보다 적으면 제외
        if (
          raidMonsterSkillTypes.length >= 3 &&
          calSafeTypes.length < raidMonsterSkillTypes.length - 2
        ) {
          return;
        }

        const score = calSafeTypes
          .map((type) => safeType[type])
          .reduce((sum, currValue) => sum + currValue, 0);

        // calSafeTypes이 모두 1배 방어 상성이면 제외
        if (score >= raidMonsterSkillTypes.length) return;

        const scoreWithSafeTypes = calSafeTypes.map((type) => ({
          [type]: safeType[type],
        }));

        finalEntry.push({
          name,
          type,
          safeTypes: scoreWithSafeTypes,
          score,
          totalStat,
        });
      });
  });

  // 우선순위: 종족값 총합, score
  finalEntry.sort(function (a, b) {
    const totalStatA = a.totalStat;
    const totalStatB = b.totalStat;
    const scoreA = a.score;
    const scoreB = b.score;

    if (scoreA < scoreB) return -1;
    if (scoreA > scoreB) return 1;
    if (totalStatA < totalStatB) return 1;
    if (totalStatA > totalStatB) return -1;
    return 0;
  });

  const message = [];
  // 검색 정보
  message.push("--------------------------------------");
  message.push(`**${monsterName} ${teraType}**`);
  message.push(`약점 속성: ${compTypes.join(", ")}`);

  const MAX_LIST = 10;
  for (const { name, type, safeTypes, score, totalStat } of finalEntry) {
    const entry = [];

    // 이미 내가 갖고있는 몬스터인지 확인
    let hasMonster = false;
    for (const [key, value] of Object.entries(USER_MONSTERS)) {
      if (name.includes(key) && value.type.includes(type)) {
        hasMonster = true;
        break;
      }
    }
    if (hasMonster) continue;

    // 몬스터 정보
    entry.push("--------------------------------------");
    entry.push(`**${name}**`);
    entry.push(`필요 타입: ${type}`);
    entry.push(
      `방어상성 총합(${score}): ${safeTypes
        .map((safeType) =>
          Object.entries(safeType).map((entry) => `${entry[0]}:${entry[1]}`)
        )
        .join(", ")}`
    );
    entry.push(`종족값 총합: ${totalStat}`);
    message.push(entry.join("\n"));

    if (MAX_LIST + 3 <= message.length) break;
  }
  message.push("--------------------------------------");
  return message.join("\n");
};

(() => {
  // 👑✨💠
  // console.log(recommandMonster());
  // console.log(findMonster("카디나르마", "불꽃"));
  // console.log(startFind("해피너스", "독"));
  // console.log(detail("물"));
  // return;
  // https://birdie0.github.io/discord-webhooks-guide

  const nameHistory = [];
  login(
    (client) => {
      console.log(`Logged in as ${client.user.tag}!`);
    },
    (message) => {
      if (message.channelId !== process.env.DISCORD_CHANNEL_ID) return;

      console.log(
        `[Message Created] channelId: ${message.channelId}, id: ${message.id}, content: ${message.content}`
      );
    },
    async (interaction) => {
      if (interaction.isChatInputCommand()) {
        // console.log("isChatInputCommand", interaction);

        const sendData = {};

        if (interaction.commandName === "stat") {
          sendData.content = recommandMonster();
        } else if (interaction.commandName === "detail") {
          const type = interaction.options.getString("type");

          sendData.content = detail(type);
        } else if (interaction.commandName === "find") {
          const type = interaction.options.getString("type");
          const monster = interaction.options.getString("monster");

          if (monster && !nameHistory.find((item) => item === monster)) {
            if (nameHistory.length >= 25) {
              nameHistory.pop();
            }
            nameHistory.unshift(monster);
          }

          sendData.content = startFind(monster, type);
        } else if (interaction.commandName === "check") {
          const type = interaction.options.getString("type");
          const monster = interaction.options.getString("monster");

          sendData.content = findMonster(monster, type);
        }

        sendData.content ??= "오류 발생";

        await interaction.reply(sendData);
      } else if (interaction.isAutocomplete()) {
        const focusedOption = interaction.options.getFocused(true);

        let choices;
        if (focusedOption.name === "type") {
          choices = Object.values(ATTR).sort();
        } else if (focusedOption.name === "monster") {
          choices = Array.from(nameHistory);
        }

        const filtered = choices.filter((choice) =>
          choice.startsWith(focusedOption.value)
        );

        await interaction.respond(
          filtered.map((choice) => ({ name: choice, value: choice }))
        );
      }
    }
  );
})();

// pm2 start ./index.js --name PSVRecommander --time
