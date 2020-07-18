import styled from 'styled-components'

export const Canvas = styled.div`
 
`

export const Container = styled.div`
  position:absolute;
  display:flex;
  justify-content:center;
  width:40px;
  height:100vh;
  background:#fff;
  opacity:0.1;
  transition: opacity 1s;
  :hover{
    transition: opacity 1s ease-in-out;
    opacity:1;
  }
`
export const Pallet = styled.button`
  width:30px;
  height:30px;
  background:blue;
  border:0;
`
