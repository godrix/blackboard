import styled from 'styled-components'

export const Body = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:space-between;
`
export const Canvas = styled.div`
 width:100%;
 height:calc(100vh - 50px);
`

export const TopContainer = styled.div`
  position:absolute;
  margin:0 auto;
  display:flex;
  justify-content:center;
  width:500px;
  height:50px;
  background:red;
`
export const BottomContainer = styled.div`
  display:flex;
  width:100%;
  height:50px;
  justify-content:space-between;
  background:transparent;

  .tools svg{
    margin:5px;
  }

  @media (max-width: 600px) 
{
  .tools{
    display:none;
   }
}

  /* opacity:0.1;
  transition: opacity 1s;
  :hover{
    transition: opacity 0.5s ease-in-out;
    opacity:1;
  } */
`

interface PalletProps{
  color:string;
}
export const Pallet = styled.button<PalletProps>`
  width:40px;
  height:40px;
  border-radius:50%;
  margin:5px;
  background:${props => props.color};
  border:0;
  outline:none;
  cursor:pointer;
  :hover{
    transform:scale(1.5);
    transition: 0.5s;
  } 
`
