const { ATTR, TIP } = require("./types");

module.exports.RAID_MONSTERS = {
  // 6성
  리피아: {
    style: TIP.ATTACKA,
    type: [ATTR.GRASS],
    skillType: [ATTR.FIGHT, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
  샤미드: {
    style: TIP.ATTACKC,
    type: [ATTR.WATER],
    skillType: [ATTR.WATER],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  부스터: {
    style: TIP.ATTACKA,
    type: [ATTR.FIRE],
    skillType: [ATTR.FIRE],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  쥬피썬더: {
    style: TIP.ATTACKC,
    type: [ATTR.THUNDER],
    skillType: [ATTR.THUNDER, ATTR.GHOST],
    tip: [TIP.TENTOFLIGHT],
  },
  글레이시아: {
    style: TIP.ATTACKC,
    type: [ATTR.ICE],
    skillType: [ATTR.ICE],
    tip: [TIP.TENTOFLIGHT],
  },
  블래키: {
    style: TIP.ATTACKA,
    type: [ATTR.EVIL],
    skillType: [ATTR.EVIL],
    tip: [],
  },
  에브이: {
    style: TIP.ATTACKC,
    type: [ATTR.ESPER],
    skillType: [ATTR.ESPER],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  님피아: {
    style: TIP.ATTACKC,
    type: [ATTR.FAIRY],
    skillType: [ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  가디안: {
    style: TIP.ATTACKC,
    type: [ATTR.ESPER, ATTR.FAIRY],
    skillType: [ATTR.ESPER, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  엘레이드: {
    style: TIP.ATTACKA,
    type: [ATTR.ESPER, ATTR.FIRE],
    skillType: [ATTR.ESPER, ATTR.FIRE, ATTR.FIGHT],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  망나뇽: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.FLY],
    skillType: [ATTR.DRAGON, ATTR.WATER],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  한카리아스: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.LAND],
    skillType: [ATTR.DRAGON, ATTR.LAND, ATTR.FIRE, ATTR.ROCK],
    tip: [TIP.REFLECTOR],
  },
  삼삼드래: {
    style: TIP.ATTACKC,
    type: [ATTR.DRAGON, ATTR.EVIL],
    skillType: [ATTR.DRAGON, ATTR.EVIL],
    tip: [TIP.TENTOFLIGHT],
  },
  보만다: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.FLY],
    skillType: [ATTR.DRAGON, ATTR.FLY, ATTR.FIRE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  드래펄트: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.GHOST],
    skillType: [ATTR.DRAGON, ATTR.GHOST, ATTR.THUNDER, ATTR.FIRE],
    tip: [TIP.NODEBUFF, TIP.REFLECTOR],
  },
  드닐레이브: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.ICE],
    skillType: [ATTR.DRAGON, ATTR.ICE, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  미끄래곤: {
    style: TIP.ATTACKC,
    type: [ATTR.DRAGON, ATTR.GHOST],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.POISON, ATTR.GRASS],
    tip: [TIP.TENTOFLIGHT],
  },
  엑스라이즈: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON],
    skillType: [ATTR.DRAGON, ATTR.EVIL, ATTR.NORMAL, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  드래캄: {
    style: TIP.ATTACKC,
    type: [ATTR.DRAGON, ATTR.POISON],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  마기라스: {
    style: TIP.ATTACKA,
    type: [ATTR.ROCK, ATTR.EVIL],
    skillType: [ATTR.ROCK, ATTR.EVIL, ATTR.FIRE],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  페리퍼: {
    style: TIP.ATTACKC,
    type: [ATTR.WATER, ATTR.FLY],
    skillType: [ATTR.WATER, ATTR.FLY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  찌르호크: {
    style: TIP.ATTACKA,
    type: [ATTR.NORMAL, ATTR.FLY],
    skillType: [ATTR.NORMAL, ATTR.FLY, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  파이어로: {
    style: TIP.ATTACKA,
    type: [ATTR.FIRE, ATTR.FLY],
    skillType: [ATTR.FIRE, ATTR.FLY],
    tip: [TIP.REFLECTOR],
  },
  아머까오: {
    style: TIP.ATTACKA,
    type: [ATTR.STEEL, ATTR.FLY],
    skillType: [ATTR.STEEL, ATTR.FLY, ATTR.FIGHT],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  찌리비크: {
    style: TIP.ATTACKC,
    type: [ATTR.THUNDER, ATTR.FLY],
    skillType: [ATTR.FLY, ATTR.THUNDER],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  메타몽: {
    style: TIP.ATTACKA,
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL],
    tip: [],
  },
  팬텀: {
    style: TIP.ATTACKC,
    type: [ATTR.GHOST, ATTR.POISON],
    skillType: [ATTR.GHOST, ATTR.POISON, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  따라큐: {
    style: TIP.ATTACKA,
    type: [ATTR.GHOST, ATTR.FAIRY],
    skillType: [ATTR.GHOST, ATTR.FAIRY, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
  해피너스: {
    style: TIP.ATTACKC,
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL, ATTR.FAIRY],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  키키링: {
    style: TIP.ATTACKC,
    type: [ATTR.NORMAL, ATTR.ESPER],
    skillType: [ATTR.NORMAL, ATTR.ESPER, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.TENTOFLIGHT],
  },
  켄타로스: {
    style: TIP.ATTACKA,
    type: [ATTR.FIGHT],
    skillType: [ATTR.NORMAL, ATTR.ESPER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  켄타로스불: {
    style: TIP.ATTACKA,
    type: [ATTR.FIGHT, ATTR.FIRE],
    skillType: [ATTR.FIRE, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  켄타로스물: {
    style: TIP.ATTACKA,
    type: [ATTR.FIGHT, ATTR.WATER],
    skillType: [ATTR.WATER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  대도각참: {
    style: TIP.ATTACKA,
    type: [ATTR.EVIL, ATTR.STEEL],
    skillType: [ATTR.EVIL, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  저승갓숭: {
    style: TIP.ATTACKA,
    type: [ATTR.FIGHT, ATTR.GHOST],
    skillType: [ATTR.EVIL, ATTR.FIGHT, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  토오: {
    style: TIP.ATTACKA,
    type: [ATTR.POISON, ATTR.LAND],
    skillType: [ATTR.POISON, ATTR.LAND, ATTR.BUG],
    tip: [TIP.PROVOCATION, TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  하마돈: {
    style: TIP.ATTACKA,
    type: [ATTR.LAND],
    skillType: [ATTR.LAND, ATTR.ICE, ATTR.ROCK],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  버섯모: {
    style: TIP.ATTACKA,
    type: [ATTR.GRASS, ATTR.FIGHT],
    skillType: [ATTR.GRASS, ATTR.FIGHT, ATTR.FLY],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  뽀록나: {
    style: TIP.ATTACKC,
    type: [ATTR.GRASS, ATTR.POISON],
    skillType: [ATTR.EVIL, ATTR.GRASS, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  육파리: {
    style: TIP.ATTACKC,
    type: [ATTR.LAND, ATTR.GRASS],
    skillType: [ATTR.LAND, ATTR.GRASS, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  루가루암: {
    style: TIP.ATTACKA,
    type: [ATTR.ROCK],
    skillType: [ATTR.ROCK, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  바우첼: {
    style: TIP.ATTACKA,
    type: [ATTR.FAIRY],
    skillType: [ATTR.FAIRY, ATTR.NORMAL, ATTR.EVIL],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  마피티프: {
    style: TIP.ATTACKA,
    type: [ATTR.EVIL],
    skillType: [ATTR.EVIL, ATTR.FIGHT, ATTR.DRAGON, ATTR.NORMAL],
    tip: [TIP.REFLECTOR],
  },
  빠르모트: {
    style: TIP.ATTACKA,
    type: [ATTR.THUNDER, ATTR.FIGHT],
    skillType: [ATTR.THUNDER, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  파밀리쥐: {
    style: TIP.ATTACKA,
    type: [ATTR.NORMAL],
    skillType: [ATTR.NORMAL, ATTR.FAIRY, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  갸라도스: {
    style: TIP.ATTACKA,
    type: [ATTR.WATER, ATTR.FLY],
    skillType: [ATTR.WATER, ATTR.FLY, ATTR.EVIL, ATTR.ICE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  핫삼: {
    style: TIP.ATTACKA,
    type: [ATTR.BUG, ATTR.STEEL],
    skillType: [ATTR.BUG, ATTR.STEEL, ATTR.FIGHT],
    tip: [TIP.REFLECTOR],
  },
  헤라크로스: {
    style: TIP.ATTACKA,
    type: [ATTR.BUG, ATTR.FIGHT],
    skillType: [ATTR.NORMAL, ATTR.BUG, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  자포코일: {
    style: TIP.ATTACKC,
    type: [ATTR.THUNDER, ATTR.STEEL],
    skillType: [ATTR.NORMAL, ATTR.THUNDER, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  코터스: {
    style: TIP.ATTACKC,
    type: [ATTR.FIRE],
    skillType: [ATTR.FIRE, ATTR.POISON],
    tip: [TIP.PROVOCATION, TIP.NODEBUFF, TIP.TENTOFLIGHT],
  },
  불카모스: {
    style: TIP.ATTACKC,
    type: [ATTR.FIRE, ATTR.BUG],
    skillType: [ATTR.FIRE, ATTR.BUG, ATTR.FLY],
    tip: [TIP.TENTOFLIGHT],
  },
  모스노우: {
    style: TIP.ATTACKC,
    type: [ATTR.ICE, ATTR.BUG],
    skillType: [ATTR.ICE, ATTR.BUG],
    tip: [TIP.TENTOFLIGHT],
  },
  크레베이스: {
    style: TIP.ATTACKA,
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.STEEL],
    tip: [TIP.REFLECTOR],
  },
  찌르성게: {
    style: TIP.ATTACKA,
    type: [ATTR.THUNDER],
    skillType: [ATTR.THUNDER, ATTR.WATER, ATTR.POISON],
    tip: [TIP.REFLECTOR],
  },
  더시마사리: {
    style: TIP.ATTACKA,
    type: [ATTR.POISON, ATTR.WATER],
    skillType: [ATTR.POISON, ATTR.WATER, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  블로스터: {
    style: TIP.ATTACKC,
    type: [ATTR.WATER],
    skillType: [ATTR.DRAGON, ATTR.WATER, ATTR.FIGHT],
    tip: [TIP.TENTOFLIGHT],
  },
  야도킹: {
    style: TIP.ATTACKC,
    type: [ATTR.WATER, ATTR.ESPER],
    skillType: [ATTR.ESPER, ATTR.WATER, ATTR.FIRE],
    tip: [TIP.TENTOFLIGHT],
  },
  콜로솔트: {
    style: TIP.ATTACKA,
    type: [ATTR.ROCK, ATTR.STEEL],
    skillType: [ATTR.ROCK, ATTR.STEEL, ATTR.FIGHT],
    tip: [TIP.SKILLSWAP, TIP.NODEBUFF, TIP.REFLECTOR],
  },
  킬라플로르: {
    style: TIP.ATTACKC,
    type: [ATTR.ROCK, ATTR.POISON],
    skillType: [ATTR.ROCK, ATTR.POISON, ATTR.NORMAL],
    tip: [TIP.TENTOFLIGHT],
  },
  우락고래: {
    style: TIP.ATTACKA,
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.NORMAL, ATTR.LAND],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  어써러셔: {
    style: TIP.ATTACKA,
    type: [ATTR.WATER],
    skillType: [ATTR.WATER, ATTR.DRAGON, ATTR.STEEL],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  꿈트렁: {
    style: TIP.ATTACKA,
    type: [ATTR.ICE],
    skillType: [ATTR.ICE, ATTR.LAND],
    tip: [TIP.REFLECTOR],
  },
  절벼게: {
    style: TIP.ATTACKA,
    type: [ATTR.ROCK],
    skillType: [ATTR.FIGHT, ATTR.ROCK, ATTR.BUG],
    tip: [TIP.REFLECTOR],
  },
  떨구새: {
    style: TIP.ATTACKA,
    type: [ATTR.FLY, ATTR.EVIL],
    skillType: [ATTR.FLY, ATTR.EVIL, ATTR.ROCK],
    tip: [TIP.NODEBUFF, TIP.REFLECTOR],
  },
  부르르룸: {
    style: TIP.ATTACKA,
    type: [ATTR.STEEL, ATTR.POISON],
    skillType: [ATTR.STEEL, ATTR.POISON, ATTR.FIRE],
    tip: [TIP.SKILLSWAP, TIP.REFLECTOR],
  },
  모토마: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON, ATTR.NORMAL],
    skillType: [ATTR.DRAGON, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  태깅구르: {
    style: TIP.ATTACKA,
    type: [ATTR.POISON, ATTR.NORMAL],
    skillType: [ATTR.POISON, ATTR.NORMAL, ATTR.EVIL],
    tip: [TIP.REFLECTOR],
  },
  두드리짱: {
    style: TIP.ATTACKA,
    type: [ATTR.FAIRY, ATTR.STEEL],
    skillType: [ATTR.FAIRY, ATTR.STEEL, ATTR.EVIL],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },
  카디나르마: {
    style: TIP.ATTACKC,
    type: [ATTR.FIRE, ATTR.ESPER],
    skillType: [ATTR.FIRE, ATTR.ESPER, ATTR.GHOST],
    tip: [TIP.PROVOCATION, TIP.TENTOFLIGHT],
  },
  파라블레이즈: {
    style: TIP.ATTACKA,
    type: [ATTR.FIRE, ATTR.GHOST],
    skillType: [ATTR.FIRE, ATTR.GHOST, ATTR.ESPER],
    tip: [TIP.PROVOCATION, TIP.REFLECTOR],
  },

  // 7성
  브리가론: {
    style: TIP.ATTACKA,
    type: [ATTR.GRASS, ATTR.FIGHT],
    skillType: [ATTR.LAND, ATTR.FIGHT, ATTR.ROCK, ATTR.GRASS],
    tip: [TIP.REFLECTOR],
  },
};

// safeType은 방어 상성 0.5배 0.25배, 0배
// dangerType은 방어상성 4배, 2배, 1배
module.exports.USER_MONSTERS = {
  타부자고: {
    style: TIP.ATTACKC,
    type: [ATTR.GHOST],
    safeType: {
      [ATTR.WATER]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.DRAGON]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.FLY]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.ESPER]: 0.5,
      [ATTR.FAIRY]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.BUG]: 0.25,
      [ATTR.FIGHT]: 0,
      [ATTR.NORMAL]: 0,
      [ATTR.POISON]: 0,
    },
    dangerType: [ATTR.GHOST, ATTR.LAND, ATTR.FIRE, ATTR.EVIL],
    tera: [ATTR.GHOST],
    tip: [TIP.BUFFC],
  },
  마릴리: {
    style: TIP.ATTACKA,
    type: [ATTR.FAIRY],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.LAND]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.FLY]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.FIGHT]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.BUG]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.DRAGON]: 0,
    },
    dangerType: [ATTR.POISON, ATTR.THUNDER, ATTR.GRASS],
    tera: [ATTR.FAIRY],
    tip: [TIP.BUFFA],
  },
  위유이: {
    style: TIP.ATTACKC,
    type: [ATTR.EVIL],
    safeType: {
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.BUG]: 1,
      [ATTR.FLY]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.GHOST]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.ESPER]: 0,
    },
    dangerType: [ATTR.FIGHT, ATTR.LAND, ATTR.WATER, ATTR.ROCK],
    tera: [ATTR.EVIL],
    tip: [TIP.BUFFC, TIP.HPROVOCATION],
  },
  무쇠손: {
    style: TIP.ATTACKA,
    type: [ATTR.FIGHT],
    safeType: {
      [ATTR.FIGHT]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.WATER]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.FLY]: 1,
      [ATTR.ICE]: 1,
      [ATTR.GRASS]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.BUG]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.EVIL]: 0.5,
    },
    dangerType: [ATTR.LAND, ATTR.ESPER, ATTR.FAIRY],
    tera: [ATTR.FIGHT],
    tip: [TIP.BUFFA],
  },
  미라이돈: {
    style: TIP.ATTACKC,
    type: [ATTR.THUNDER],
    safeType: {
      [ATTR.FIGHT]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.BUG]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.FLY]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.THUNDER]: 0.25,
    },
    dangerType: [ATTR.LAND, ATTR.DRAGON, ATTR.ICE, ATTR.FAIRY],
    tera: [ATTR.THUNDER],
    tip: [TIP.BUFFC],
  },
  한카리아스: {
    style: TIP.ATTACKA,
    type: [ATTR.LAND, ATTR.DRAGON],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.FIGHT]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.LAND]: 1,
      [ATTR.WATER]: 1,
      [ATTR.BUG]: 1,
      [ATTR.FLY]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.GRASS]: 1,
      [ATTR.POISON]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.THUNDER]: 0,
    },
    dangerType: [ATTR.ICE, ATTR.DRAGON, ATTR.FAIRY],
    tera: [ATTR.LAND],
    tip: [TIP.BUFFA],
  },
  파라블레이즈: {
    style: TIP.ATTACKA,
    type: [ATTR.FIRE],
    safeType: {
      [ATTR.DRAGON]: 1,
      [ATTR.FLY]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.FAIRY]: 0.5,
      [ATTR.POISON]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.BUG]: 0.25,
      [ATTR.FIGHT]: 0,
      [ATTR.NORMAL]: 0,
    },
    dangerType: [ATTR.GHOST, ATTR.LAND, ATTR.WATER, ATTR.ROCK, ATTR.EVIL],
    tera: [ATTR.FIRE],
    tip: [TIP.BUFFA],
  },
  님피아: {
    style: TIP.ATTACKC,
    type: [ATTR.FAIRY],
    safeType: {
      [ATTR.NORMAL]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.WATER]: 1,
      [ATTR.GRASS]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.ICE]: 1,
      [ATTR.LAND]: 1,
      [ATTR.FLY]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.BUG]: 0.5,
      [ATTR.FIGHT]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.DRAGON]: 0,
    },
    dangerType: [ATTR.POISON, ATTR.STEEL],
    tera: [ATTR.FAIRY],
    tip: [TIP.BUFFC],
  },
  저승갓숭: {
    style: TIP.ATTACKA,
    type: [ATTR.GHOST],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.WATER]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.ICE]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.GRASS]: 1,
      [ATTR.POISON]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.BUG]: 0.25,
      [ATTR.FIGHT]: 0,
      [ATTR.NORMAL]: 0,
    },
    dangerType: [ATTR.GHOST, ATTR.FLY, ATTR.ESPER, ATTR.FAIRY],
    tera: [ATTR.GHOST],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  나이킹: {
    style: TIP.ATTACKA,
    type: [ATTR.STEEL],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.WATER]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.NORMAL]: 0.5,
      [ATTR.DRAGON]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.BUG]: 0.5,
      [ATTR.FLY]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.ESPER]: 0.5,
      [ATTR.FAIRY]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.POISON]: 0,
    },
    dangerType: [ATTR.FIGHT, ATTR.LAND, ATTR.FIRE],
    tera: [ATTR.STEEL],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  마스카나: {
    style: TIP.ATTACKC,
    type: [ATTR.GRASS],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.LAND]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.GHOST]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.ESPER]: 0,
    },
    dangerType: [
      ATTR.BUG,
      ATTR.POISON,
      ATTR.FIRE,
      ATTR.FLY,
      ATTR.ICE,
      ATTR.FIGHT,
      ATTR.FAIRY,
    ],
    tera: [ATTR.GRASS],
    tip: [TIP.BUFFC],
  },
  야도란: {
    style: TIP.ATTACKC,
    type: [ATTR.ESPER],
    safeType: {
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.FLY]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.FIGHT]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.ESPER]: 0.5,
    },
    dangerType: [ATTR.GHOST, ATTR.BUG, ATTR.EVIL, ATTR.THUNDER, ATTR.GRASS],
    tera: [ATTR.ESPER],
    tip: [TIP.BUFFC],
  },
  대도각참: {
    style: TIP.ATTACKA,
    type: [ATTR.STEEL],
    safeType: {
      [ATTR.WATER]: 1,
      [ATTR.BUG]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.GHOST]: 0.5,
      [ATTR.STEEL]: 0.5,
      [ATTR.NORMAL]: 0.5,
      [ATTR.DRAGON]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.FLY]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.POISON]: 0,
      [ATTR.ESPER]: 0,
    },
    dangerType: [ATTR.FIGHT, ATTR.LAND, ATTR.FIRE],
    tera: [ATTR.STEEL],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  웨이니발: {
    style: TIP.ATTACKA,
    type: [ATTR.WATER],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.BUG]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.ICE]: 0.5,
    },
    dangerType: [ATTR.FIGHT, ATTR.ESPER, ATTR.THUNDER, ATTR.FAIRY, ATTR.GRASS],
    tera: [ATTR.WATER],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  엑스라이즈: {
    style: TIP.ATTACKA,
    type: [ATTR.DRAGON],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.FIGHT]: 1,
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.BUG]: 1,
      [ATTR.FLY]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.FIRE]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.GRASS]: 0.5,
    },
    dangerType: [ATTR.DRAGON, ATTR.ICE, ATTR.FAIRY],
    tera: [ATTR.DRAGON],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  모크나이퍼: {
    style: TIP.ATTACKC,
    type: [ATTR.GRASS],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.BUG]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.WATER]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.LAND]: 0.5,
      [ATTR.FIGHT]: 0,
      [ATTR.NORMAL]: 0,
    },
    dangerType: [ATTR.FIRE, ATTR.ICE, ATTR.FLY, ATTR.GHOST, ATTR.EVIL],
    tera: [ATTR.GRASS],
    tip: [TIP.BUFFC],
  },
  불카모스: {
    style: TIP.ATTACKC,
    type: [ATTR.BUG],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.STEEL]: 0.5,
      [ATTR.FIGHT]: 0.5,
      [ATTR.BUG]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.FAIRY]: 0.5,
      [ATTR.GRASS]: 0.25,
    },
    dangerType: [ATTR.ROCK, ATTR.WATER, ATTR.FLY],
    tera: [ATTR.BUG],
    tip: [TIP.BUFFC],
  },
  무쇠독나방: {
    style: TIP.ATTACKC,
    type: [ATTR.POISON],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.FLY]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.FIGHT]: 0.5,
      [ATTR.POISON]: 0.5,
      [ATTR.STEEL]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.ICE]: 0.5,
      [ATTR.BUG]: 0.25,
      [ATTR.GRASS]: 0.25,
      [ATTR.FAIRY]: 0.25,
    },
    dangerType: [ATTR.LAND, ATTR.ROCK, ATTR.WATER, ATTR.ESPER],
    tera: [ATTR.POISON],
    tip: [TIP.BUFFC],
  },
  드닐레이브: {
    style: TIP.ATTACKA,
    type: [ATTR.ICE],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.LAND]: 1,
      [ATTR.BUG]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.FLY]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ICE]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.WATER]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.GRASS]: 0.5,
    },
    dangerType: [ATTR.STEEL, ATTR.FIGHT, ATTR.DRAGON, ATTR.ROCK, ATTR.FAIRY],
    tera: [ATTR.ICE],
    tip: [TIP.BUFFA],
  },
  아르세우스: {
    style: TIP.ATTACKC,
    type: [ATTR.ROCK],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.DRAGON]: 1,
      [ATTR.BUG]: 1,
      [ATTR.EVIL]: 1,
      [ATTR.ICE]: 1,
      [ATTR.ESPER]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.FAIRY]: 1,
      [ATTR.NORMAL]: 0.5,
      [ATTR.POISON]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.FLY]: 0.5,
    },
    dangerType: [ATTR.STEEL, ATTR.FIGHT, ATTR.LAND, ATTR.WATER, ATTR.GRASS],
    tera: [ATTR.ROCK],
    tip: [TIP.BUFFC, TIP.HPROVOCATION],
  },
  무쇠무인: {
    style: TIP.ATTACKA,
    type: [ATTR.FAIRY],
    safeType: {
      [ATTR.GHOST]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.LAND]: 1,
      [ATTR.WATER]: 1,
      [ATTR.FIRE]: 1,
      [ATTR.ICE]: 1,
      [ATTR.THUNDER]: 1,
      [ATTR.GRASS]: 1,
      [ATTR.FIGHT]: 0.5,
      [ATTR.ROCK]: 0.5,
      [ATTR.BUG]: 0.25,
      [ATTR.EVIL]: 0.25,
      [ATTR.DRAGON]: 0,
    },
    dangerType: [ATTR.STEEL, ATTR.POISON, ATTR.FLY, ATTR.ESPER, ATTR.FAIRY],
    tera: [ATTR.FAIRY],
    tip: [TIP.BUFFA, TIP.HPROVOCATION],
  },
  삼삼드래: {
    style: TIP.ATTACKC,
    type: [ATTR.EVIL],
    safeType: {
      [ATTR.STEEL]: 1,
      [ATTR.NORMAL]: 1,
      [ATTR.POISON]: 1,
      [ATTR.ROCK]: 1,
      [ATTR.FLY]: 1,
      [ATTR.GHOST]: 0.5,
      [ATTR.WATER]: 0.5,
      [ATTR.FIRE]: 0.5,
      [ATTR.EVIL]: 0.5,
      [ATTR.THUNDER]: 0.5,
      [ATTR.GRASS]: 0.5,
      [ATTR.LAND]: 0,
      [ATTR.ESPER]: 0,
    },
    dangerType: [ATTR.FAIRY, ATTR.FIGHT, ATTR.DRAGON, ATTR.BUG, ATTR.ICE],
    tera: [ATTR.EVIL],
    tip: [TIP.BUFFC, TIP.HPROVOCATION],
  },
};
