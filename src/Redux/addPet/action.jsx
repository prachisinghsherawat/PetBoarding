
export const ADDPET_LOADING = "ADDPET_LOADING" 
export const ADDPET_SUCCESS = "ADDPET_SUCCESS"
export const ADDPET_ERROR = "ADDPET_ERROR"


export const AddPetLoading = () => ({
    type : ADDPET_LOADING 
})

export const AddPetSuccess = (payload) => ({
    type : ADDPET_SUCCESS,
    payload :payload
})

export const AddPetError = () => ({
    type : ADDPET_ERROR
})
