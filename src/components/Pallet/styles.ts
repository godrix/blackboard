import styled from 'styled-components'

interface PalletProps{
  color:string;
}
export const Container = styled.button<PalletProps>`
  width:40px;
  height:40px;
  border-radius:50%;
  margin:5px;
  background:${props => props.color};
  border:0;
  outline:none;
  cursor:pointer;
`
