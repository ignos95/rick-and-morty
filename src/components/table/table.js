import React from 'react'
import {/*Table,*/Container,Card} from 'react-bootstrap'

//import Row from './row/row'
//import TableHeading from './heading/heading'

const ETable=(props)=>{

    let table=null
    //let tHeading=null
    //let rows= null
    let tableData=props.tData   
    
      //tHeading=<TableHeading obj={['name','episode','date']}/>
 
      if(tableData){
     /* rows=tableData.map(
                           itm=>(<Row obj={itm} key={itm.id}/>)
                        )
      }
      else rows=<tr>
                   <td colSpan='3'>No Data</td> 
                </tr>
      */
      table=tableData.map( itm=>(
                           // itm=>(<Row obj={itm} key={itm.id}/> )
                           <div key={itm.id}>   
                            <Card 
                                  bg='light'
                            >
                              <Card.Body>
                                <Card.Title>{itm.name}</Card.Title>
                                <Card.Text>{itm.air_date}</Card.Text>
                                <Card.Footer>{itm.episode}</Card.Footer>
                              </Card.Body>
                            </Card>
                            <br/>
                            </div>
                            )
                          )
 
      
     /* <Table striped hover>
              <thead>      
               {tHeading}
              </thead>  
              <tbody>
               {rows}
              </tbody>
            </Table>*/
      }
    
    return (
      <Container>
        
         {table}
        
      </Container>
    )
    
}

export default ETable