import {  createSlice } from '@reduxjs/toolkit'



const initialState = {
  
    
    selectedtichguys:[],
    richguys:{
        "richguyss":[
            {
                "name":"Elon Musk",
                "assets":228000000000,
                "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",

            },
            {
                "name":"Jeff Bezos",
                "assets":137200000000,
                "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
            },
            {
                "name":"Warren Buffett",
                "assets":96900000000,
                "img":"https://imageio.forbes.com/specials-images/imageserve/5babb7f1a7ea4342a948b79a/0x0.jpg?format=jpg&crop=2327,2329,x748,y1753,safe&height=416&width=416&fit=bounds"

            },
            {
                "name":"Bill Gates",
                "assets":101700000000,
                "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg/640px-Bill_Gates_-_Nov._8%2C_2019.jpg"

            },
            {
                "name":"Ronaldo",
                "assets":230000000,
                "img":"https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1"

            },
            {
                "name":"Messi",
                "assets":130000000,
                "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/230px-Lionel_Messi_20180626.jpg"

            },
            {
                "name":"Dwayne Johnson",
                "assets":800000000,
                "img":"https://i.pinimg.com/236x/d9/b0/d2/d9b0d255c090c944a8799ce810d7c163--rock-johnson-dwayne-johnson.jpg"

            },
            {
                "name":"Cem Yılmaz",
                "assets":110000000,
                "img":"https://m.media-amazon.com/images/M/MV5BMTU5NzYxMDM3N15BMl5BanBnXkFtZTgwMDEzMTE4MTE@._V1_.jpg"

            },

        ]

    }
  }




  export const richguysslice = createSlice({
    name: 'richguysslice',
    initialState,
    reducers: {
        addselectedrichguys:(state,action)=>{
            state.selectedrichguys = action.payload
            localStorage.setItem("mal", JSON.stringify(action))

        },
        getrichguy:(state)=>{
            if (localStorage.getItem("mal") === null) {
                state.selectedtichguys = "";
              } else {
                state.selectedtichguys = JSON.parse(localStorage.getItem("mal"));
              }

        },
        removeguy:(state)=>{
            localStorage.removeItem("mal");
            localStorage.removeItem("owncryptos");
            localStorage.removeItem("ownmarketitem");
        },
        addamount:(state,action)=>{
            localStorage.removeItem("mal");
            state.selectedtichguys=action.payload
            localStorage.setItem("mal", JSON.stringify(action))
        },
        removeamount:(state,action)=>{
            localStorage.removeItem("mal");
            state.selectedtichguys=action.payload
            localStorage.setItem("mal", JSON.stringify(action))
        }

      
     
      
    },
    
    
  })
  
  // Action creators are generated for each case reducer function
  export const { addselectedrichguys,getrichguy,removeguy,removeamount,addamount} =richguysslice.actions
  
  export default richguysslice.reducer