import data from './logements.json';
//get the data from the json file

export const getCards = async () => {
  return data
}

export const getCardById = async (id: string) => {  
  return data.find((card) => card.id === id);
}

