import styled from "styled-components"

export const HomePageComponent = styled.div`
display: grid;
min-heigh: 100vh;
max-width: 1fr;

img{
  padding-to: 80px;
  display: flex;
  position: fixed;

  z-index: -11;
  left: 0;
  right:  0;
  object-fit: cover;
width: 100%;
margin:  auto;
}


h1{
  font-size: 6rem;
  color: greenyellow;
  font-family: 'Roboto', sans-serif;
  z-index: 11;
}
`