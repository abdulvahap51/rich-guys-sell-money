import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import alertify from "alertifyjs"

export const getcryptos=createAsyncThunk("getcryptos",async()=>{
    const response= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false")
    return response.data
  })

const initialState = {
  loading: false,
  currencies: [{"naber":3}],
  cartcurrencies:[],
  npcvalue:0,
  newcartcurrencies:[],
};

export const cryptomarketslice = createSlice({
  name: "cryptomarketslice",
  initialState,
  reducers: {
    addcartcurrencies:(state,action)=>{
      if(state.cartcurrencies.length===0){
       
        state.cartcurrencies.push(action.payload)
       
      }
      else{
        state.cartcurrencies.map((element)=>{
          if(element.name===action.payload.name){
            element.piece=Number(action.payload.piece) + Number(element.piece)
            state.npcvalue=1
          }

        })
        if (state.npcvalue===0){
          state.cartcurrencies.push(action.payload);

        }
        state.npcvalue=0
        
        
        

      }
      
      localStorage.setItem("owncryptos", JSON.stringify(state.cartcurrencies))
      alertify.success("the purchase was successful")








    },
    removecartcurrencies:(state,action)=>{
      if(state.cartcurrencies.length===0){
       
       console.log("you dont have any crypto")
       alertify.error("you dont have any crypto")
       
      }
      else{
        state.cartcurrencies.map((element)=>{
          if(element.name===action.payload.name)
          {
             if(element.piece<action.payload.piece){
              console.log("not enough" + element.name)
              alertify.error("not enough crypto")
             }else{
              if(Number(element.piece)===Number(action.payload.piece)){
                alertify.success("The sale was successful")

              }else{
                element.piece=element.piece - action.payload.piece
                state.newcartcurrencies.push(element)
                alertify.success("The sale was successful")
              }
             }
          }
          else{
            state.newcartcurrencies.push(element)

          }
          
        })
        state.cartcurrencies=state.newcartcurrencies
        state.newcartcurrencies=[]
        localStorage.setItem("owncryptos", JSON.stringify(state.cartcurrencies))


      }



    },

    getowncryptos:(state)=>{
      if (localStorage.getItem("owncryptos") === null) {
          state.cartcurrencies = [];
        } else {
          state.cartcurrencies = JSON.parse(localStorage.getItem("owncryptos"));
        }

  },
  },
  extraReducers: (builder) => {
    builder.addCase(getcryptos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getcryptos.fulfilled, (state, action) => {
      state.currencies = action.payload;
      console.log(state.currencies)
      
    });
    builder.addCase(getcryptos.rejected, (state, action) => {
      console.log(Error);
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {addcartcurrencies,getowncryptos,removecartcurrencies} = cryptomarketslice.actions;

export default cryptomarketslice.reducer;
