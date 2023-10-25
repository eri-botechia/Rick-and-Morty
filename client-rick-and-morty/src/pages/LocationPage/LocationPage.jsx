import { LocationComponent } from "./styled.LocationPage";
import { useRequestData } from "../../hooks/useRequestData";
import { CardItem1 } from "../../components/CardItem1/CardItem1";
export function LocationPage (){
    //const [personagens, carregandoPersonagems, errorPersonagems] = useRequestData("https://rickandmortyapi.com/api/character")
  const [location, loadingLocals, errorLocals] = useRequestData("https://rickandmortyapi.com/api/location")
 console.log(location)
  return(

    <LocationComponent>
    { loadingLocals && <h2>Carregando locales...</h2>}
  {errorLocals && <h>Ops os locales no fuerom cargados...</h>}
      <header>
      <h1>LOCATIONS</h1>
      </header>   
      <main>
      <section><ul>  
      {location.map((local)=>(
        <CardItem1 as="li" key={local.id} local={local}/>
      ))}
      </ul></section>
</main>
    </LocationComponent>
  )
}