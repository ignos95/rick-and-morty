import React from 'react'
import { Pagination,Container } from 'react-bootstrap'

const pagination=(props)=>{
    
    let P_len=props.pages
    let page=null

    if(P_len>0){
              page=[...Array(P_len)].map( (_,ind)=><Pagination.Item  
                                                      active={ind+1===props.pageNo}
                                                      onClick={ ()=>{props.changePage(ind)} }
                                                      key={ind}
                                                      >
                                                    {++ind}
                                                   </Pagination.Item > 
                                        )
             }
        
    let pagination=null
    if(page) pagination=<Pagination >
                         <Pagination.Prev onClick={ ()=>{props.changePage('prev')} }/>
                         {page}
                         <Pagination.Next  onClick={ ()=>{props.changePage('nxt')} }/>
                        </Pagination>
    return(
           <Container>
            {pagination}
           </Container>
          )
}

export default pagination