const { ATTR, TIP } = require("./types");

module.exports.RAID_MONSTERS = {
  // 6성
  리피아: {
    type: [ATTR.GRASS],
    skillType: [ATTR.FIGHT, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
  샤미드: {
    type: [ATTR.WATER],
    skillType: [ATTR.WATER],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  부스터: {
    type: [ATTR.FIRE],
    skillType: [ATTR.FIRE],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  쥬피썬더: {
    type: [ATTR.THUNDER],
    skillType: [ATTR.THUNDER, ATTR.GHOST],
    tip: [TIP.TENTOFLIGHT],
  },
  글레이시아: {
    type: [ATTR.ICE],
    skillType: [ATTR.NORMAL, ATTR.ICE],
    tip: [TIP.TENTOFLIGHT],
  },
  블래키: {
    type: [ATTR.EVIL],
    skillType: [ATTR.NORMAL, ATTR.EVIL],
    tip: [],
  },
  에브이: {
    type: [ATTR.ESPER],
    skillType: [ATTR.NORMAL, ATTR.ESPER],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  님피아: {
    type: [ATTR.FAIRY],
    skillType: [ATTR.NORMAL, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  가디안: {
    type: [ATTR.ESPER, ATTR.FAIRY],
    skillType: [ATTR.ESPER, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  엘레이드: {
    type: [ATTR.ESPER, ATTR.FIRE],
    skillType: [ATTR.ESPER, ATTR.FIRE, ATTR.FIGHT],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  망나뇽: {
    type: [ATTR.DRAGON, ATTR.FLY],
    skillType: [ATTR.DRAGON, ATTR.WATER],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  한카리아스: {
    type: [ATTR.DRAGON, ATTR.LAND],
    skillType: [ATTR.DRAGON, ATTR.LAND, ATTR.FIRE, ATTR.ROCK],
    tip: [TIP.REFLECTOR],
  },
  삼삼드래: {
    type: [ATTR.DRAGON, ATTR.EVIL],
    skillType: [ATTR.DRAGON, ATTR.EVIL],
    tip: [TIP.TENTOFLIGHT],
  },
  보만다: {
    type: [ATTR.DRAGON, ATTR.FLY],
    skillType: [ATTR.DRAGON, ATTR.FLY, ATTR.FIRE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  드래펄트: {
    type: [ATTR.DRAGON, ATTR.GHOST],
    skillType: [ATTR.DRAGON, ATTR.GHOST, ATTR.THUNDER, ATTR.FIRE],
    tip: [TIP.NODEBUFF, TIP.REFLECTOR],
  },
  드닐레이브: {
    type: [ATTR.DRAGON, ATTR.ICE],
    skillType: [ATTR.DRAGON, ATTR.ICE, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  미끄래곤: {
    type: [ATTR.DRAGON, ATTR.GHOST],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.POISON, ATTR.GRASS],
    tip: [TIP.TENTOFLIGHT],
  },
  엑스라이즈: {
    type: [ATTR.DRAGON],
    skillType: [ATTR.DRAGON, ATTR.EVIL, ATTR.NORMAL, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  드래캄: {
    type: [ATTR.DRAGON, ATTR.POISON],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  마기라스: {
    type: [ATTR.ROCK, ATTR.EVIL],
    skillType: [ATTR.ROCK, ATTR.EVIL, ATTR.FIRE],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  페리퍼: {
    type: [ATTR.WATER, ATTR.FLY],
    skillType: [ATTR.WATER, ATTR.FLY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  찌르호크: {
    type: [ATTR.NORMAL, ATTR.FLY],
    skillType: [ATTR.NORMAL, ATTR.FLY, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  파이어로: {
    type: [ATTR.FIRE, ATTR.FLY],
    skillType: [ATTR.FIRE, ATTR.FLY],
    tip: [TIP.REFLECTOR],
  },
  아머까오: {
    type: [ATTR.STEEL, ATTR.FLY],
    skillType: [ATTR.STEEL, ATTR.FLY, ATTR.FIGHT],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  찌리비크: {
    type: [ATTR.THUNDER, ATTR.FLY],
    skillType: [ATTR.NORMAL, ATTR.FLY, ATTR.THUNDER],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  메타몽: {
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL],
    tip: [],
  },
  팬텀: {
    type: [ATTR.GHOST, ATTR.POISON],
    skillType: [ATTR.GHOST, ATTR.POISON, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  따라큐: {
    type: [ATTR.GHOST, ATTR.FAIRY],
    skillType: [ATTR.GHOST, ATTR.FAIRY, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
  해피너스: {
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  키키링: {
    type: [ATTR.NORMAL, ATTR.ESPER],
    skillType: [ATTR.NORMAL, ATTR.ESPER, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.TENTOFLIGHT],
  },
  켄타로스: {
    type: [ATTR.FIGHT],
    skillType: [ATTR.NORMAL, ATTR.ESPER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  켄타로스불: {
    type: [ATTR.FIGHT, ATTR.FIRE],
    skillType: [ATTR.NORMAL, ATTR.FIRE, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  켄타로스물: {
    type: [ATTR.FIGHT, ATTR.WATER],
    skillType: [ATTR.NORMAL, ATTR.WATER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  대도각참: {
    type: [ATTR.EVIL, ATTR.STEEL],
    skillType: [ATTR.EVIL, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  저승갓숭: {
    type: [ATTR.FIGHT, ATTR.GHOST],
    skillType: [ATTR.EVIL, ATTR.FIGHT, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  토오: {
    type: [ATTR.POISON, ATTR.LAND],
    skillType: [ATTR.POISON, ATTR.LAND, ATTR.BUG],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  하마돈: {
    type: [ATTR.LAND],
    skillType: [ATTR.LAND, ATTR.ICE, ATTR.ROCK],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  버섯모: {
    type: [ATTR.GRASS, ATTR.FIGHT],
    skillType: [ATTR.GRASS, ATTR.FIGHT, ATTR.FLY],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  뽀록나: {
    type: [ATTR.GRASS, ATTR.POISON],
    skillType: [ATTR.EVIL, ATTR.GRASS, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  육파리: {
    type: [ATTR.LAND, ATTR.GRASS],
    skillType: [ATTR.LAND, ATTR.GRASS, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  루가루암: {
    type: [ATTR.ROCK],
    skillType: [ATTR.ROCK, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  바우첼: {
    type: [ATTR.FAIRY],
    skillType: [ATTR.FAIRY, ATTR.NORMAL, ATTR.EVIL],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  마피티프: {
    type: [ATTR.EVIL],
    skillType: [ATTR.EVIL, ATTR.FIGHT, ATTR.DRAGON, ATTR.NORMAL],
    tip: [TIP.REFLECTOR],
  },
  빠르모트: {
    type: [ATTR.THUNDER, ATTR.FIGHT],
    skillType: [ATTR.THUNDER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  파밀리쥐: {
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL, ATTR.FAIRY, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  갸라도스: {
    type: [ATTR.WATER, ATTR.FLY],
    skillType: [ATTR.WATER, ATTR.FLY, ATTR.EVIL, ATTR.ICE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  핫삼: {
    type: [ATTR.BUG, ATTR.STEEL],
    skillType: [ATTR.BUG, ATTR.STEEL, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  헤라크로스: {
    type: [ATTR.BUG, ATTR.FIGHT],
    skillType: [ATTR.NORMAL, ATTR.BUG, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  자포코일: {
    type: [ATTR.THUNDER, ATTR.STEEL],
    skillType: [ATTR.NORMAL, ATTR.THUNDER, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  코터스: {
    type: [ATTR.FIRE],
    skillType: [ATTR.NORMAL, ATTR.FIRE, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  불카모스: {
    type: [ATTR.FIRE, ATTR.BUG],
    skillType: [ATTR.FIRE, ATTR.BUG, ATTR.FLY],
    tip: [TIP.TENTOFLIGHT],
  },
  모스노우: {
    type: [ATTR.ICE, ATTR.BUG],
    skillType: [ATTR.ICE, ATTR.BUG],
    tip: [TIP.TENTOFLIGHT],
  },
  크레베이스: {
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.STEEL],
    tip: [TIP.REFLECTOR],
  },
  찌르성게: {
    type: [ATTR.THUNDER],
    skillType: [ATTR.THUNDER, ATTR.WATER, ATTR.POISON],
    tip: [TIP.REFLECTOR],
  },
  더시마사리: {
    type: [ATTR.POISON, ATTR.WATER],
    skillType: [ATTR.POISON, ATTR.WATER, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  블로스터: {
    type: [ATTR.WATER],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.FIGHT],
    tip: [TIP.TENTOFLIGHT],
  },
  야도킹: {
    type: [ATTR.WATER, ATTR.ESPER],
    skillType: [ATTR.ESPER, ATTR.WATER, ATTR.FIRE],
    tip: [TIP.TENTOFLIGHT],
  },
  콜로솔트: {
    type: [ATTR.ROCK, ATTR.STEEL],
    skillType: [ATTR.ROCK, ATTR.STEEL, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  킬라플로르: {
    type: [ATTR.ROCK, ATTR.POISON],
    skillType: [ATTR.ROCK, ATTR.POISON, ATTR.NORMAL],
    tip: [TIP.TENTOFLIGHT],
  },
  우락고래: {
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.NORMAL, ATTR.LAND],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  어써러셔: {
    type: [ATTR.WATER],
    skillType: [ATTR.WATER, ATTR.DRAGON, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  꿈트렁: {
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.NORMAL, ATTR.LAND],
    tip: [TIP.REFLECTOR],
  },
  절벼게: {
    type: [ATTR.ROCK],
    skillType: [ATTR.FIGHT, ATTR.ROCK, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  떨구새: {
    type: [ATTR.FLY, ATTR.EVIL],
    skillType: [ATTR.FLY, ATTR.EVIL, ATTR.ROCK],
    tip: [TIP.NODEBUFF, TIP.REFLECTOR],
  },
  부르르룸: {
    type: [ATTR.STEEL, ATTR.POISON],
    skillType: [ATTR.STEEL, ATTR.POISON, ATTR.FIRE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  모토마: {
    type: [ATTR.DRAGON, ATTR.NORMAL],
    skillType: [ATTR.DRAGON, ATTR.NORMAL, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  태깅구르: {
    type: [ATTR.POISON, ATTR.NORMAL],
    skillType: [ATTR.POISON, ATTR.NORMAL, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  두드리짱: {
    type: [ATTR.FAIRY, ATTR.STEEL],
    skillType: [ATTR.FAIRY, ATTR.STEEL, ATTR.EVIL],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  카디나르마: {
    type: [ATTR.FIRE, ATTR.ESPER],
    skillType: [ATTR.FIRE, ATTR.ESPER, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  파라블레이즈: {
    type: [ATTR.FIRE, ATTR.GHOST],
    skillType: [ATTR.FIRE, ATTR.GHOST, ATTR.ESPER],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },

  // 7성
  브리가론: {
    type: [ATTR.GRASS, ATTR.FIGHT],
    skillType: [ATTR.LAND, ATTR.FIGHT, ATTR.ROCK, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
};

// safeType은 방어 상성 0.5배 0.25배, 0배
// dangerType은 방어상성 4배, 2배, 1배
module.exports.USER_MONSTERS = {
  타부자고: {
    type: [ATTR.STEEL, ATTR.GHOST],
    safeType: [
      ATTR.STEEL,
      ATTR.DRAGON,
      ATTR.ROCK,
      ATTR.FLY,
      ATTR.ICE,
      ATTR.ESPER,
      ATTR.FAIRY,
      ATTR.GRASS,
      ATTR.BUG,
      ATTR.FIGHT,
      ATTR.NORMAL,
      ATTR.POISON,
    ],
    dangerType: [
      ATTR.GHOST,
      ATTR.LAND,
      ATTR.FIRE,
      ATTR.EVIL,
      ATTR.WATER,
      ATTR.THUNDER,
    ],
    tera: ATTR.GHOST,
    tip: [TIP.BUFFC],
  },
  마릴리: {
    type: [ATTR.FAIRY, ATTR.WATER],
    safeType: [
      ATTR.FIGHT,
      ATTR.WATER,
      ATTR.BUG,
      ATTR.FIRE,
      ATTR.EVIL,
      ATTR.ICE,
      ATTR.DRAGON,
    ],
    dangerType: [
      ATTR.POISON,
      ATTR.THUNDER,
      ATTR.GRASS,
      ATTR.STEEL,
      ATTR.GHOST,
      ATTR.NORMAL,
      ATTR.LAND,
      ATTR.ROCK,
      ATTR.FLY,
      ATTR.ESPER,
      ATTR.FAIRY,
    ],
    tera: ATTR.FAIRY,
    tip: [TIP.BUFFA],
  },
  위유이: {
    type: [ATTR.EVIL, ATTR.FIRE],
    safeType: [
      ATTR.STEEL,
      ATTR.GHOST,
      ATTR.FIRE,
      ATTR.EVIL,
      ATTR.ICE,
      ATTR.GRASS,
      ATTR.ESPER,
    ],
    dangerType: [
      ATTR.FIGHT,
      ATTR.LAND,
      ATTR.WATER,
      ATTR.ROCK,
      ATTR.NORMAL,
      ATTR.POISON,
      ATTR.DRAGON,
      ATTR.BUG,
      ATTR.FLY,
      ATTR.THUNDER,
      ATTR.FAIRY,
    ],
    tera: ATTR.EVIL,
    tip: [TIP.BUFFC],
  },
  무쇠손: {
    type: [ATTR.THUNDER, ATTR.FIGHT],
    safeType: [ATTR.STEEL, ATTR.ROCK, ATTR.BUG, ATTR.THUNDER, ATTR.EVIL],
    dangerType: [
      ATTR.LAND,
      ATTR.ESPER,
      ATTR.FAIRY,
      ATTR.FIGHT,
      ATTR.GHOST,
      ATTR.NORMAL,
      ATTR.POISON,
      ATTR.DRAGON,
      ATTR.WATER,
      ATTR.FIRE,
      ATTR.FLY,
      ATTR.ICE,
      ATTR.GRASS,
    ],
    tera: ATTR.FIGHT,
    tip: [TIP.BUFFA],
  },
  미라이돈: {
    type: [ATTR.THUNDER],
    safeType: [
      ATTR.STEEL,
      ATTR.WATER,
      ATTR.FIRE,
      ATTR.FLY,
      ATTR.GRASS,
      ATTR.THUNDER,
    ],
    dangerType: [
      ATTR.DRAGON,
      ATTR.LAND,
      ATTR.ICE,
      ATTR.FAIRY,
      ATTR.FIGHT,
      ATTR.GHOST,
      ATTR.NORMAL,
      ATTR.POISON,
      ATTR.ROCK,
      ATTR.BUG,
      ATTR.EVIL,
      ATTR.ESPER,
    ],
    tera: ATTR.THUNDER,
    tip: [TIP.BUFFC],
  },
  한카리아스: {
    type: [ATTR.LAND, ATTR.DRAGON],
    safeType: [ATTR.POISON, ATTR.ROCK, ATTR.FIRE, ATTR.THUNDER],
    dangerType: [
      ATTR.ICE,
      ATTR.DRAGON,
      ATTR.FAIRY,
      ATTR.STEEL,
      ATTR.FIGHT,
      ATTR.GHOST,
      ATTR.NORMAL,
      ATTR.LAND,
      ATTR.WATER,
      ATTR.BUG,
      ATTR.FLY,
      ATTR.EVIL,
      ATTR.ESPER,
      ATTR.GRASS,
    ],
    tera: ATTR.LAND,
    tip: [TIP.BUFFA],
  },
  파라블레이즈: {
    type: [ATTR.FIRE, ATTR.GHOST],
    safeType: [
      ATTR.STEEL,
      ATTR.POISON,
      ATTR.FIRE,
      ATTR.ICE,
      ATTR.FAIRY,
      ATTR.GRASS,
      ATTR.BUG,
      ATTR.FIGHT,
      ATTR.NORMAL,
    ],
    dangerType: [
      ATTR.GHOST,
      ATTR.LAND,
      ATTR.WATER,
      ATTR.ROCK,
      ATTR.EVIL,
      ATTR.DRAGON,
      ATTR.FLY,
      ATTR.ESPER,
      ATTR.THUNDER,
    ],
    tera: ATTR.FIRE,
    tip: [TIP.BUFFA],
  },
  님피아: {
    type: [ATTR.FAIRY],
    safeType: [ATTR.BUG, ATTR.FIGHT, ATTR.EVIL, ATTR.DRAGON],
    dangerType: [
      ATTR.STEEL,
      ATTR.POISON,
      ATTR.NORMAL,
      ATTR.FIRE,
      ATTR.WATER,
      ATTR.GRASS,
      ATTR.THUNDER,
      ATTR.ICE,
      ATTR.LAND,
      ATTR.FLY,
      ATTR.ESPER,
      ATTR.ROCK,
      ATTR.GHOST,
      ATTR.FAIRY,
    ],
    tera: ATTR.FAIRY,
    tip: [TIP.BUFFC],
  },
  저승갓숭: {
    type: [ATTR.FIGHT, ATTR.GHOST],
    safeType: [ATTR.POISON, ATTR.ROCK, ATTR.BUG, ATTR.FIGHT, ATTR.NORMAL],
    dangerType: [
      ATTR.GHOST,
      ATTR.FLY,
      ATTR.ESPER,
      ATTR.FAIRY,
      ATTR.STEEL,
      ATTR.DRAGON,
      ATTR.LAND,
      ATTR.WATER,
      ATTR.EVIL,
      ATTR.FIRE,
      ATTR.ICE,
      ATTR.THUNDER,
      ATTR.GRASS,
    ],
    tera: ATTR.GHOST,
    tip: [TIP.BUFFA],
  },
  나이킹: {
    type: [ATTR.STEEL],
    safeType: [
      ATTR.STEEL,
      ATTR.NORMAL,
      ATTR.DRAGON,
      ATTR.ROCK,
      ATTR.BUG,
      ATTR.FLY,
      ATTR.ICE,
      ATTR.ESPER,
      ATTR.FAIRY,
      ATTR.GRASS,
      ATTR.POISON,
    ],
    dangerType: [
      ATTR.FIGHT,
      ATTR.LAND,
      ATTR.FIRE,
      ATTR.GHOST,
      ATTR.WATER,
      ATTR.EVIL,
      ATTR.THUNDER,
    ],
    tera: ATTR.STEEL,
    tip: [TIP.BUFFA],
  },
  // 마스카나: {
  //   type: [ATTR.GRASS],
  //   safeType: [
  //     ATTR.GHOST,
  //     ATTR.LAND,
  //     ATTR.WATER,
  //     ATTR.EVIL,
  //     ATTR.THUNDER,
  //     ATTR.GRASS,
  //     ATTR.ESPER,
  //   ],
  //   dangerType: [
  //     ATTR.BUG,
  //     ATTR.FIGHT,
  //     ATTR.POISON,
  //     ATTR.FIRE,
  //     ATTR.FLY,
  //     ATTR.ICE,
  //     ATTR.FAIRY,
  //     ATTR.STEEL,
  //     ATTR.NORMAL,
  //     ATTR.DRAGON,
  //     ATTR.ROCK,
  //   ],
  //   tera: ATTR.GRASS,
  //   tip: [TIP.BUFFC],
  // },
};
