import React, {useState} from 'react'
import {ItemCard2, ModalCardItem2} from './styled.CardItem2'

export default function CardItem2({character}) {


const [modalView, setModalView ] = useState(1)

const showModal = (e)=>{
  setModalView(2)
}

const hiddenModal = (e)=>{
  setModalView(1)
}


  return (
    <ItemCard2>
         <span className="badge bg-secondary">{character.id}</span>
          <span>
            {character.status === 'Alive' ? `🟢 Alive` : character.status === "unknown" ? `🟠 Unknown` : `🔴 Dead`}
          </span>
          <img src={character.image} alt='image default' />
          {modalView === 1?(
          <button onClick={showModal}>{character.name}</button>
        ):
        (<ModalCardItem2>
          <h2>{character.name}</h2>

          <table>
            <thead>
              <tr>
                <td>{character.name}</td>
                <td>#{character.id}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{character.id}</td>
                <td>{character.name}</td>
              </tr>
              </tbody>
           </table> 


            <button onClick={hiddenModal}>VOLTAR A PERSONAGEMS</button>
        </ModalCardItem2>)
        }
        
        
        
        </ItemCard2>




  )
}
