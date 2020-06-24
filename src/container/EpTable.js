import React,{useState, useEffect} from 'react'
import axios from 'axios'

import Aux from '../hoc/auxiliary/auxiliary'
import Table from '../components/table/table'
import NameSearch from '../components/nameSearch/nameSearch'
import Pagination from '../components/pagination/pagination'
import { Container,Badge } from 'react-bootstrap'



const EpTable=()=>{
 
 const [State, SetState]=useState({}) 

 useEffect(
  ()=>{
       axios.get("https://rickandmortyapi.com/api/episode")
       .then( response => {
                            SetState({
                                      currentTable: response.data.results,
                                      pages: response.data.info.pages,
                                      nextPage: response.data.info.next,
                                      prevPage: response.data.info.prev,
                                      pageNo:1
                                    })
                        }
            )
      }
  ,[]
 )
 
 // NAME SEARCHBAR

 const nameSearchInputHandler=(event)=>{
  axios.get("https://rickandmortyapi.com/api/episode/?name="+event)
  .then( response => {
                      SetState({...State, 
                                currentTable: response.data.results,
                                pages: response.data.info.pages,
                                nextPage: response.data.info.next,
                                prevPage: response.data.info.prev
                              })
                     }
       )
 }
 
 const clearNameSearch=()=>{
   
  axios.get("https://rickandmortyapi.com/api/episode")
  .then( response => {
                       SetState({ ...State,
                                  currentTable: response.data.results,
                                  pages: response.data.info.pages,
                                  nextPage: response.data.info.next,
                                  prevPage: response.data.info.prev
                                })
                   }
       )

 }

 //pagination
 
 const pageHandler=(pg)=>{
     if(pg==='prev')
     {
       if(State.pageNo>1){
         axios.get(State.prevPage)
               .then( response=>{
                                 SetState({ ...State, 
                                            currentTable: response.data.results,
                                            nextPage: response.data.info.next,
                                            prevPage: response.data.info.prev
                                          })
                                 SetState( prevSt=>({...prevSt,pageNo:prevSt.pageNo-1}) )
                                }
                    )
       }
     }
     else if(pg==='nxt')
     {
       if(State.pageNo<State.pages){
        axios.get(State.nextPage)
              .then(
                response=>{
                  SetState({ ...State,
                             currentTable: response.data.results,
                             nextPage: response.data.info.next,
                             prevPage: response.data.info.prev,})
                  SetState( prevSt=>({...prevSt,pageNo:prevSt.pageNo+1}) )
                }
              )
       }
     }
     else {
            axios.get("https://rickandmortyapi.com/api/episode?page="+pg)
                  .then(
                    response=>{
                      SetState({ ...State,
                                 currentTable: response.data.results,
                                 nextPage: response.data.info.next,
                                 prevPage: response.data.info.prev,
                                 pageNo:pg
                               })
                    }
                  )
                  .catch( error=>{console.log(error)})
          }
   }


   return(
   
    <Aux>

      <NameSearch    inputHandler={nameSearchInputHandler}
                     clear={clearNameSearch}
                     />

      <Container style={{display:'flex'}}>

        <Pagination pages={State.pages}
                    changePage={pageHandler}
                    pageNo={State.pageNo}/>

        <h3>           
         <Badge variant="secondary">PAGE: {State.pageNo}</Badge>
        </h3>

      </Container>

      <Table tData={State.currentTable}
             pageNo={State.pageNo}/>

     </Aux>

    )
 
}

export default EpTable