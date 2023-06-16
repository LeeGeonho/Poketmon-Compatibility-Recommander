require("dotenv").config();
const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

(() => {
  // const command = new SlashCommandBuilder()
  //   .setName("find")
  //   .setDescription("상대 포켓몬에 최적화된 나의 포켓몬을 추천해줍니다!")
  //   .addStringOption((option) =>
  //     option
  //       .setName("type")
  //       .setDescription("테라스탈 속성을 선택하세요.")
  //       .setRequired(true)
  //       .setAutocomplete(true)
  //   )
  //   .addStringOption((option) =>
  //     option
  //       .setName("monster")
  //       .setDescription("상대 포켓몬 이름을 입력하세요.")
  //       .setRequired(true)
  //       .setAutocomplete(true)
  //   );

  // const command = new SlashCommandBuilder()
  //   .setName("stat")
  //   .setDescription("나의 포켓몬들의 방어 속성을 보여줍니다.");

  // const command = new SlashCommandBuilder()
  //   .setName("detail")
  //   .setDescription("속성별 상세정보를 보여줍니다.")
  //   .addStringOption((option) =>
  //     option
  //       .setName("type")
  //       .setDescription("속성을 선택하세요.")
  //       .setRequired(true)
  //       .setAutocomplete(true)
  //   );

  const commandJson = command.toJSON();

  axios
    .post(
      "https://discord.com/api/v10/applications/1092650939757891688/commands",
      commandJson,
      {
        timeout: 10000,
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    )
    .then(console.log);
})();
