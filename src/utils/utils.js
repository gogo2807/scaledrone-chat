export function getRandomName() {
  const adjs = [
    "Veliki",
    "Strašni",
    "Osvetoljubivi",
    "Tajnoviti",
    "Tihi",
    "Tamni",
    "Sunčani",
    "Ledeni",
    "Olujni",
    "Jaki",
    "Mudri",
    "Nezaustavljivi",
    "Bijeli",
    "Spremni",
    "Šumski",
    "Brzi",
    "Strpljivi",
    "Zvjezdani",
    "Neslomljvi",
    "Plavi",
    "Kameni",
    "Panonski",
    "Primorski",
    "Tvrdoglavi",
    "Časni",
    "Vatreni",
    "Neuništivi",
    "Dugovječni",
    "Mudri",
    "Dobri",
    "Dugački",
    "Časni",
    "Progonitelj",
  ];

  const nouns = [
    "Vojnomir",
    "Ljudevit Posavski",
    "Ratimir",
    "Braslav",
    "Višeslav",
    "Borna",
    "Vladislav",
    "Mislav",
    "Trpimir I",
    "Zdeslav",
    "Branimir",
    "Mutimir",
    "Tomislav",
    "Ljudemisl",
    "Trpimir II",
    "Krešimir I",
    "Miroslav",
    "Mihajlo Krešimir II",
    "Stjepan Držislav",
    "Svetoslav Suronja",
    "Krešimir III",
    "Stjepan I",
    "Petar Krešimir IV",
    "Dmitar Zvonimir",
    "Stjepan II",
    "Petar Snačić",
  ];

  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    "_" +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

export function setMemberWithNameAndColor() {
  return {
    name: getRandomName(),
    color: getRandomColor(),
  };
}

export function getRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}
