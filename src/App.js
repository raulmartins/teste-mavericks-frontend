import React from 'react'
import GlobalStyle from './styles/global'
import HeaderCard from './components/headerCard'
import BodyCard from './components/bodyCard'
import Button from './components/button'
import StatusOrder from './components/statusOrder'

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderCard />
      <BodyCard />
      <Button>MAIS RESULTADOS</Button>
      <StatusOrder status="PAID" />
    </>
  )
}

export default App
