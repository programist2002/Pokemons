import React from 'react'
import s from './header.module.scss';
import SearchInput from './search-input/search-input';
import { Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import action_change_collapsed_flag from '../../redux/action-creators/actionCallapsedFlag';


const Header = (props) => {

  const toggleCollapsed = () => {
    props.changeCollapsedFlag(props.state.collapsed);
  }

  return (
    <div className={s.Header}>
      <div className={s.WrapperNavigation}>
        <Button type="primary" onClick={toggleCollapsed}>
          {React.createElement(props.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <div className={s.WrapperSearchAndLogo}>
          <h2 className={s.LogoText}>Pokedex</h2>
          <SearchInput />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  changeCollapsedFlag: (collapsed) => dispatch(
    action_change_collapsed_flag(collapsed)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
