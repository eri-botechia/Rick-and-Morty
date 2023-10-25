import { useNavigate } from "react-router-dom"
import { goToCharacters, goToHome, goToLocation } from "../../Routes/coordinator"
import { HeaderNavbarComponent } from "./styled.HeaderNavbar"

export  function HeaderNavbar() {
  const navigate = useNavigate()
  return (
    <HeaderNavbarComponent>
      <button onClick={()=>{goToHome(navigate)}}>HOME</button>
      <button onClick={()=>{goToCharacters(navigate)}}>CHARACTERS</button>
      <button onClick={()=>{goToLocation(navigate)}}>LOCATION</button>
    </HeaderNavbarComponent>
  )
}
