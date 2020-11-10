import React from 'react'
import s from './content.module.scss';
import LeftNavbar from './left-navbar';
import PokemonList from './pokemon-list';

function Content() {
  return (
    <div className={s.Wrapper}>
      <LeftNavbar />
      <PokemonList />
    </div>
  )
}

export default Content;