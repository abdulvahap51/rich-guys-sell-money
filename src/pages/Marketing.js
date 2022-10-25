import {React,useEffect} from 'react'
import Navbarr from '../components/Navbarr'
import Helmet from "react-helmet";
import { Container,Card,CardBody,CardTitle, Button, Input, Col, Row } from 'reactstrap';
import { useSelector,useDispatch } from 'react-redux';

import { getrichguy } from '../redux/richguysslice';
import Masonry from 'react-masonry-css';
import { addcartmarketitem ,getownmarketitem ,removecartmarketitem } from '../redux/bazaarslice';
import { useState } from 'react';
import { addamount } from '../redux/richguysslice';
import alertify from "alertifyjs";



function Marketing() {
  
  const dispatch=useDispatch()
 
  const marketingitems=useSelector((state)=> state.market.market )
  const cartmarket=useSelector((state)=> state.market.cartmarket )
  const [tutulansayi,settutulansayi]=useState("")
  const selectionrichguy=useSelector((state)=> state.richguys.selectedtichguys)
  
  useEffect(()=>{
    dispatch(getrichguy())
    dispatch(getownmarketitem())
  },[])


  
    console.log(selectionrichguy)
  
  
  
 
 
  


  

console.log(selectionrichguy)
console.log(marketingitems)



  



  return (
    <div>
        <Helmet
        bodyAttributes={{
          style: "background: linear-gradient(250deg, #00FFFF, #FF8000);",
        }}
      />
        <Navbarr />
      <div>
        <Container className='justify-content-center'>


          {/* <h1 className='text-center'>{Number(selectionrichguy.payload.assets).toFixed(2)}$</h1> */}
        <Masonry 
        breakpointCols={3}
        className="my-masonry-grid  "
        columnClassName="my-masonry-grid_column"
      >
        {marketingitems.map((element)=>{
          return (  <div>
            <Card key={element.id} style={{width: "%100",
            marginBottom:"2rem"}}>
              <img style={{
                
            
          }} src={element.img} alt={element.category}>

          </img>
          <CardBody style={{fontWeight:"bold"}}>{element.name}</CardBody>
          <CardBody style={{fontWeight:"bold"}}>{element.price}$ 
          </CardBody>
          <CardTitle><Row><Col><Button onClick={()=>{
             if(tutulansayi<=0){
              console.log("lütfen bir miktar belirtiniz")
              alertify.error("please specify an amount")
            }
            
            else{
              if((Number(selectionrichguy.payload.assets) - tutulansayi * Number(element.price))<=0){
                console.log("you dont have enough many for this")
                alertify.error("you dont have enough many for this")
              }
              else{
                dispatch(addamount({
                  name:selectionrichguy.payload.name,
                img:selectionrichguy.payload.img,
                  assets:(Number(selectionrichguy.payload.assets) - tutulansayi * Number(element.price))
                }))
                dispatch(addcartmarketitem({
                  name:element.name,
                  category:element.category,
                  img:element.img,
                  id:element.id,
                  piece:tutulansayi
    
    
    
                }))
                
              
              }
              
              
            }
            
           
            settutulansayi(0)
            dispatch(getrichguy())
          }} color='success'>buy</Button></Col>
          <Col><Input onChange={(e)=>{
            settutulansayi(e.target.value)
          }} style={{
            width:"%100"
          }} type='number'></Input></Col>
          <Col><Button onClick={()=>{
             if(tutulansayi<=0){
              console.log("lütfen bir miktar belirtiniz")
              
              alertify.error("please specify an amount")
            }
            else{
              cartmarket.map((element1)=>{



                if(element1.name===element.name){
                  if(Number(element1.piece)>=Number(tutulansayi)){
                    dispatch(addamount({
                name:selectionrichguy.payload.name,
              img:selectionrichguy.payload.img,
                assets:(Number(selectionrichguy.payload.assets) + tutulansayi * Number(element.price) )
              }))
              
              dispatch(removecartmarketitem({
                name:element.name,
                
                piece:tutulansayi,
                
              }))
                  }
                  else{
                    console.log("you dont have enough  " + element1.name)
                    alertify.error("you dont have enough  " + element1.name)
                  }
                }
              })





            }






            settutulansayi(0)
            dispatch(getrichguy())


          }} color='danger'>sell</Button></Col></Row></CardTitle>
          </Card>
          </div>
            
          )

        })}
       
      </Masonry>







        </Container>




      </div>
    </div>
  )
}

export default Marketing
