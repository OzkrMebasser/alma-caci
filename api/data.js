const almaDefinitions = [
  {
    letter: "A",
    key: "amor", 
    colorClass: "text-orange-500",
  },
  {
    letter: "L",
    key: "libertad",
    colorClass: "text-red-600",
  },
  {
    letter: "M",
    key: "misericordia",
    colorClass: "text-yellow-400",
  },
  {
    letter: "A",
    key: "alegria",
    colorClass: "text-green-600",
  },
];

export const getAlmaDefinitionsTrans = () => {
  return almaDefinitions.map((item) => ({
    letter: item.letter,
    key: item.key,
    colorClass: item.colorClass,
  }));
};


export const getAlmaDefinitions = () => {
  return almaDefinitions.map((item) => {
    return {
      ...item,
      definition: item.definition,
      title: item.title,
      colorClass: item.colorClass,
      letter: item.letter,
    };
  });
};
export const getAlmaDefinitionByLetter = (letter) => {
  return almaDefinitions.find((item) => item.letter === letter);
};
