const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const { setTimeout } = require("node:timers/promises");

const writeFile = (type, data) => {
  const fileName = path.resolve(
    path.dirname(__filename),
    "data",
    `monsterMap_${type}.json`
  );
  fs.writeFileSync(fileName, JSON.stringify(data), "utf8");
};

const getHtml = async (name) => {
  try {
    return await axios.get(
      `https://pokemon.fandom.com/ko/wiki/${name}_(포켓몬)`,
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const parseHtml = async (data) => {
  const $ = cheerio.load(data);

  const name = $(".name-ko strong").eq(0).text().trim();

  const type = $(".infobox-pokemon table tbody tr")
    .eq(1)
    .find("a")
    .map(function (i, elem) {
      return $(this).text().trim();
    })
    .toArray();

  const $defenceList = $("div.mw-parser-output")
    .children("h3")
    .children("#방어_상성")
    .parent();

  const result = {};
  let elem = $defenceList.next();
  let recentName;
  while (!(elem.prop("tagName") === "H3")) {
    const currTagName = elem.prop("tagName");
    if (currTagName === "H4") {
      recentName = elem.children(".mw-headline").prop("innerText").trim();
    } else if (currTagName === "TABLE") {
      // console.log(recentName);
      const temp = elem.children().children().next();
      const $ = cheerio.load(temp.html(), null, false);
      const parseMap = $("td table tbody tr td span table tbody tr td")
        .map(function (i, elem) {
          return $(this).text().trim();
        })
        .toArray();
      // console.log(parseMap.toString());

      const safeType = {};
      const dangerType = {};
      parseMap.map((item, index) => {
        if (index % 2 === 1) {
          const value = +item.replaceAll("×", "");

          if (parseMap[index - 1] === "없음") return;
          if (isNaN(value)) return;

          if (value <= 1) {
            // safeType
            safeType[parseMap[index - 1]] = value;
          } else {
            //dangerType
            dangerType[parseMap[index - 1]] = value;
          }
        }
      });

      // console.log(recentName, 1, name);
      if (!recentName) {
        recentName = name;
      } else {
        if (!name.includes(recentName)) {
          recentName = `${name} (${recentName})`;
        }
      }
      result[recentName] = {
        type,
        safeType,
        dangerType,
        tera: type,
      };
    }

    elem = elem.next();
  }

  const $statList = $("div.mw-parser-output #능력치").parent();
  elem = $statList.next();

  let count = 0;
  let lastStat = 0;
  while (count < Object.keys(result).length) {
    const currTagName = elem.prop("tagName");

    if (currTagName === "TABLE") {
      const $ = cheerio.load(elem.html(), null, false);
      const totalStat = $('tbody tr td[colspan="1"] table tbody tr th')
        .eq(1)
        .text()
        .trim();
      const nTotalStat = +totalStat !== 0 ? +totalStat : lastStat;

      Object.keys(result).map((item, index) => {
        if (count === index) {
          result[item].totalStat = nTotalStat;
        }
      });

      lastStat = nTotalStat;
      count++;
    }
    elem = elem.next();
  }

  return result;
};

const { ALL_MONSTERS } = require("../constants/allMonsters");
const { ATTR } = require("../constants/types");
(async () => {
  // for (const attr of Object.values(ATTR)) {
  //   console.log("--------------------------------------");
  //   console.log(attr);
  //   console.log("--------------------------------------");
  //   let mapJson = {};
  //   // for (const name of ["히드런"]) {
  //   for (const name of ALL_MONSTERS[attr]) {
  //     console.log(name);
  //     const html = await getHtml(name);
  //     const monsterObj = await parseHtml(html.data);
  //     mapJson = { ...mapJson, ...monsterObj };
  //     await setTimeout(1000);
  //   }
  //   // console.log(mapJson);
  //   writeFile(attr, mapJson);
  // }
})();
