require("dotenv").config();
const { login, send } = require("./discord");
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
        entryMonsters[stage].push(name);
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

// 상대방 포켓몬의 기술 속성이 사용자 포켓몬과 상성인지 체크
const findByDefenceType = (skillType, monsters) => {
  // console.log("findByDefenceType", skillType, monsters);

  const entryMonsters = monsters.map((name) => {
    const { dangerType } = USER_MONSTERS[name];

    const found = skillType.filter((item) => dangerType.includes(item));
    // console.log("dangerType found", found);

    if (found.length >= 2) {
      return null;
    }

    return name;
  });

  // 상성 기술이 2개 이상이면 entry에서 제외
  return entryMonsters.filter((item) => item !== null);
};

const findByMonster = (name, teraType) => {
  if (!RAID_MONSTERS[name]) return [null];

  const [found, stage, monsters] = findUserMonster(teraType);
  // console.log("findUserMonster", found, stage, monsters);
  if (!found) {
    return [null];
  }

  const { skillType } = RAID_MONSTERS[name];
  const finalEntry = findByDefenceType(skillType, monsters);

  return [stage, finalEntry];
};

// 테라타입만으로 상성 체크
const findByTeraType = (teraType) => {
  const [found, stage, monsters] = findUserMonster(teraType);
  // console.log("findUserMonster", found, stage, monsters);

  if (!found) {
    return [null];
  }

  return [stage, monsters];
};

const startFind = (name, teraType) => {
  let stage;
  let entry;

  // ATTR validation
  if (
    !Object.values(ATTR)
      .map((item) => item === teraType)
      .includes(true)
  ) {
    return "[ERROR] 없는 속성입니다.";
  }

  if (name !== "") {
    [stage, entry] = findByMonster(name, teraType);
  } else {
    [stage, entry] = findByTeraType(teraType);
  }

  if (stage === null || entry.length === 0) {
    return "[INFO] 추천할 포켓몬이 없습니다.";
  }
  // console.log(stage, entry);

  const message = [];
  for (const monster of entry) {
    message.push(
      `${monster} (${stage === 0 ? `효과가 굉장함` : `효과가 있음`})`
    );
  }

  return message.join("\n");
};

(() => {
  // console.log(startFind("크레베이스", "얼음"));
  // return;
  login(
    (client) => {
      console.log(`Logged in as ${client.user.tag}!`);
    },
    (message) => {
      console.log(
        `[Message Created] channelId: ${message.channelId}, id: ${message.id}, content: ${message.content}`
      );

      if (message.channelId !== process.env.DISCORD_CHANNEL_ID) return;

      if (message.content.startsWith("--")) {
        const command = message.content.replaceAll("--", "").split(" ");
        console.log(command);

        const sendData = {
          content: startFind(command[0] ?? "", command[1]),
        };

        send(sendData);
      }
    }
  );
})();

// pm2 start ./index.js --name PSVRecommander --time
