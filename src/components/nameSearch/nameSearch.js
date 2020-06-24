import React from 'react'
import {Button,InputGroup,FormControl} from 'react-bootstrap'
import Classes from './nameSearch.module.css'

const nameSeach=(props)=>{

    return(
           <div className={Classes.nameSearch}>             
            <InputGroup className="mb-3">
              <FormControl
                placeholder='Search'
                onChange={ event=>{ props.inputHandler(event.target.value) } }
                aria-describedby="basic-addon2"
              />

              <InputGroup.Append>
                <Button variant="outline-secondary" size='sm' onClick={props.clear}>clear</Button>
              </InputGroup.Append>
           
            </InputGroup>
           </div>  
          )
}

export default nameSeach