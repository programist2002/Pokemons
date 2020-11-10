import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import action_change_pokemon_all from '../../../redux/action-creators/actionChangePokemonAll';
import s from './pokemon-list.module.scss';
import PokemonCard from './pokemon-card'
import { Pagination } from 'antd';
import action_change_current_page from '../../../redux/action-creators/acrionCurrentPage';
import action_change_status_loader from '../../../redux/action-creators/actionChangeStatusLoader';
import action_change_limit_value from '../../../redux/action-creators/actionChangeLimitValue';

const PokemonList = (props) => {

  // console.log(props.state);

  const { urlAPI, allPokemon, currentPage, limitValue, loader, numberOfPokemon, searchValueEntered, searchTypePokemon } = props.state;

  const url = `${urlAPI}/pokemon/?limit=${limitValue}&offset=${limitValue * (currentPage - 1)}`;
  const urlAll = `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}&offset=0`;
  const urlType = `${urlAPI}/type/${searchTypePokemon}`;
  const [filterPokemon, setFilterPokemon] = useState([]);

  useEffect(() => {
    if (searchValueEntered) {
      props.changeAllPokemon(filterPokemon.filter((item) => {
        return item.name.includes(searchValueEntered.toLowerCase());
      }))
    } else {
      props.changeLoader(loader);
      axios.get(url)
        .then(
          response => {
            props.changeAllPokemon(response.data.results);
            props.changeLoader(!loader);
          }
        )
    }
  }, [url, searchValueEntered]);


 //Test Delete************************************************************ 
  //   useEffect(() => {
  //   axios.get(url)
  //     .then(
  //       response => {
  //         setFilterPokemon(response.data.results);
  //         props.changeLoader(!loader);
  //       }
  //     )
   
  // }, [])
 //Test Delete************************************************************ 

  useEffect(() => {
    axios.get(urlAll)
      .then(
        response => {
          setFilterPokemon(response.data.results);
          props.changeLoader(!loader);
        }
      )
   
  }, [])

  // useEffect(() => {
  //   axios.get(urlType)
  //     .then(
  //       response => {
  //         console.log(response.data.results);
  //         // setFilterPokemon(response.data.results);
  //         props.changeLoader(!loader);
  //       }
  //     )
  //     // console.log("Не робить");
  // }, [searchTypePokemon,])

  return (
    <>
      {
        loader ? (
          <div><h2>Loader</h2></div>
        )
          :
          (
            <div className={s.Wrapper}>
              <div className={s.WrapperCard}>
                {
                  allPokemon.map((item, i) => (
                    <PokemonCard name={item.name} url={item.url} key={i} />
                  ))
                }
                <div className={s.WrapperPagination}>
                  <Pagination defaultCurrent={1} current={currentPage} total={numberOfPokemon} defaultPageSize={limitValue} pageSizeOptions={[20, 40, 60, 100]} onChange={(page, size) => {
                    props.changeCurrentPage(page);
                    props.changeLimitValue(size);
                  }} />
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  changeAllPokemon: (pokemons) => dispatch(
    action_change_pokemon_all(pokemons)
  ),

  changeCurrentPage: (currentPage) => dispatch(
    action_change_current_page(currentPage)
  ),

  changeLoader: (loadingStatus) => dispatch(
    action_change_status_loader(loadingStatus)
  ),

  changeLimitValue: (limitValue) => dispatch(
    action_change_limit_value(limitValue)
  )

})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
