import { ItemCard1 } from "./styled.CardItem1";
import space1 from './../../assets/space1.png'

export  function CardItem1({local}) {
const [bgSpace1, setBgSpace1] = space1
  return (
    <ItemCard1 bgSpace1={{bgSpace1}}>
            <h3>{local.name}</h3>  

            <ul>
              <li>{local.type}</li>
              <li>{local.dimension}</li>
              <li>{local.created}</li>
            </ul>
         
    </ItemCard1>
  )
}
