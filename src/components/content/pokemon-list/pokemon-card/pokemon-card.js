import axios from 'axios'
import React, { useEffect, useState } from 'react'
import s from './pokemon-card.module.scss'
import PokemonTypes from './pokemon-types/pokemon-types';
import TextPokemonName from './text-pokemon-name/text-pokemon-name';

const PokemonCard = (props) => {

  const { name, url } = props;
  const [PokemonId, setPokemonId] = useState([]);
  const [PokemonType, setPokemonType] = useState([]);
  const PokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokemonId}.png`;

  useEffect(() => {
    axios.get(url)
      .then(
        response => {
          setPokemonId(response.data.id);
          setPokemonType(response.data.types.map((item) => item.type.name))
        }
      )
  })

  return (
    <div className={s.Wrapper}>
      <img src={PokemonImg} />
      <TextPokemonName name={name} />
      <PokemonTypes type={PokemonType} />
    </div>
  )
}

export default PokemonCard;
