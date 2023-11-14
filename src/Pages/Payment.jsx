import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePayment, getPayment, postPayment } from '../Redux/Data/action'
import { Button, Grid, Img, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import  QRCode  from 'qrcode'
import uuid4 from 'uuid4'

function Payment() {

    const payment=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [qrCodeImage,setQrCodeImage]=useState("")

    let paymentId = uuid4();

    console.log("payment",payment)

    useEffect(()=>{
        dispatch(getPayment())
    },[])

    const handleBack=()=>{
        navigate(-1)
    }

    let seatQr={
        seat:payment.map((item)=>{return item.seat}),
        paymentId:paymentId,
        price:payment.map((item)=>{return item.price}),
        numberOfSeats:payment.length
    }

    let qrData = seatQr.join("-")
  console.log("qrData",qrData)
  
    QRCode.toDataURL(qrData)
    .then(url => {
      setQrCodeImage(url)
    })
    .catch(err => {
      console.error(err)
    })
    
console.log("xxxxxxxxx",qrCodeImage)
  return (
    <div>Payment
        <Grid><Link marginRight={1350} onClick={handleBack}>Back</Link></Grid>

        {/* {payment.map((item)=>(
            <>
            {item.seat}
            </>
        ))} */}

<Img  src={qrCodeImage} />
 
    </div>


  )
}

export default Payment






// 
// const handleChoose=()=>{
// let editeddata=[...select]
// if(editedData.userId===userData){
//   editedData.booked===true?editedData.booked=false:editedData.booked=true
// }
// let data={
//    booked=editedData.booked
//    id=editedData.id
//    seat=editedData.seat
// }
// setSeat([...seat])
// }