import React from "react";
import Helmet from "react-helmet";
import {
  Container,
  Row,
  Col,
  ListGroupItem,
  ListGroup,
  Button,
  Collapse,
  Card,
  CardBody,
  UncontrolledCollapse,
  Input,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import Navbarr from "../components/Navbarr";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getcryptos } from "../redux/cryptomarketslice";
import { useState } from "react";
import {
  addcartcurrencies,
  getowncryptos,
  removecartcurrencies,
} from "../redux/cryptomarketslice";
import { addamount, removeamount, getrichguy } from "../redux/richguysslice";
import alertify from "alertifyjs";

function Cryptomarketing() {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.cryptomarket.currencies);
  const cartcurrencies = useSelector(
    (state) => state.cryptomarket.cartcurrencies
  );
  const selectionrichguy = useSelector(
    (state) => state.richguys.selectedtichguys
  );

  const [tutulansayi, settutulansayi] = useState("");
  useEffect(() => {
    dispatch(getcryptos());
    dispatch(getowncryptos());
    dispatch(getrichguy());
  }, []);

  return (
    <div
      style={{
        background: "gray",
      }}
    >
      <Navbarr></Navbarr>

      <Container>
        <Row>
          <Col sm="3">
            <div
              style={{
                height: "25rem",
                background: "white",
              }}
            >
              <ListGroup>
                <ListGroupItem>
                  <b>your cryptos</b>
                </ListGroupItem>
                {cartcurrencies.map((cartelement) => {
                  return (
                    <ListGroupItem key={cartelement.id}>
                      <Row>
                        <Col id="see">
                          <img
                            style={{
                              width: "25px",
                              height: "25px",
                            }}
                            src={cartelement.image}
                          ></img>
                        </Col>
                        <Col>
                          <p>{cartelement.symbol}</p>{" "}
                        </Col>
                        <Col>
                          <p>{cartelement.piece}</p>{" "}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </div>
          </Col>
          <Col sm="9">
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col sm="2">
                    <b>logo</b>
                  </Col>
                  <Col sm="2">
                    <b>symbol</b>{" "}
                  </Col>
                  <Col sm="4">
                    <b>price</b>{" "}
                  </Col>
                  <Col sm="4">
                    <b>buying menu</b>{" "}
                  </Col>
                </Row>
              </ListGroupItem>
              {currencies.map((element) => {
                return (
                  <ListGroupItem id="see" key={element.id}>
                    <Row>
                      <Col sm="2" id="see">
                        <img
                          style={{
                            width: "25px",
                            height: "25px",
                          }}
                          src={element.image}
                        ></img>
                      </Col>
                      <Col sm="2">
                        <p>{element.symbol}</p>{" "}
                      </Col>

                      <Col sm="4">
                        <p>{element.current_price}$</p>{" "}
                      </Col>

                      <Col sm="4">
                        <Row>
                          <Col>
                            <Button
                              onClick={() => {
                                if (tutulansayi <= 0) {
                                  console.log("lütfen bir miktar belirtiniz");
                                  alertify.error("please specify an amount")
                                } else {
                                  if (
                                    Number(selectionrichguy.payload.assets) -
                                      tutulansayi *
                                        Number(element.current_price) <=
                                    0
                                  ) {
                                    console.log(
                                      "you dont have enough many for this"
                                      
                                    );
                                    alertify.error( "you dont have enough many for this")
                                  } else {
                                    dispatch(
                                      addamount({
                                        name: selectionrichguy.payload.name,
                                        img: selectionrichguy.payload.img,
                                        assets:
                                          Number(
                                            selectionrichguy.payload.assets
                                          ) -
                                          tutulansayi *
                                            Number(element.current_price),
                                      })
                                    );

                                    dispatch(
                                      addcartcurrencies({
                                        name: element.name,
                                        symbol: element.symbol,
                                        image: element.image,
                                        piece: tutulansayi,
                                        id: element.id,
                                      })
                                    );
                                  }
                                }
                                settutulansayi(0);
                                dispatch(getrichguy());
                              }}
                            >
                              buy
                            </Button>
                          </Col>
                          <Col>
                            <Input
                              onChange={(e) => {
                                settutulansayi(e.target.value);
                              }}
                              style={{
                                width: "6rem",
                              }}
                              type="number"
                            ></Input>{" "}
                          </Col>
                          <Col>
                            <Button
                              onClick={() => {
                                if (tutulansayi <= 0) {
                                  console.log("lütfen bir miktar belirtiniz");
                                  alertify.error("please specify an amount")
                                } else {
                                  if (cartcurrencies.lenght === 0) {
                                    console.log("you dont have crypto");
                                    alertify.error("you dont have crypto");
                                  } else {
                                    cartcurrencies.map((element1) => {
                                      if (element1.name === element.name) {
                                        if (
                                          Number(element1.piece) >=
                                          Number(tutulansayi)
                                        ) {
                                          dispatch(
                                            addamount({
                                              name: selectionrichguy.payload
                                                .name,
                                              img: selectionrichguy.payload.img,
                                              assets:
                                                Number(
                                                  selectionrichguy.payload
                                                    .assets
                                                ) +
                                                tutulansayi *
                                                  Number(element.current_price),
                                            })
                                          );

                                          dispatch(
                                            removecartcurrencies({
                                              name: element.name,

                                              piece: tutulansayi,
                                            })
                                          );
                                        }else{
                                          alertify.error("you don have enough  " + element.name)
                                        }
                                      }
                                    });
                                    // dispatch(addamount({
                                    //   name:selectionrichguy.payload.name,
                                    // img:selectionrichguy.payload.img,
                                    //   assets:(Number(selectionrichguy.payload.assets) + tutulansayi * Number(element.current_price))
                                    // }))

                                    // dispatch(removecartcurrencies({
                                    //   name:element.name,

                                    //   piece:tutulansayi,

                                    // }))
                                  }
                                }
                                settutulansayi(0);
                                dispatch(getrichguy());
                                console.log(selectionrichguy.payload.assets);
                              }}
                              color="danger"
                            >
                              sell
                            </Button>{" "}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cryptomarketing;
