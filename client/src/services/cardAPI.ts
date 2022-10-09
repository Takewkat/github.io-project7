import axios from "axios";
import { Card } from "../models/CardModel";

const $host = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getCards = async () => {
  const {data} = await $host.get<Card[]>('/cards')
  return data
}

export const getCardById = async (id: string) => {
  const {data} = await $host.get<Card>(`/cards/${id}`)
  return data
}

