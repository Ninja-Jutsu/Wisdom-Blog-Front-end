/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
function App() {
  return (
    <>
      <StyledDiv>hello world</StyledDiv>
      <NewPara>another para</NewPara>
    </>
  )
}

const StyledDiv = styled.div`
  color: red;
`

const NewPara = styled(StyledDiv)`
  font-size: 1.4rem;
`

export default App
