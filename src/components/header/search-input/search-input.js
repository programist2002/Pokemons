import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import s from './search-input.module.scss';
import action_search_value_entered from '../../../redux/action-creators/actionSearchValueEntered';

import React from 'react'
import { connect } from 'react-redux';
import _debounce from 'lodash.debounce';

const SearchInput = (props) => {

  const { Search } = Input;

  const auxiliary = ({ target: { value } }) => {
    debounceOnChange(value)
  }

  const debounceOnChange = _debounce((e) => {
    props.pullingSearchValue(e)
  }, 300)

  return (
    <div className={s.Wrapper}>
      <Search maxLength="200" placeholder="input search text" onChange={auxiliary} enterButton />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  pullingSearchValue: (value) => dispatch(
    action_search_value_entered(value)
  )
})

export default connect(null, mapDispatchToProps)(SearchInput);
