import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'
import { View } from 'react-native'

import { Container, Pallet } from './styles'

const Drawing: React.FC = () => {
  const [renderRef, action] = useSvgDrawing({
    penWidth: 10, // pen width
    penColor: '#e00' // pen color
  })

  return (
    <>
      <Container>
        <Pallet onClick={() => { action.changePenColor('blue') }}/>
      </Container>
      <div ref={renderRef}/>
    </>
  )
}

export default Drawing
