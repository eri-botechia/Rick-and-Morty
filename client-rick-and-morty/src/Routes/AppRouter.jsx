import {BrowserRouter , Routes, Route } from "react-router-dom"
import { HomePage } from '../pages/HomePage/HomePage'
import { CharacterPage } from '../pages/CharactersPage/CharactersPage'
import { LocationPage } from "../pages/LocationPage/LocationPage"
import {HeaderNavbar} from "../components/HeaderNavbar/HeaderNavbar"
const AppRouter = () => {
  return (
    <BrowserRouter>
  <HeaderNavbar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharacterPage />} />   
     <Route path="/location" element={<LocationPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
