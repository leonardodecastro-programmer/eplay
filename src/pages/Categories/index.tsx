import ProductList from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulacaoGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulacaoGames } = useGetSimulacaoGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulacaoGames && sportGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="gray" />
        <ProductList games={sportGames} title="Esportes" background="black" />
        <ProductList games={fightGames} title="Luta" background="gray" />
        <ProductList games={rpgGames} title="RPG" background="black" />
        <ProductList
          games={simulacaoGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
