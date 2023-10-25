import styled from "styled-components"
export const ItemCard1 = styled.li`

display: block;
  width: 240px;
  list-style-type:none;
  background: ${(props)=>{props.bgSpace1}};
  margin: 30px auto;
  border-radius: 33px;
  padding: 1rem;
max-height: 300px;

li img{ 
  display: block;
  position: fixed;
  z-index: -11;

  max-width: 235px;
  margin: 2.5% 2.5px;

  height: 95%;
}

ul{
  z-index: 11;
}



li:hover{
  box-shadow: greenyellow 2.6px 2.7px 0px 0.5px;
}

h1{
  text-shadow: 5px 5px black;
  font-size: 3rem;
}
`