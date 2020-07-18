import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'

import { Container, Pallet, Canvas } from './styles'

const Drawing: React.FC = () => {
  const [renderRef, action] = useSvgDrawing({
    penWidth: 10, // pen width
    penColor: '#e00' // pen color
  })

  return (
    <>
      <Container>
        <Pallet
          onClick={() => { action.changePenColor('blue') }}/>
      </Container>
      <Canvas ref={renderRef}/>
    </>
  )
}

export default Drawing
