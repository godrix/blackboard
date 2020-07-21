import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'

import { Body, BottomContainer, Pallet, Canvas } from './styles'

const Drawing: React.FC = () => {
  const [renderRef, action] = useSvgDrawing({
    penWidth: 10, // pen width
    penColor: '#000' // pen color
  })

  return (
    <Body>
      <Canvas ref={renderRef}/>
      <BottomContainer>
        <Pallet color="#9B59B6"/>
        <Pallet color="#3498DB"/>
        <Pallet color="#2FCC71"/>
        <Pallet color="#F1C423"/>
        <Pallet color="#E67E22"/>
        <Pallet color="#E73C61"/>
      </BottomContainer>
    </Body>
  )
}

export default Drawing
