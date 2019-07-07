/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'

import { Content, Item } from './styles'

const breadCrumb = ({ items }) => (
  <Content>
    {items.map(item => (<Item to={item.path} key={item.id}>{item.description} /</Item>))}
  </Content>
)

breadCrumb.proptypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }),
  })),
}
export default breadCrumb
