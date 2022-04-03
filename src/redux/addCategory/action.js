import axios, { Axios } from "axios";
import { ADD_CATEGORY,CATEGORIES } from "../createAction";

export const Category=(payLoad)=>{

    return{
        type:CATEGORIES,
        payLoad
    }
}

export const CategoryError=()=>{
    return{
        
    }
}

export const getCategories=()=>{

    return dispatch=>{
    
        axios.get('http://localhost:3002/category').then((res)=>{

        dispatch(Category(res.data))

    }).catch((err)=>{
         console.log(err);
    })

    }

}

export const updateCategory=(payLoad)=>{

    console.log(4);

    return new Promise((resolve,reject)=>{

        console.log('5620');

        axios.put('http://localhost:3002/category/category',payLoad).then((res)=>{

            console.log(89);

            resolve(true)

        }).catch((err)=>{

            console.log(err);

            reject(false)

        })

    })
}

export const addCategory=(data)=>{

    return new Promise((resolve,reject)=>{

        axios.post('http://localhost:3002/category/addCategory',data).then((res)=>{

            resolve(true)

        }).catch((err)=>{

            reject(false)
        })

    })

}