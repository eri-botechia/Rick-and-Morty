import styled from "styled-components"
export const LocationComponent = styled.div`
header{
  display: grid;
    min-height: 20vh;
  max-width: 1fr;
  background-color: var(--pink-fuchsia);
  font-size: 3rem;
  text-align: center;
  margin: 0px auto;
  padding: 2rem;
  font-weight: bolder;
  color: white;
  text-shadow: 4px 4px white;
  padding-top: 80px;
  }
  
  
section  >ul{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    background: black;
    justify-content: space-around;
  }
  
  
 section> ul >li{
    width: 240px;
    list-style-type:none;
    background-color: whitesmoke;
    margin: 30px auto;
    border-radius: 33px;
    padding: 1rem;
  }
  
  
section>  ul> li img{
    max-width: 200px;
    max-height: 240px;
    background: whitesmoke;
    border: 3px groove greenyellow;
    border-radius: 22px;
  }
  
section>ul>  li:hover{
    box-shadow: greenyellow 2.6px 2.7px 0px 0.5px;
  }
  
  h1{
    text-shadow: 5px 5px black;
    font-size: 3rem;
  }
  `