module.exports.ATTR = {
  NORMAL: "노말",
  FIRE: "불",
  WATER: "물",
  THUNDER: "번개",
  ICE: "얼음",
  GRASS: "풀",
  FIGHT: "격투",
  POISON: "독",
  LAND: "땅",
  FLY: "비행",
  BUG: "벌레",
  ESPER: "에스퍼",
  ROCK: "바위",
  GHOST: "고스트",
  DRAGON: "드래곤",
  EVIL: "악",
  STEEL: "강철",
  FAIRY: "페어리",
};

// 유리한 정보 리스팅
// 싫은소리, 거짓울음, 빛의장막, 도발, 스킬스왑...
module.exports.TIP = {
  ATTACKA: "물공", // 물공형 몬스터
  ATTACKC: "특공", // 특공형 몬스터
  NODEBUFF: "디버프 금지", // 디버프 무효화 또는 역상승
  PROVOCATION: "도발유리", // 상태/변화기 봉인
  HPROVOCATION: "도발", // 도발 보유
  IPROVOCATION: "도발무시", // 도발 무시
  SKILLSWAP: "스킬스왑", // 특성 교체
  BUFFA: "싫은소리", // 아군 물공 상승
  BUFFC: "거짓울음", // 아군 특공 상승
  REFLECTOR: "리플렉터(물방블래키)", // 아군 물방 상승
  TENTOFLIGHT: "빛의장막(특방블래키)", // 아군 특방 상승
};

// 상대 몬스터가 보유한 위험한 스킬
module.exports.CAUTION = {
  CHARM: "공2랭다", // 애교부리기
  YAWN: "1턴후수면", // 하품
  BURN: "공위력50%감소", // 도깨비불
  TWAVE: "마비+스피드50%감소", // 전기자석파
  TICKLE: "공방1랭다", // 간지르기
  PROVOCATION: "도발시전", // 도발
  MOXIE: "아군사망시 공1랭상", // 자기과신
  CURSED: "아군사용스킬봉인", // 저주받은바디
  TEXCHANGED: "아군불스킬사용시 공1랭상", // 열교환
  MIST: "랭다무효", // 흰안개
  SUPERSONIC: "혼란유발", // 초음파
  DANCE: "공2랭다", // 깃털댄스
  MIRRORARMOR: "랭다반사", // 미러아머
  COMPETITIVE: "랭다시 특공2랭상", // 승기
  HYPNOSIS: "수면유발", // 최면술
  DEFIANT: "랭다시 공2랭상", // 오기
  SPORE: "수면유발", // 버섯포자
  EYE: "공1랭다", //초롱초롱눈동자
  NUZZLE: "마비", // 볼부비부비
  ICESCALE: "특공위력50%감소", // 얼음인분
  SALT: "상태이상무효", // 정화의소금
  CLEARBODY: "랭다무효", // 클리어바디
  KISS: "혼란유발", // 천사의키스
  FLATTER: "특공1랭상+혼란유발", // 부추기기
};

// [속성]: [[굉장함],[있음],[별로],[없음]]
module.exports.COMPATIBILITY = {
  [this.ATTR.NORMAL]: [
    [this.ATTR.FIGHT],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [],
    [this.ATTR.GHOST],
  ],
  [this.ATTR.FIRE]: [
    [this.ATTR.WATER, this.ATTR.LAND, this.ATTR.ROCK],
    [
      this.ATTR.NORMAL,
      this.ATTR.THUNDER,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
    ],
    [
      this.ATTR.FIRE,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.BUG,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [],
  ],
  [this.ATTR.WATER]: [
    [this.ATTR.THUNDER, this.ATTR.GRASS],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.FIRE, this.ATTR.WATER, this.ATTR.ICE, this.ATTR.STEEL],
    [],
  ],
  [this.ATTR.THUNDER]: [
    [this.ATTR.LAND],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.THUNDER, this.ATTR.FLY, this.ATTR.STEEL],
    [],
  ],
  [this.ATTR.GRASS]: [
    [
      this.ATTR.FIRE,
      this.ATTR.ICE,
      this.ATTR.POISON,
      this.ATTR.FLY,
      this.ATTR.BUG,
    ],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIGHT,
      this.ATTR.ESPER,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.WATER, this.ATTR.THUNDER, this.ATTR.GRASS, this.ATTR.LAND],
    [],
  ],
  [this.ATTR.ICE]: [
    [this.ATTR.FIRE, this.ATTR.FIGHT, this.ATTR.ROCK, this.ATTR.STEEL],
    [
      this.ATTR.NORMAL,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.ICE],
    [],
  ],
  [this.ATTR.FIGHT]: [
    [this.ATTR.FLY, this.ATTR.ESPER, this.ATTR.FAIRY],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.STEEL,
    ],
    [this.ATTR.BUG, this.ATTR.ROCK, this.ATTR.EVIL],
    [],
  ],
  [this.ATTR.POISON]: [
    [this.ATTR.LAND, this.ATTR.ESPER],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.ICE,
      this.ATTR.FLY,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
    ],
    [
      this.ATTR.GRASS,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.BUG,
      this.ATTR.FAIRY,
    ],
    [],
  ],
  [this.ATTR.LAND]: [
    [this.ATTR.WATER, this.ATTR.GRASS, this.ATTR.ICE],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.FIGHT,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.POISON, this.ATTR.ROCK],
    [this.ATTR.THUNDER],
  ],
  [this.ATTR.FLY]: [
    [this.ATTR.THUNDER, this.ATTR.ICE, this.ATTR.ROCK],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.POISON,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.GRASS, this.ATTR.FIGHT, this.ATTR.BUG],
    [this.ATTR.LAND],
  ],
  [this.ATTR.ESPER]: [
    [this.ATTR.BUG, this.ATTR.GHOST, this.ATTR.EVIL],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ROCK,
      this.ATTR.DRAGON,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.FIGHT, this.ATTR.ESPER],
    [],
  ],
  [this.ATTR.BUG]: [
    [this.ATTR.FIRE, this.ATTR.FLY, this.ATTR.ROCK],
    [
      this.ATTR.NORMAL,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.ICE,
      this.ATTR.POISON,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.GRASS, this.ATTR.FIGHT, this.ATTR.LAND],
    [],
  ],
  [this.ATTR.ROCK]: [
    [
      this.ATTR.WATER,
      this.ATTR.GRASS,
      this.ATTR.FIGHT,
      this.ATTR.LAND,
      this.ATTR.STEEL,
    ],
    [
      this.ATTR.THUNDER,
      this.ATTR.ICE,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.DRAGON,
      this.ATTR.EVIL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.NORMAL, this.ATTR.FIRE, this.ATTR.POISON, this.ATTR.FLY],
    [],
  ],
  [this.ATTR.GHOST]: [
    [this.ATTR.GHOST, this.ATTR.EVIL],
    [
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.ROCK,
      this.ATTR.DRAGON,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.POISON, this.ATTR.BUG],
    [this.ATTR.NORMAL, this.ATTR.FIGHT],
  ],
  [this.ATTR.DRAGON]: [
    [this.ATTR.ICE, this.ATTR.DRAGON, this.ATTR.FAIRY],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIGHT,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.EVIL,
      this.ATTR.STEEL,
    ],
    [this.ATTR.FIRE, this.ATTR.WATER, this.ATTR.THUNDER, this.ATTR.GRASS],
    [],
  ],
  [this.ATTR.EVIL]: [
    [this.ATTR.FIGHT, this.ATTR.BUG, this.ATTR.FAIRY],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.POISON,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ROCK,
      this.ATTR.DRAGON,
      this.ATTR.STEEL,
    ],
    [this.ATTR.GHOST, this.ATTR.EVIL],
    [this.ATTR.ESPER],
  ],
  [this.ATTR.STEEL]: [
    [this.ATTR.FIRE, this.ATTR.FIGHT, this.ATTR.LAND],
    [this.ATTR.WATER, this.ATTR.THUNDER, this.ATTR.GHOST, this.ATTR.EVIL],
    [
      this.ATTR.NORMAL,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.BUG,
      this.ATTR.ROCK,
      this.ATTR.DRAGON,
      this.ATTR.STEEL,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.POISON],
  ],
  [this.ATTR.FAIRY]: [
    [this.ATTR.POISON, this.ATTR.STEEL],
    [
      this.ATTR.NORMAL,
      this.ATTR.FIRE,
      this.ATTR.WATER,
      this.ATTR.THUNDER,
      this.ATTR.GRASS,
      this.ATTR.ICE,
      this.ATTR.LAND,
      this.ATTR.FLY,
      this.ATTR.ESPER,
      this.ATTR.ROCK,
      this.ATTR.GHOST,
      this.ATTR.FAIRY,
    ],
    [this.ATTR.FIGHT, this.ATTR.BUG, this.ATTR.EVIL],
    [this.ATTR.DRAGON],
  ],
};
