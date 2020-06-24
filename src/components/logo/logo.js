import React from 'react'
import Classes from './logo.module.css'

import Logo from '../../assets/Rick_and_Morty_logo.png'

const logo=()=>(
 <div className={Classes.Heading}>
  <img src={Logo} alt={'Rick And Morty'}/>
 </div>
)
export default logo