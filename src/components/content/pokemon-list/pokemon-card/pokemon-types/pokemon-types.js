import React from 'react';
import './pokemon-types.scss';

function PokemonTypes(props) {

  const { type } = props;

  const styles = {
    fire: "fire",
    poison: "poison",
    bug: "bug",
    grass: "grass",
    water: "water",
    normal: "normal",
    flying: "flying",
    ice: "ice",
    electric: "electric"
  }

  return (
    <>
      <div className={'wrapper-ribbon-right'}>
        <div className={"ribbon " + styles[type[0]]}>
          {type[0]}
          <span className="ribbon-left"></span>
        </div>
      </div>

      <div className={!type[1] ? '' : "wrapper-ribbon-left"} >
        <div className={!type[1] ? '' : "ribbon " + styles[type[1]]}>
          {type[1] || ''}
          <span className={!type[1] ? '' : "ribbon-left "}></span>
        </div>
      </div>
    </>
  )
}

export default PokemonTypes;