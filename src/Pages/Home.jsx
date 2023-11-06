import { Center, Grid, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, patchData } from '../Redux/Data/action'
import { color } from 'framer-motion'

function Home() {

  const mainData=useSelector((store)=>store.data.data)
  const dispatch=useDispatch()
  const [select,setSelect]=useState(false)

  console.log("maindata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])
  const handleClick=(id)=>{
    alert('selected')
    let data={
      booked:true
    }
   
    dispatch(patchData(data,id))
    
  }


  return (

    <Grid> Select your seat
    <Grid  marginTop={20} justifyContent={'center'}  gridTemplateColumns={'repeat(10,1fr)'} border={'solid grey'}>
      {mainData.map((item)=>(
        <Grid onClick={()=>handleClick(item.id,item)} color={"white"}
         bg={item.booked? 'green': "grey"}

         border={'solid white'} width={10} height={10} gridTemplateColumns={"repeat(3,1fr)"}>

          {item.seat} 

        </Grid>
      ))}
      


    </Grid>
    </Grid>

  )
}

export default Home