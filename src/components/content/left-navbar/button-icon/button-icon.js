import React from 'react'
import s from './button-icon.module.scss';

const ButtonIcon = (props) => {

  return (
    <span role="img" aria-label="pie-chart" class="anticon anticon-pie-chart"><img src={props.src} /></span>
  )
}

export default ButtonIcon;