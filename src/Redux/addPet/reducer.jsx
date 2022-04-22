
import { ADDPET_SUCCESS, ADDPET_LOADING , ADDPET_ERROR } from "./action";

const initState = {
    loading : false,
    addPet : [],
    error : false
}

export const addPetReducer = (store = initState , {type,payload}) =>{

    switch(type){

        case ADDPET_LOADING : 
        return {...store , loading : true}

        case ADDPET_SUCCESS : 
        return {...store , loading : false , addPet : [...payload]}

        case ADDPET_ERROR : 
        return {...store , error : true}

        default :
        return {...store}
    }
}