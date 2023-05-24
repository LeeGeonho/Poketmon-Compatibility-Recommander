require("dotenv").config();
const { login } = require("./discord");
const { COMPATIBILITY, ATTR } = require("./types");
const { RAID_MONSTERS, USER_MONSTERS } = require("./monsters");

// 테라타입에 상성을 갖고있는 사용자 포켓몬을 찾는다.
// stage가 0은 '효과가 굉장함', 1은 '효과가 있음'
const findUserMonster = (teraType) => {
  const compatibility = COMPATIBILITY[teraType];
  const entryMonsters = { 0: [], 1: [] };

  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0];
    const attr = monster[1];
    // console.log(name, attr);

    // 0: 효과가 굉장함
    // 1: 효과가 있음
    [0, 1].map((stage) => {
      const recommand = compatibility[stage].filter((item) =>
        attr.type.includes(item)
      );

      if (recommand.length > 0) {
        entryMonsters[stage].push({ name });
      }
    });
  });

  // console.log("entryMonsters", entryMonsters);
  if (entryMonsters[0].length !== 0) {
    return [true, 0, entryMonsters[0]];
  } else if (entryMonsters[1].length !== 0) {
    return [true, 1, entryMonsters[1]];
  } else {
    return [false];
  }
};

const findByMonster = (targetName, teraType) => {
  const finalEntry = [];

  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0];
    const { type, safeType, dangerType } = monster[1];

    // 1. 상대 몬스터의 skillType이 나의 몬스터의 safeType인지 체크
    const safeTypes = RAID_MONSTERS[targetName].skillType.filter(
      (item) => safeType.includes(item) && !dangerType.includes(item)
    );

    if (safeTypes.length <= 0) {
      return;
    }
    // console.log(name, safeTypes);

    // 2. 모든 skillType이 safeType이면 가장 안정적이므로 추천한다.
    let recommand = false;
    if (safeTypes.length === RAID_MONSTERS[targetName].skillType.length) {
      recommand = true;
    }

    // 3. 사용자 몬스터가 가진 기술이 상대방 몬스터한테 유리한 속성인지 체크
    // 0: 효과가 굉장함
    // 1: 효과가 있음
    [0, 1].map((stage) => {
      const attackType = type.filter((item) =>
        COMPATIBILITY[teraType][stage].includes(item)
      );

      if (attackType.length > 0) {
        finalEntry.push({ stage, name, attackType, safeTypes, recommand });
      }
    });
  });

  finalEntry.sort(function (a, b) {
    return b.safeTypes.length - a.safeTypes.length;
  });

  // console.log(finalEntry);
  return finalEntry;
};

// 테라타입만으로 상성 체크
const findByTeraType = (teraType) => {
  const [found, stage, monsters] = findUserMonster(teraType);
  // console.log("findUserMonster", found, stage, monsters);

  if (!found) {
    return null;
  }

  return monsters.map((item) => {
    return { stage, ...item };
  });
};

const startFind = (name, teraType) => {
  let entry = null;

  // ATTR validation
  if (
    !Object.values(ATTR)
      .map((item) => item === teraType)
      .includes(true)
  ) {
    return "[ERROR] 존재하지 않는 속성입니다.";
  }

  if (name !== "") {
    // Monster validation
    if (!RAID_MONSTERS[name]) return "[ERROR] 존재하지 않는 몬스터입니다.";

    entry = findByMonster(name, teraType);
  } else {
    entry = findByTeraType(teraType);
  }

  if (!Array.isArray(entry) || entry.length === 0) {
    return "[INFO] 추천할 포켓몬이 없습니다.";
  }

  const message = [];
  // 상대방 몬스터 정보
  if (name !== "") {
    message.push("--------------------------------------");
    message.push(
      `${name}(${teraType}) 기술타입: ${RAID_MONSTERS[name].skillType.join(
        ", "
      )}`
    );
  }

  // 사용자 몬스터
  message.push("--------------------------------------");
  message.push("이름 / 추천기술타입 / 효과 / 방어상성타입");
  message.push("--------------------------------------");
  for (const { name, stage, attackType, safeTypes, recommand } of entry) {
    const detail = [];
    detail.push(stage === 0 ? "**__효과굉장__**" : "효과있음");
    // if (USER_MONSTERS[name] !== undefined) {
    //   detail.push(USER_MONSTERS[name].tip.join(", "));
    // }
    if (safeTypes !== undefined) {
      detail.push(safeTypes.join(", "));
    }

    let recommandAttackType = "";
    if (attackType !== undefined) {
      recommandAttackType = `*${attackType.join(", ")}*`;
    }

    let perfect = recommand === true ? "**__강추!!__** / " : "";
    message.push(
      `${perfect}${name} / ${recommandAttackType} / ${detail.join(" / ")}`
    );
  }

  if (name !== "" && RAID_MONSTERS[name].tip) {
    message.push("--------------------------------------");
    message.push(`참고: ${RAID_MONSTERS[name].tip.join(", ")}`);
  }

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
      safeTypeList[index].monsters.push(name);
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
  // recommandMonster();
  // console.log(startFind("저승갓숭", "벌레"));
  // return;
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
        } else if (interaction.commandName === "find") {
          const type = interaction.options.getString("type");
          const monster = interaction.options.getString("monster");

          sendData.content = startFind(monster !== "없음" ? monster : "", type);
        }

        sendData.content ??= "오류 발생";
        await interaction.reply(sendData);
      } else if (interaction.isAutocomplete()) {
        const focusedOption = interaction.options.getFocused(true);

        let choices;
        if (focusedOption.name === "type") {
          choices = Object.values(ATTR);
        } else if (focusedOption.name === "monster") {
          choices = ["없음"];
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
