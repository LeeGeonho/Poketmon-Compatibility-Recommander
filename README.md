# Poketmon-Compatibility-Recommander

디스코드 bot을 활용하여 레이드를 위한 최적의 포켓몬을 추천해주는 프로그램입니다.

## 사용법

1. 머신에 아래 명령어 호출

   `pm2 start ./index.js --name PSVRecommander --time`

2. 디스코드에 명령어 입력

## 디스코드 bot api

- type별로 나의 포켓몬의 정보를 종합해서 보여줌.

  `/detail ${type}`

- 모든 type별로 나의 포켓몬을 정렬해서 보여줌.

  `/stat`

- 테라 레이드에 출현한 type, name을 토대로 나의 포켓몬 중 최적의 포켓몬을 추천해줌.

  `/find ${type} ${name}`

- 테라 레이드에 출현한 type, name을 토대로 모든 포켓몬 중에서 추천해줌.

  `/check ${type} ${name}`

## 파일 설명

### index.js

디스코드 commander 처리와 데이터를 가공하여 응답 처리

### 몬스터 관련 데이터

- type.js

  포켓몬스터의 속성 및 팁, 부가정보 목록

- monster.js

  RAID_MONSTERS : 6성~ 테라레이드 포켓몬 상세 목록

  USER_MONSTERS : 나의 포켓몬 상세 목록

- /data/allMonsters.js

  ALL_MONSTERS : 속성별로 현존하는 모든 포켓몬 이름 (메타 데이터)

- /data/out/monsterMap\_${type}.json

  속성별로 현존하는 모든 포켓몬 상세 목록 (메타 데이터)

### 크롤링(crawling)

모든 포켓몬의 정보를 가져오기 위해 크롤링함

- crawling.js

  `https://pokemon.fandom.com` 사이트의 데이터 활용하여 `/data/out`폴더에 속성별로 저장함

- crawling_temp.js

  `allMonsters.js`을 만들기 위한 데이터 보정

### 디스코드

- discord.js

  디스코드 api를 사용하기 위한 Helper

- slashCommander.js

  디스코드 bot commander를 만드는 스크립트

## 새로운 몬스터가 추가되면?

1. 새로운 포켓몬의 속성을 찾는다.

   > https://pokemon.fandom.com/ko/wiki/%EB%B6%84%EB%A5%98:%ED%83%80%EC%9E%85%EB%B3%84_%ED%8F%AC%EC%BC%93%EB%AA%AC

2. `/data/allMonsters.js`에 추가한다.

3. 해당하는 속성 파일(`/data/out/monsterMap\_${type}.json`)을 지운다.

4. `crawling.js`에서 해당 속성만 스크립트를 실행한다.
