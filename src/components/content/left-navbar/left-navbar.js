import React from 'react'
import { Menu } from 'antd';
import {
  PieChartOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import s from './left-navbar.module.scss';
import ButtonIcon from './button-icon/button-icon';
import action_search_type_pokemon from './../../../redux/action-creators/actionSearchTypePokemon';
import {
  Insect,
  Dark,
  Draconic,
  Electric,
  Magic,
  Combat,
  Ogenny,
  Flying,
  Ghostly,
  Herbal,
  Earthen,
  Ice,
  Normal,
  Poisonous,
  Mental,
  Stone,
  Steel,
  Water
} from './img-src';

const typesPokemon = [
  { type: "Insect", img: Insect },
  { type: "Dark", img: Dark },
  { type: "Draconic", img: Draconic },
  { type: "Electric", img: Electric },
  { type: "Magic", img: Magic },
  { type: "Combat", img: Combat },
  { type: "Ogenny", img: Ogenny },
  { type: "Flying", img: Flying },
  { type: "Ghostly", img: Ghostly },
  { type: "Herbal", img: Herbal },
  { type: "Earthen", img: Earthen },
  { type: "Ice", img: Ice },
  { type: "NormalNormal", img: Normal },
  { type: "Poisonous", img: Poisonous },
  { type: "Mental", img: Mental },
  { type: "Stone", img: Stone },
  { type: "Steel", img: Steel },
  { type: "Water", img: Water },
];


const leftNavbar = (props) => {

  const { collapsed } = props.state;

  return (

    <div style={{
      width: 600,
    }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        className={s.Wrapper}
      >

        {
          typesPokemon.map((item, i) => (
            <Menu.Item key={i} icon={<ButtonIcon src={item.img} className={s.WrapperItem} />} onClick={(e) => {
              props.changeTypeSearchPokemon(item.type);
            }}>
              {item.type}
            </Menu.Item>
          ))
        }
      </Menu>
    </div >
  )
}

const mapStateToProps = (state) => ({
  state,
}) 

const mapDispatchToProps = (dispatch) => ({
  changeTypeSearchPokemon: (type) => dispatch(
    action_search_type_pokemon(type)

  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(leftNavbar);
