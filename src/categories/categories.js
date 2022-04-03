import { Box, Button, Typography,TextField,Alert,Snackbar, Grid } from '@mui/material'
import React,{Component} from 'react'
import ReactModal from '../lib/modal'
import { getCategories,addCategory,updateCategory } from '../redux'
import { connect } from 'react-redux'
import ProductCard from '../lib/cart/productCart'
import axios from 'axios'

class Categories extends Component{

    constructor(){
        super()
        this.state={
            isOpen : false,
            categoryName:'',
            categoryDescription:'',
            isValid:true,
            isAdd:false,
            isUpdate:false,
            id:'',
            update:false
        }
        this.openModal=this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
        this.updateCategory=this.updateCategory.bind(this)
        this.submitUpdate=this.submitUpdate.bind(this)
        this.clearState=this.clearState.bind(this)
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
            isOpen:false ,
            categoryName:'',
            categoryDescription:'',
            isValid:true,
            isUpdate:false
        })

    }

    validData(){


        if(this.state.categoryName.length>=2&&this.state.categoryDescription.length>=2){

            this.setState({
                ...this.state,
                isValid:false,
            })
        }else{
            this.setState({
                ...this.state,
                isValid:true
            })
        }

    }

    categoryNamehandler(e){

        this.setState({
            ...this.state,
            categoryName:e.target.value
        },()=>{
        
            this.validData()
        })

    }

    componentDidMount(){

        this.props.data()

    }

    categoryDescriptionHandler(e){
        this.setState({
            ...this.state,
            categoryDescription:e.target.value
        },()=>{
            this.validData()
        })
    }

    clearState(update){

        this.setState({
            ...this.state,
            isUpdate:update,
            isAdd:true,
            isOpen:false,
            categoryName:'',
            categoryDescription:'',
            isValid:true,
        })

    }

    submitCategory(){


        const category={
            categoryName:this.state.categoryName,
            categoryDescription:this.state.categoryDescription
        }

          addCategory(category).then((res)=>{
            
            this.closeModal(false)

          }).catch((err)=>{

            console.log(err);

          })
    }

    updateCategory=(id)=>{

        const indx = this.props.dataa.data.findIndex((i)=>{

            return id === i._id

        })

        this.setState({
            ...this.state,
            categoryName:this.props.dataa.data[indx].categoryName,
            categoryDescription:this.props.dataa.data[indx].categoryDiscription,
            isOpen:true,
            isValid:false,
            isUpdate:true,
            id:this.props.dataa.data[indx]._id
        })

    }

    submitUpdate(){

        const data ={
            categoryName:this.state.categoryName,
            categoryDiscription:this.state.categoryDescription,
            _id: this.state.id
        } 

        updateCategory(data).then((res)=>{

            this.clearState(true)

        }).catch((err)=>{

            console.log(err);

        })

    }

    handleClose(){
        this.setState({
            ...this.state,
            isAdd:false
        })
    }

    render(){

        return(
            <>
            <Snackbar open={this.state.isAdd} autoHideDuration={3000}
             anchorOrigin={{vertical:'top',horizontal:'center'}}
             onClose={this.handleClose.bind(this)}>
                  <Alert variant="filled" severity="success">
                     {this.state.isUpdate?'Update':'Add'} Successfully
                   </Alert>
                </Snackbar>
            <Box  style={{marginTop:'70px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Typography variant='h5'>Categories</Typography>
                <Button variant='contained' onClick={this.openModal}>Add-Category</Button>
            </Box>
            <Grid container item xs={12} md={12}>
                {
                    this.props.dataa?
                       this.props.dataa.data.length?
                         this.props.dataa.data.map((i,index)=>{
                             return( <Grid item xs={6} md={2} style={{marginTop:'5px'}} key={index}>
                                 <ProductCard title={i.categoryName} id={i._id} update={this.updateCategory}/>
                             </Grid> )
                         })
                       :
                       <Typography>Empty</Typography>
                    :
                    null
                }
            </Grid>
            <ReactModal isOpen={this.state.isOpen} close={this.closeModal}>
                <Typography variant='h6' textAlign='center'>{this.state.isUpdate?'Update':'Add'} Categorie</Typography>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'15px',marginTop:'15px'}}>
                    <Box>
                        <TextField size='small' fullWidth label='Enter Category Name'
                        value={this.state.categoryName} onChange={this.categoryNamehandler.bind(this)}/>
                    </Box>
                    <Box>
                        <TextField size='small' fullWidth label='Enter Category Discription'
                        value={this.state.categoryDescription} onChange={this.categoryDescriptionHandler.bind(this)}/>
                    </Box>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        <Button variant='contained' fullWidth 
                        onClick={this.closeModal}>Cancel</Button>
                        <Button variant='contained' fullWidth disabled={this.state.isValid}
                        onClick={this.state.isUpdate?this.submitUpdate :this.submitCategory.bind(this)}>Categorie</Button>
                    </Box>
                </Box>
            </ReactModal>
            </>
        )

    }

}

const mapStateToProps=(state)=>{
    console.log(state.categories);
    return{
        dataa : state.categories
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        data : ()=>dispatch(getCategories())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)