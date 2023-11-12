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
  const [seat,setSeat]=useState([])
  

  console.log("maindata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  useEffect(()=>{
    setSelect(mainData)
  },[mainData])

  

  const handleBack=()=>{
    navigate(-1)
  }
  const handleNext=()=>{
    navigate('/payment')
  }

  const handlePayment = async() => {
  

    try {
      await Promise.all(seat.map((element) => dispatch(patchData(element.booked, element.id))));  
      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  const handleChoose = (data,index,userId,id)=>{
    let editedData = [...select]

    console.log("userData",userData,userId)
    if(userId===userData){
      editedData[index].booked === true?editedData[index].booked = false:editedData[index].booked = true
     let data = {
      booked:editedData[index].booked,
      id:editedData[index].id
     }
     setSeat([...seat,data])
    }
    
    setSelect(editedData)
  
  }
  


  return (

    <Grid> Select your seat
      <Link marginRight={1400} onClick={handleBack}>Back</Link>
      
      <Link marginRight={1400} onClick={handleNext}>Next</Link>




    <Grid  marginTop={20} justifyContent={'center'}  gridTemplateColumns={'repeat(10,1fr)'} border={'solid grey'}>
      {select?.map((item,index)=>(
        <Grid onClick={()=>handleChoose(item,index,item.userId,item.id)}  color={"white"}
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



