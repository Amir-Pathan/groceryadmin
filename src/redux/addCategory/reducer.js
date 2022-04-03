import { CATEGORIES } from "../createAction";

const Cate ={
    loading:true,
    err:'',
    data:[]
}

const reducer=(state=Cate,action)=>{

    switch (action.type) {
        case CATEGORIES:
            console.log(action.payLoad);
            return{
                loading:false,
                err:'',
                data:action.payLoad
            }
            
    
        default:
              return state
    }
    
}

export default reducer
