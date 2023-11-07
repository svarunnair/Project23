import { DELETE_PAYMENT_FAILURE, DELETE_PAYMENT_REQUIEST, DELETE_PAYMENT_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, GET_PAYMENT_FAILURE, GET_PAYMENT_REQUIEST, GET_PAYMENT_SUCCESS, PATCH_DATA_FAILURE, PATCH_DATA_REQUIEST, PATCH_DATA_SUCCESS, POST_PAYMENT_FAILURE, POST_PAYMENT_REQUIEST, POST_PAYMENT_SUCCESS } from "./action"




const initState={
    isLoading:false,
    isError:false,
    data:[],
    patchData:[],
    postPayment:[],
    deletePayment:[],
    getPayment:[]

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case PATCH_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case PATCH_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    patchData:action.payload
                })
                case PATCH_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_PAYMENT_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_PAYMENT_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postPayment:action.payload
                })
                case POST_PAYMENT_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case DELETE_PAYMENT_REQUIEST:
                        return({
                            ...state,
                            isError:false,
                            isLoading:true
                        })
                        case DELETE_PAYMENT_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                deletePayment:action.payload
                            })
                            case DELETE_PAYMENT_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })


                                case GET_PAYMENT_REQUIEST:
                        return({
                            ...state,
                            isError:false,
                            isLoading:true
                        })
                        case GET_PAYMENT_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                getPayment:action.payload
                            })
                            case GET_PAYMENT_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })






                    default:
                        return({
                            ...state
                        })
    }
}