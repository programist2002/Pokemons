import React from 'react';
import './text-pokemon-name.scss';

const TextPokemonName = (props) => {

  const { name } = props;

  return (
    <div>
      <button className="ButtonPokemonName">{name}
      </button>
    </div>
  );

}

export default TextPokemonName;