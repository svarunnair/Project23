import { Button, Center, Grid, Link, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePayment, getData, patchData, postPayment } from '../Redux/Data/action'
import { color } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Home() {

  const mainData=useSelector((store)=>store.data.data)
  const dispatch=useDispatch()
  // const [select,setSelect]=useState(false)
  const navigate=useNavigate()

  console.log("maindata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  const handleClick=(id,item)=>{
   
    if(item.booked===true){
      let  data={
        booked:false
      }
      dispatch(patchData(data,id))

      mainData.map((item)=>(
        dispatch(postPayment(item))
      ))

    }
    else{
      let data={
        booked:true
      }
      dispatch(patchData(data,id))
      deletePayment(id)

    }   
  }

  const handleBack=()=>{
    navigate(-1)
  }
  const handleNext=()=>{
    navigate('/payment')
  }

  const handlePayment=()=>{

  }
  


  return (

    <Grid> Select your seat
      <Link marginRight={1400} onClick={handleBack}>Back</Link>
      
      <Link marginRight={1400} onClick={handleNext}>Next</Link>


    <Grid  marginTop={20} justifyContent={'center'}  gridTemplateColumns={'repeat(10,1fr)'} border={'solid grey'}>
      {mainData.map((item)=>(
        <Grid onClick={()=>handleClick(item.id,item)} color={"white"}
         bg={item.booked? 'grey': "green"}

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



