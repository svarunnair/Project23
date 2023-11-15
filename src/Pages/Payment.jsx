// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { deletePayment, getPayment, postPayment } from '../Redux/Data/action'
// import { Button, Grid, Img, Link } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
// import  QRCode  from 'qrcode'
// import uuid4 from 'uuid4'

// function Payment() {

//     const payment=useSelector((store)=>store.data.getPayment)
//     const dispatch=useDispatch()
//     const navigate=useNavigate()
//     const [qrCodeImage,setQrCodeImage]=useState("")



//     console.log("payment",payment)

//     useEffect(()=>{
//         dispatch(getPayment())
//     },[])

//     const handleBack=()=>{
//         navigate(-1)
//     }


    
// console.log("xxxxxxxxx",qrCodeImage)
//   return (
//     <div>Payment
//         <Grid><Link marginRight={1350} onClick={handleBack}>Back</Link></Grid>

//         {payment.map((item)=>(
//             <>
//             seat no. : {item.seatNo}<br/>
//             Total amount : {item.total}<br/>
//             <Img marginLeft={585}  src={item.url} />
//             </>
//         ))}


 
//     </div>


//   )
// }

// export default Payment









import {
  Box,
  Center,
  
  Heading,
  Text,
  Stack,
  Image,
  Img,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPayment } from '../Redux/Data/action'


export default function Payment() {
 

    const payment=useSelector((store)=>store.data.getPayment)
        const dispatch=useDispatch()
        const navigate=useNavigate()
        const [qrCodeImage,setQrCodeImage]=useState("")
    
    
    
        console.log("payment",payment)
    
        useEffect(()=>{
            dispatch(getPayment())
        },[])
    



  return (


    <>
   
   {payment.map((item)=>(


<>

<Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        {/* <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            // backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
            
          
        </Box> */}
        <Stack pt={10} align={'center'}>
        <Img  src={item.url}/>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
           
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           Seat No. : {item.seatNo}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            Total amount : Rs {item.total} /-
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
        </Stack>
      </Box>
    </Center>


</>

   ))}


    
    </>
  )
}