const list = [
  "자루도 (포켓몬)",
  "자마슈 (포켓몬)",
  "자마슈 (포켓몬)",
  "종이신도 (포켓몬)",
  "종이신도 (포켓몬)",
  "주리비얀 (포켓몬)",
  "주리비얀 (포켓몬)",
  "짜랑랑 (포켓몬)",
  "짜랑랑 (포켓몬)",
  "찌리리공 (포켓몬)",
  "찌리리공 (포켓몬)",
  "ㅊ",
  "채키몽 (포켓몬)",
  "채키몽 (포켓몬)",
  "철시드 (포켓몬)",
  "철시드 (포켓몬)",
  "체리꼬 (포켓몬)",
  "체리꼬 (포켓몬)",
  "체리버 (포켓몬)",
  "체리버 (포켓몬)",
  "총지엔 (포켓몬)",
  "총지엔 (포켓몬)",
  "치릴리 (포켓몬)",
  "치릴리 (포켓몬)",
  "치코리타 (포켓몬)",
  "치코리타 (포켓몬)",
  "ㅋ",
  "카푸브루루 (포켓몬)",
  "카푸브루루 (포켓몬)",
  "캡싸이 (포켓몬)",
  "캡싸이 (포켓몬)",
  "ㅌ",
  "타타륜 (포켓몬)",
  "타타륜 (포켓몬)",
  "토대부기 (포켓몬)",
  "토대부기 (포켓몬)",
  "통통코 (포켓몬)",
  "통통코 (포켓몬)",
  "트로피우스 (포켓몬)",
  "트로피우스 (포켓몬)",
  "ㅍ",
  "파라섹트 (포켓몬)",
  "파라섹트 (포켓몬)",
  "파라스 (포켓몬)",
  "파라스 (포켓몬)",
  "펌킨인 (포켓몬)",
  "펌킨인 (포켓몬)",
  "ㅎ",
  "해너츠 (포켓몬)",
  "해너츠 (포켓몬)",
  "해루미 (포켓몬)",
  "해루미 (포켓몬)",
  "호바귀 (포켓몬)",
  "호바귀 (포켓몬)",
  "흥나숭 (포켓몬)",
  "흥나숭 (포켓몬)",
];
(() => {
  const result = [
    ...new Set(
      list.filter((item) => item.length !== 1).map((item) => item.split(" ")[0])
    ),
  ];

  console.log(result);
})();
