import { Box, Button, Typography,TextField } from '@mui/material'
import React,{Component} from 'react'
import ReactModal from '../lib/modal'

class Categories extends Component{

    constructor(){
        super()
        this.state={
            isOpen : false
        }
        this.openModal=this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
    }

    openModal(){
         this.setState({
             ...this.state,
             isOpen:true
         })
    }

    closeModal(){
        this.setState({
            ...this.state,
            isOpen:false
        })
    }

    render(){

        return(
            <>
            <Box  style={{marginTop:'70px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Typography variant='h5'>Categories</Typography>
                <Button variant='contained' onClick={this.openModal}>Add-Category</Button>
            </Box>
            <ReactModal isOpen={this.state.isOpen} close={this.closeModal}>
                <Typography variant='h6' textAlign='center'>Add Categorie</Typography>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'15px'}}>
                    <Box>
                        <TextField size='small' fullWidth label='Enter Category Name'/>
                    </Box>
                    <Box>
                        <TextField size='small' fullWidth label='Enter Category Discription'/>
                    </Box>
                    <Box>
                        <Button>Cancel</Button>
                        <Button>Categorie</Button>
                    </Box>
                </Box>
            </ReactModal>
            </>
        )

    }

}

export default Categories