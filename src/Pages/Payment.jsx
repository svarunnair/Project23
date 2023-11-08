import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePayment, getPayment, postPayment } from '../Redux/Data/action'
import { Button, Grid, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Payment() {

    const payment=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    console.log("payment",payment)

    useEffect(()=>{
        dispatch(getPayment())
    },[])

    const handleBack=()=>{
        navigate(-1)
    }
    

  return (
    <div>Payment
        <Grid><Link marginRight={1350} onClick={handleBack}>Back</Link></Grid>

        {payment.map((item)=>(
            <>
            {item.seat}
            </>
        ))}
    </div>
  )
}

export default Payment