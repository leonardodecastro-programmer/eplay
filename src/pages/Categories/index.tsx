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
        <ProductList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
        <ProductList
          games={simulacaoGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
