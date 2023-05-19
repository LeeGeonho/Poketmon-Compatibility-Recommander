const { COMPATIBILITY, RAID_MONSTERS, USER_MONSTERS } = require("./type");

const find = (name) => {
  if (!RAID_MONSTERS[name]) return;

  const { tera, skillType } = RAID_MONSTERS[name];

  // 활성화된 테라스탈에 상성이 되는 속성을 찾는다.
  const compatibility = COMPATIBILITY[tera];
  // console.log("효과가 굉장한 속성:", compatibility[0]);

  let entryMonsters = [];
  Object.entries(USER_MONSTERS).map(async (monster) => {
    const name = monster[0];
    const attr = monster[1];
    // console.log(name, attr);

    // 효과가 굉장한 사용자 몬스터가 있는지
    const recommandtype = compatibility[0].filter((item) =>
      attr.type.includes(item)
    );
    if (recommandtype.length > 0) {
      entryMonsters.push(name);
    }
  });

  // 방어 상성이 있는지
  if (entryMonsters.length > 0) {
    let dangerCount = 0;

    entryMonsters = entryMonsters.map((name) => {
      const { dangerType } = USER_MONSTERS[name];

      const found = skillType.filter((item) => dangerType.includes(item));

      if (found.length > 0) {
        dangerCount++;
        if (dangerCount >= 2) {
          return null;
        }
      }

      return name;
    });
  }

  return entryMonsters.filter((item) => item !== null);
};

(() => {
  const recommandMonster = find("브리가론");

  if (recommandMonster.length === 0) {
    console.log("not entries...");
    return;
  }
  console.log("Recommand monsters are...");
  for (const monster of recommandMonster) {
    console.log(monster);
  }
})();
