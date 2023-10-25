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
       

<div className="d-flex">
  <div className='col-sm-12 col-md-6 col-lg-6'>
    <img src={character.image}/>
  </div>
  <div className='col-sm-12 col-md-6 col-lg-6'>
    <h2>{character.name}</h2>
    <ul>
      <li>ID #0{character.id}</li>
      <li>{character.species}</li>
      <li>{character.gender}</li>
    </ul>
  </div>
</div>

            <button onClick={hiddenModal}>VOLTAR A PERSONAGEMS</button>
        </ModalCardItem2>)
        }
        
        
        
        </ItemCard2>




  )
}
