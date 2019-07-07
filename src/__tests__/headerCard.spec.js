import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import HeaderCard from '../components/headerCard'

const renderComponent = ({ children, id, primary }) => render(
  <HeaderCard id={id} primary={primary}>{children}</HeaderCard>,
)

describe('Header Card', () => {
  afterEach(cleanup)


  it('should render HeaderCard component', async () => {
    const { id, children, primary } = {
      id: '12313',
      children: 'teste',
      primary: true,
    }
    const { getByText, debug } = renderComponent({ children, id, primary })
    debug()
    expect(getByText('12313')).toBeInTheDocument()
    expect(getByText('teste')).toBeInTheDocument()
  })
})
