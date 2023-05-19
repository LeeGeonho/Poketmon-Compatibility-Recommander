const { COMPATIBILITY, ATTR } = require("./types");
const { RAID_MONSTERS, USER_MONSTERS } = require("./monsters");

// 테라스탈 타입기준 상성이 되는 유리한 사용자 포켓몬을 찾는다.
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
  if (entryMonsters[0].length === 0 && entryMonsters[1].length === 0) {
    return [false];
  }

  return [true, entryMonsters];
};

// 레이드 몬스터의 기술 속성이 사용자 몬스터와 상성인지 체크
const findByDefenceType = (skillType, monsters, stage) => {
  let dangerCount = 0;

  const entryMonsters = monsters[stage].map((name) => {
    const { dangerType } = USER_MONSTERS[name];

    const found = skillType.filter((item) => dangerType.includes(item));

    if (found.length > 0) {
      // 상성인 기술이 2개 이상이면 entry에서 제외
      if (++dangerCount >= 2) {
        return null;
      }
    }

    return name;
  });

  return entryMonsters.filter((item) => item !== null);
};

const findByMonster = (name) => {
  if (!RAID_MONSTERS[name]) return;

  const { teraType, skillType } = RAID_MONSTERS[name];

  const [found, monsters] = findUserMonster(teraType);

  if (!found) {
    return [null];
  }

  let stage = 0;
  let finalEntry = findByDefenceType(skillType, monsters, stage);
  if (finalEntry.length === 0) {
    // 효과가 굉장한 애들 모두 방어 상성을 갖고있는 경우 효과가 있는 애들로 다시 검색
    stage = 1;
    finalEntry = findByDefenceType(skillType, monsters, stage);
  }

  return [stage, finalEntry];
};

const findByTeraType = (teraType) => {
  const [found, monsters] = findUserMonster(teraType);

  if (!found) {
    return [null];
  }

  return [0, monsters[0]];
};

(() => {
  const [stage, entry] = findByMonster("브리가론");
  // const [stage, entry] = findByTeraType(ATTR.FLY);

  if (!!stage || entry.length === 0) {
    console.log("not entries...");
    return;
  }

  console.log(
    `--------- ${stage == 0 ? `효과가 굉장한` : `효과가 있는`} 몬스터 목록`
  );
  for (const monster of entry) {
    console.log(monster);
  }
})();
