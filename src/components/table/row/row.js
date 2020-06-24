import React from 'react'

const row=(props)=>{
    
     return(
            <tr>
               <td>{props.obj.name}</td> 
               <td>{props.obj.episode}</td> 
               <td>{props.obj.air_date}</td> 
            </tr>
           )
}

export default row