import React from 'react'
import PropTypes from 'prop-types'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  return (
    <li key={props.id}>
      <input type="checkbox"
        onChange={handleToggle}
        checked={props.isComplete}/>{props.name}
    </li>
  )
}

TodoItem.PropTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}
