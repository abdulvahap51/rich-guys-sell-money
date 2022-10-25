import React from "react";
import {
  
  Card,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { addselectedrichguys,getrichguy ,removeguy} from "../redux/richguysslice";
import { useEffect } from "react";
import { getcryptos } from "../redux/cryptomarketslice";



function Selectrichspage() {
  
  const selectionrichguy = useSelector((state) => state.richguys.selectedtichguys);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getrichguy())
    dispatch(getcryptos());
  },[])
  
  const newsave=()=>{
    dispatch(removeguy())
    dispatch(getrichguy())
  }

  const richguys = useSelector((state) => state.richguys.richguys);

  const settelonformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[0])
    );
  };
  const settbillformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[3])
    );
  };
  const settjeffformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[1])
    );
  };
  const settwarrenformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[2])
    );
  };
  const settronaldoinformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[4])
    );
  };
  const settmessiinformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[5])
    );
  };
  const settdwayneinformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[6])
    );
  };
  const settceminformation = () => {
    dispatch(
      addselectedrichguys(richguys.richguyss[7])
    );
  };
  
  

  return (
    <div>
      {selectionrichguy ===  ""     ?   (<div>
      <Helmet
        bodyAttributes={{
          style: "background: linear-gradient(250deg, #7b2ff7, #f107a3);",
        }}
      />
      <div className="text-center">
        <h1
          style={{
            marginTop: "3rem",
            color: "#FFEC00",
          }}
        >
          which rich guys do you wanna be
        </h1>
      </div>
      <Container>
        <Row
          style={{
            marginTop: "5rem",
          }}
        >
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settelonformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[0].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                    }}
                  >
                    {richguys.richguyss[0].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settjeffformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[1].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[1].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settwarrenformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[2].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[2].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>

          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settbillformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[3].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[3].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "5rem",
          }}
        >
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settronaldoinformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[4].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[4].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settmessiinformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[5].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[5].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settdwayneinformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[6].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[6].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>

          <Col className="justify-content-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                rotate: 360,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Card
                className="text-center "
                style={{
                  width: " 11rem",
                  height: " 18.3rem",
                  background: "linear-gradient(250deg, #FFEC00, #FF4F00)",
                  marginLeft: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link
                  onClick={settceminformation}
                  style={{
                    textDecoration: "none",
                    height: "18.3rem",
                  }}
                  to={"/cart"}
                >
                  <img
                    style={{
                      margin: "0.5rem",
                      height: "13rem",
                      width: "9.5rem",
                    }}
                    alt="Sample"
                    src={richguys.richguyss[7].img}
                  />
                  {/* <CardBody style={{
    background: "	linear-gradient(250deg, #FFEC00, #FF4F00)",
    
    
    
  }}>
    <CardTitle 
    className='text-center' tag="h5">
      <b>Elon Musk</b>
    </CardTitle>
   
    
  </CardBody> */}
                  <b
                    style={{
                      color: "black",
                      fontSize: "1.2rem",
                      marginTop: "1srem",
                    }}
                  >
                    {richguys.richguyss[7].name}
                  </b>
                </Link>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>):(<div>
      <Helmet
        bodyAttributes={{
          style: "background: linear-gradient(250deg, #7b2ff7, #f107a3);",
        }}
      />


<Container className="text-center ">
  <Row className="justify-content-center   align-items-center" style={
    {
      height:"15rem"
    }
  }>
    
    <div  style={{
      width:"7rem",
      background:"linear-gradient(250deg, #FFEC00, #FF4F00)",
      height:"7rem"
    }}><motion.div
    initial={{
      
    }}
    animate={{
      rotate: 360,
      
    }}
    
    transition={{
      duration: 1,
      repeat:Infinity,
    }}
    ><div  style={{
      width:"4rem",
      background:"linear-gradient(250deg, #7b2ff7, #f107a3)",
      height:"4rem",
      marginTop:"1.5rem",
      marginLeft:"0.75rem"

    }}>

    </div>
</motion.div>
    </div>
    
  </Row>
  <Row>
<Link to={"/cart"}>
<Button  style={{
  fontSize:"2rem",
  background:"linear-gradient(250deg, #FFEC00, #FF4F00)",
  color:"black",
  width:"10rem"

}} >my save</Button>
</Link>
</Row>
<div className="text-center">
<Row className="justify-content-center">
<Button onClick={newsave} style={{
  fontSize:"2rem",
  background:"linear-gradient(250deg, #FFEC00, #FF4F00)",
  color:"black",
  marginTop:"2rem",

  width:"10rem"

}} >new save</Button>

</Row>
</div >
<div  style={{
  height:"8.7rem"
}}>
  <h1 style={{
    marginTop:"5rem",

    fontSize:"5rem"
,
    color:"#FFAB00"
    
  }}>Bentech</h1>
</div>

</Container>






    </div>
    )}
    
    </div>
  );
}

export default Selectrichspage;
