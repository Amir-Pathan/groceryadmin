import React,{Component} from 'react'
import { AppBar,Box,Toolbar,Typography } from '@mui/material'


class Appbar extends Component{

    constructor(){
        super()
        this.state={}
        this.categoryPage= this.categoryPage.bind(this)
    }

    categoryPage(){

        window.location.pathname="/addcategory"

    }

    render(){

        return(
            <>
               <AppBar style={{backgroundColor:'white',color:'black'}}>
                   <Toolbar>
                       <Typography>
                           AppBar
                       </Typography>
                       <Box style={{marginLeft:'15px',color:'black',display:"flex",gap:'10px'}}>
                           <Typography variant='h6' onClick={this.categoryPage}>Categories</Typography>
                           <Typography variant='h6'>Products</Typography>
                       </Box>
                   </Toolbar>
               </AppBar>
            </>
        )

    }

}

export default Appbar