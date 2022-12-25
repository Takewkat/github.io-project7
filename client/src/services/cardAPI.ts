import _data from './logements.json';
//get the _data from the json file

//convert the rating from string to number
const data = _data.map((card) => {
  return {
    ...card,
    rating: parseInt(card.rating),
  }
})

export const getCards = async () => {
  return data
}

export const getCardById = async (id: string) => {  
  return data.find((card) => card.id === id);
}