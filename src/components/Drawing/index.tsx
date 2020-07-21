import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'

import { Body, BottomContainer, Canvas, Pallet } from './styles'

const Drawing: React.FC = () => {
  const [renderRef, action] = useSvgDrawing({
    penWidth: 10, // pen width
    penColor: '#000' // pen color
  })

  return (
    <Body>
      <Canvas ref={renderRef}/>
      <BottomContainer>
        <Pallet color="#000000" onClick={() => { action.changePenColor('#000000') }}/>
        <Pallet color="#9B59B6" onClick={() => { action.changePenColor('#9B59B6') }}/>
        <Pallet color="#3498DB" onClick={() => { action.changePenColor('#3498DB') }}/>
        <Pallet color="#2FCC71" onClick={() => { action.changePenColor('#2FCC71') }}/>
        <Pallet color="#F1C423" onClick={() => { action.changePenColor('#F1C423') }}/>
        <Pallet color="#E67E22" onClick={() => { action.changePenColor('#E67E22') }}/>
        <Pallet color="#E73C61" onClick={() => { action.changePenColor('#E73C61') }}/>
        <Pallet color="#FFFFFF" onClick={() => { action.changePenColor('#FFFFFF') }}/>
      </BottomContainer>
    </Body>
  )
}

export default Drawing
