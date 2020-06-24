import React from "react"
const tableHeading=(props)=>
{  
    const heading=props.obj.map(
                                 itm=>{
                                       return(<th key={itm}>{itm.toUpperCase()}</th>)
                                      }
                                )
    return(
         <tr>
          {heading}
         </tr>
        )  
}

export default tableHeading