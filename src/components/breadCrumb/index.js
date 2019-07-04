import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Content, Item } from './styles'

const breadCrumb = ({ items }) => (
  <Content>
    {items.map((item, index) => (<Item as={Link} to={item.path} key={index}>{item.description} /</Item>))}
  </Content>
)
export default breadCrumb
