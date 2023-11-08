import { Box, Button, ButtonGroup, Center, Flex, Grid, Link, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePayment, getData, patchData, postPayment } from '../Redux/Data/action'
import { color } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home() {

  const mainData = useSelector((store)=>store.data.data)
  let userData=localStorage.getItem("token")
  const dispatch=useDispatch()
  const [select,setSelect]=useState([])
  const navigate=useNavigate()
  const [payment,setPayment]=useState([])
  

  console.log("maindata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  useEffect(()=>{
    setSelect(mainData)
  },[mainData])

  // const handleClick=(id,item)=>{
   
  //   if(item.booked===true){
  //     let  data={
  //       booked:false
  //     }
  //     dispatch(patchData(data,id))
    
      
  //   }
  //   else{
  //     let data={
  //       booked:true
  //     }
  //     dispatch(patchData(data,id))
    
  //   }   
  // }

  const handleBack=()=>{
    navigate(-1)
  }
  const handleNext=()=>{
    navigate('/payment')
  }

  const handlePayment=()=>{
    
  if(payment.booked===true){
    let data={
      booked:true
    }
    dispatch(patchData(data,payment.id))
  }
    
  
  }


  const handleChoose = (data,index,userId)=>{
    let editedData = [...select]

    console.log("userData",userData,userId)
    if(userId===userData){
      editedData[index].booked === true?editedData[index].booked = false:editedData[index].booked = true
    }

    setSelect(editedData)
    setPayment(select)
  }
  


  return (

    <Grid> Select your seat
      <Link marginRight={1400} onClick={handleBack}>Back</Link>
      
      <Link marginRight={1400} onClick={handleNext}>Next</Link>




    <Grid  marginTop={20} justifyContent={'center'}  gridTemplateColumns={'repeat(10,1fr)'} border={'solid grey'}>
      {select?.map((item,index)=>(
        <Grid onClick={()=>handleChoose(item,index,item.userId)}  color={"white"}
         bg={item.booked===true?'green':'red'}

        borderRadius={10} marginTop={1} border={'solid white'} width={10} height={10} gridTemplateColumns={"repeat(3,1fr)"}>

          {item.seat} 

        </Grid>
      ))}


      


    </Grid>
    <Button marginTop={10} marginLeft={550} width={200} onClick={handlePayment}>Payment</Button>
    </Grid>

  )
}

export default Home



