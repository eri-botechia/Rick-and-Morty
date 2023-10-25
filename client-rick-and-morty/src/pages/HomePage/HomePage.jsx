import React from 'react'
import home from './../../assets/home.png'
import logoRick from './../../assets/logoRick.png'

import { HomePageComponent } from './styled.HomePage'
export function HomePage() {
  return (
    <HomePageComponent>
      
     
      <div>
        <img src={home} alt={"img personagems"}/>
      <h1>  <img src={logoRick} alt={"img do logo"}/> </h1>
      </div>
    </HomePageComponent>
  )
}
