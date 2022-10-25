import { createSlice } from "@reduxjs/toolkit";
import alertify from "alertifyjs"



const initialState = {

    newcartmarket:[],
    npcvalue:0,
    cartmarket:[],
    market:[
        {
            name:"Bugatti veyron",
            price:1900000,
            category:"car",
            id:1,
            img:"https://cdn.motor1.com/images/mgl/wBNko/s1/no.-48-bugatti-veyron-super-sport-for-sale.jpg"
        },
        {
            name:"Bugatti La Voiture Noire",
            price:18000000,
            category:"car",
            id:2,
            img:"https://ikinciyeniblogfles.blob.core.windows.net/images/2b7d6508-3546-4bd3-9d35-7ce377427f9d.jpeg"
        },
        {
            name:"Pagani Zonda HP Barchetta",
            price:17500000,
            category:"car",
            id:3,
            img:"https://ikinciyeniblogfles.blob.core.windows.net/images/59451fd6-76a3-4f04-bd5b-a1408f54886c.jpeg"
        },
        {
            name:"Lamborghini Sian",
            price:4000000,
            category:"car",
            id:4,
            img:"https://ikinciyeniblogfles.blob.core.windows.net/images/f392aac0-5e5b-4b5b-b316-9c6e712232de.jpeg"
        },
        {
            name:"Porsche 911",
            price:150000,
            category:"car",
            id:5,
            img:"https://cdn.motor1.com/images/mgl/kvjPR/s1/2022-porsche-911-carrera-gts-front-3-4.webp"
        },
        {
            name:" Rolls-Royce Ghost",
            price:343000,
            category:"car",
            id:6,
            img:"https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-102-1635439026.jpg?crop=0.859xw:0.724xh;0.0833xw,0.197xh&resize=2048:*"
        },
        {
            name:"Ferrari 812 GTS ",
            price:404000,
            category:"car",
            id:7,
            img:"https://www.auto-data.net/images/f89/Ferrari-812-GTS.jpg"
        },
        {
            name:"Merdedes amg gt",
            price:150000,
            category:"car",
            id:8,
            img:"https://cdn.motor1.com/images/mgl/A6WGN/s3/mercedes-amg-gt-black-series-p-one-edition.jpg"
        },
        {
            name:"Buckingham Palace ",
            price:2900000000,
            category:"home",
            id:9,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Buckingham-Palace-1.jpg"
        },
        {
            name:"Antilla",
            price:1000000000,
            category:"home",
            id:10,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Antilla.jpg"
        },
        {
            name:"Villa Leopolda ",
            price:750000000,
            category:"home",
            id:11,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Villa-Leopolda-1.jpg"
        },
        {
            name:"Villa Les Cèdres",
            price:450000000,
            category:"home",
            id:12,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Villa-Les-Cedres-1-1.jpg"
        },
        {
            name:" Les Palais Bulles",
            price:390000000,
            category:"home",
            id:13,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Les-Palais-Bulles-1-1.jpg"
        },
        {
            name:" The Odeon Tower Penthouse",
            price:330000000,
            category:"home",
            id:14,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/The-Odeon-Tower-Penthouse-1.jpg"
        },
        {
            name:" Four Fairfield Pond",
            price:248000000,
            category:"home",
            id:15,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Four-Fairfield-Pond-1.jpg"
        },
        {
            name:" Ellison Estate",
            price:200000000,
            category:"home",
            id:16,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Ellison-Estate-1.jpg"
        },
        {
            name:" Palazzo di Amore",
            price:195000000,
            category:"home",
            id:17,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/Palazzo-di-Amore-1.jpg"
        },{
            name:" 18-19 Kensington Gardens ",
            price:128000000,
            category:"home",
            id:18,
            img:"https://www.globalbrandsmagazine.com/wp-content/uploads/2021/01/18-19-Kensington-Gardens-1.jpg"
        },

    ]
}

export const bazaarslice = createSlice({
    name: 'bazaarslice',
    initialState,
    reducers: {
        addcartmarketitem:(state,action)=>{
            if(state.cartmarket.length===0){
             
              state.cartmarket.push(action.payload)
             
            }
            else{
              state.cartmarket.map((element)=>{
                if(element.name===action.payload.name){
                  element.piece=Number(action.payload.piece) + Number(element.piece)
                  state.npcvalue=1
                }
      
              })
              if (state.npcvalue===0){
                state.cartmarket.push(action.payload);
      
              }
              state.npcvalue=0
              
              
              
      
            }
            
            localStorage.setItem("ownmarketitem", JSON.stringify(state.cartmarket))
            alertify.success("the purchase was successful")
      
      
      
      
      
      
      
      
          },
          getownmarketitem:(state)=>{
            if (localStorage.getItem("ownmarketitem") === null) {
                state.cartmarket = [];
              } else {
                state.cartmarket = JSON.parse(localStorage.getItem("ownmarketitem"));
              }
      
        },
        removecartmarketitem:(state,action)=>{
            if(state.cartmarket.length===0){
       
                console.log("you dont have any marketitem")
                alertify.error("you dont have any marketitem")
                
               }else{
                state.cartmarket.map((element)=>{
                    if(element.name===action.payload.name){
                        if(element.piece<action.payload.piece){
                            console.log("not enough" + element.name)
                            alertify.error("not enough " + element.name)
                           }else{
                            if(Number(element.piece)===Number(action.payload.piece)){
                                alertify.success("The sale was successful")
              
                            }else{
                              element.piece=element.piece - action.payload.piece
                              state.newcartmarket.push(element)
                              alertify.success("The sale was successful")
                            }
                           }
                    }
                    else{
                        state.newcartmarket.push(element)
            
                      }
                      
                })
                state.cartmarket=state.newcartmarket
        state.newcartmarket=[]
        localStorage.setItem("ownmarketitem", JSON.stringify(state.cartmarket))
        



               }
        },
       

      
     
      
    },
    
    
  })
  
  // Action creators are generated for each case reducer function
  export const {addcartmarketitem,getownmarketitem,removecartmarketitem} =bazaarslice.actions
  
  export default bazaarslice.reducer