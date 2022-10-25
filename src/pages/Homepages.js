import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Col,ListGroup, ListGroupItem, Container} from 'reactstrap';
import { getowncryptos } from '../redux/cryptomarketslice';
import { getownmarketitem } from '../redux/bazaarslice';



import { getrichguy } from '../redux/richguysslice';
import Helmet from "react-helmet";

import Navbarr from '../components/Navbarr';

function Homepages() {
  
        
  const dispatch = useDispatch()
  dispatch(getrichguy())
        dispatch(getowncryptos())
        dispatch(getownmarketitem())
  const cartmarket=useSelector((state)=> state.market.cartmarket )
  const cartcurrencies=useSelector((state)=> state.cryptomarket.cartcurrencies)
  
  
    
      
        console.log(cartcurrencies)
      
     
    
      
      
    
    
  const selectionrichguy = useSelector((state) => state.richguys.selectedtichguys);
  console.log(selectionrichguy)
  return (
    <div>
      < Helmet
        bodyAttributes={{
          style: "background: linear-gradient(250deg, #00FFFF, #FF8000);",
        }}
      />
      <Navbarr></Navbarr>
      <Container>
      <img src={selectionrichguy.payload.img} alt="sample" style={{
        width:"10rem",
        height:"10rem"
      }}></img> 
      <h1>{selectionrichguy.payload.name}</h1>
      <h1>amount : {Number(selectionrichguy.payload.assets).toFixed(2)}$</h1>
      <Row>
        <Col>
        <ListGroup>
            <ListGroupItem>
            <b>your cryptos</b>
            </ListGroupItem>
            {cartcurrencies.map((cartelement)=>{
              return (
                <ListGroupItem key={cartelement.id}>
                  <Row>
                  <Col  id="see" ><img style={{
                    width: "25px",
                    height: "25px",
                  }} 
                  src={cartelement.image}></img></Col>
                  <Col   ><p>{cartelement.symbol}</p> </Col>
                  <Col   ><p>{cartelement.piece}</p> </Col>
                  </Row>
                </ListGroupItem>)

            })}
          </ListGroup>
          <ListGroup>
            <ListGroupItem>
            <b>your items</b>
            </ListGroupItem>
            {cartmarket.map((cartelement)=>{
              return (
                <ListGroupItem key={cartelement.id}>
                  <Row>
                  <Col  id="see" ><img style={{
                    width: "25px",
                    height: "25px",
                  }} 
                  src={cartelement.img}></img></Col>
                  <Col   ><p>{cartelement.name}</p> </Col>
                  <Col   ><p>{cartelement.piece}</p> </Col>
                  </Row>
                </ListGroupItem>)

            })}
          </ListGroup>
        
        </Col>
        <Col>
        
        
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Homepages
