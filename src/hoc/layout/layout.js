import React from 'react'
import Aux from '../auxiliary/auxiliary'

import Toolbar from '../../components/toolbar/toolbar'
import EpTable from '../../container/EpTable'


class layout extends React.Component{
         
   render(){

      return <Aux>          
             
                <Toolbar/>  

                <EpTable/>

             </Aux> 

   }
}

export default layout