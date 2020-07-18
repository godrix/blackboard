import React from 'react'
import { useSvgDrawing } from 'react-hooks-svgdrawing'
import { View } from 'react-native'

import { Button } from './styles'

const Drawing: React.FC = () => {
  const [renderRef, action] = useSvgDrawing({
    penWidth: 10, // pen width
    penColor: '#e00' // pen color
  })

  return (
    <>
      <Button onClick={() => { action.clear() }}>LImpar</Button>
      <div ref={renderRef}>
      </div>
    </>
  )
}

export default Drawing
