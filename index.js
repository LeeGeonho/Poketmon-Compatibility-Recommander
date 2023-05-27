require("dotenv").config();
const { login } = require("./discord");
const { COMPATIBILITY, ATTR, TIP } = require("./types");
const { RAID_MONSTERS, USER_MONSTERS } = require("./monsters");

const findByMonster = (targetName, teraType) => {
  const finalEntry = []; // 최종 선발 엔트리

  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0]; // key
    const { type, safeType, dangerType, tera } = monster[1]; // value

    const raidMonsterSkillTypes = RAID_MONSTERS[targetName].skillType;

    // 1. 상대 몬스터의 skillType이 나의 몬스터의 safeType인지 체크
    const calSafeTypes = raidMonsterSkillTypes.filter(
      (item) => safeType.includes(item) && !dangerType.includes(item)
    );

    // console.log(name, calSafeTypes, raidMonsterSkillTypes);
    // 1-1. calSafeTypes가 없으면 엔트리에서 제외
    if (calSafeTypes.length === 0) return;
    // 1-2. calSafeTypes가 raidMonsterSkillTypes과 두개 이상 차이나면 엔트리에서 제외
    if (
      raidMonsterSkillTypes.length >= 3 &&
      calSafeTypes.length < raidMonsterSkillTypes.length - 2
    ) {
      return;
    }

    // 0: 효과가 굉장함
    // 1: 효과가 있음
    [0, 1].map((stage) => {
      // 2. 사용자 몬스터가 가진 기술이 상대방 몬스터한테 유리한 속성인지 체크
      const attackTypes = type.filter((item) =>
        COMPATIBILITY[teraType][stage].includes(item)
      );

      // 3. attackType중에 tera타입이 있는지 체크
      let teraTypes = [];
      attackTypes.map((item) => {
        if (tera.includes(item)) {
          teraTypes.push(item);
        }
      });

      if (attackTypes.length > 0) {
        finalEntry.push({
          stage,
          name,
          teraTypes,
          attackTypes,
          safeTypes: calSafeTypes,
          recommand: calSafeTypes.length === raidMonsterSkillTypes.length, // 추천!
        });
      }
    });
  });

  // 3. safeTypes이 많고 효과가 굉장한거 우선순위로 정렬
  finalEntry.sort(function (a, b) {
    const safeA = a.safeTypes.length;
    const safeB = b.safeTypes.length;
    const stageA = a.stage;
    const stageB = b.stage;
    const teraA = a.teraTypes.length;
    const teraB = b.teraTypes.length;

    if (safeA > safeB) return -1;
    if (safeA < safeB) return 1;
    if (stageA < stageB) return -1;
    if (stageA > stageB) return 1;
    if (teraA > teraB) return -1;
    if (teraA < teraB) return 1;
    return 0;
  });

  return finalEntry;
};

const startFind = (name, teraType) => {
  // ATTR validation
  if (
    !Object.values(ATTR)
      .map((item) => item === teraType)
      .includes(true)
  ) {
    return "[ERROR] 존재하지 않는 속성입니다.";
  }
  // Monster validation
  if (!RAID_MONSTERS[name]) return "[ERROR] 존재하지 않는 몬스터입니다.";

  const entry = findByMonster(name, teraType);

  if (!Array.isArray(entry) || entry.length === 0) {
    return "[INFO] 추천할 포켓몬이 없습니다.";
  }

  const message = [];
  // 상대방 몬스터 정보
  message.push("--------------------------------------");
  message.push(`**${name} ${teraType}**`);
  message.push(`타입: ${RAID_MONSTERS[name].style}`);
  message.push(`기술속성: ${RAID_MONSTERS[name].skillType.join(", ")}`);
  if (RAID_MONSTERS[name].tip) {
    message.push(`참고: ${RAID_MONSTERS[name].tip.join(", ")}`);
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
  } of entry) {
    const { style, tip } = USER_MONSTERS[name];
    const userMonster = [];

    if (!!recommand) {
      userMonster.push(`👍 ${name}(${style})`);
    } else {
      userMonster.push(`${name}(${style})`);
    }

    const typeWithTera = attackTypes.map((item) => {
      if (teraTypes.includes(item)) {
        return `💠 ${item}`;
      }
      return item;
    });

    const tipResult = tip
      .filter((item) => !(item === TIP.BUFFA || item === TIP.BUFFC))
      .map((item) => (item === TIP.HPROVOCATION ? "💢" : item));

    userMonster.push(typeWithTera.join(", "));
    userMonster.push(stage === 0 ? "⭐" : "🌕");
    userMonster.push(safeTypes.map((item) => item.substr(0, 1)).join(", "));
    if (tipResult.length > 0) userMonster.push(tipResult.join(", "));
    userMonsters.push(userMonster.join(" / "));
  }
  message.push(userMonsters.join("\n"));
  message.push("--------------------------------------");

  return message.join("\n");
};

// 나한테 부족한 safeType을 찾는다.
const recommandMonster = () => {
  // 모든 type에 대해서 초기값 셋팅
  const safeTypeList = Object.values(ATTR).map((type) => ({
    type,
    count: 0,
    monsters: [],
  }));

  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0];
    const { type, safeType, dangerType } = monster[1];

    safeType.map((type) => {
      const index = safeTypeList.findIndex((item) => item.type === type);
      safeTypeList[index].count++;
      safeTypeList[index].monsters.push(name.substr(0, 3));
    });
  });

  safeTypeList.sort((a, b) => {
    return b.count - a.count;
  });

  const message = [];
  for (const { type, count, monsters } of safeTypeList) {
    message.push(`${type}, ${count}, (${monsters.join(", ")})`);
  }
  return message.join("\n");
};

(() => {
  // 👑✨💠
  // recommandMonster();
  console.log(startFind("한카리아스", "바위"));
  return;
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

        const sendData = { ephemeral: true };

        if (interaction.commandName === "stat") {
          sendData.content = recommandMonster();
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
