import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


export const PATCH_DATA_REQUIEST="PATCH_DATA_REQUIEST"
export const PATCH_DATA_SUCCESS="PATCH_DATA_SUCCESS"
export const PATCH_DATA_FAILURE="PATCH_DATA_FAILURE"


export const POST_PAYMENT_REQUIEST="POST_PAYMENT_REQUIEST"
export const POST_PAYMENT_SUCCESS="POST_PAYMENT_SUCCESS"
export const POST_PAYMENT_FAILURE="POST_PAYMENT_FAILURE"



const getDataRequiest=()=>{
    return({
        type:GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}

const patchDataRequiest=()=>{
    return({
        type:PATCH_DATA_REQUIEST
    })
}
const patchDataSuccess=(data)=>{
    return({
        type:PATCH_DATA_SUCCESS,
        payload:data
    })
}
const patchDataFailure=()=>{
    return({
        type:PATCH_DATA_FAILURE
    })
}
const postPaymentRequiest=()=>{
    return({
        type:POST_PAYMENT_REQUIEST
    })
}
const postPaymentSuccess=(data)=>{
    return({
        type:POST_PAYMENT_SUCCESS,
        payload:data
    })
}
const postPaymentFailure=()=>{
    return({
        type:POST_PAYMENT_FAILURE
    })
}







export const getData=()=>(dispatch)=>{
    dispatch(getDataRequiest())
     return axios({
        url:" http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("resData",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure)
    })
}

export const patchData=(data,id)=>(dispatch)=>{
    dispatch(patchDataRequiest())
    return axios({
        url:`http://localhost:8000/data/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchDataSuccess(res.data))
        console.log("resData",res.data)
    })
    .catch((error)=>{
        dispatch(patchDataFailure)
    })
}

export const postPayment=(data)=>(dispatch)=>{
    dispatch(postPaymentRequiest())
     return axios({
        url:" http://localhost:8000/payment",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postPaymentSuccess(res.data))
        console.log("PostresData",res.data)
    })
    .catch((error)=>{
        dispatch(postPaymentFailure)
    })
}