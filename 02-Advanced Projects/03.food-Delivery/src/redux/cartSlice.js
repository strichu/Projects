// // import { createSlice } from "@reduxjs/toolkit";

// // const cartSlice = createSlice({
// //     name:"cart",
// //     initialState:[],
// //     reducers:{
// //         addItems:(state,action)=>{
// //           let ave=  state.find((item)=>item.id === action.payload.id)
// //           if(ave){
// //             return state.map((item)=>item.id===action.payload.id ? {...item,item:item.qty+1}:item)
// //           }else{
// //               state.push(action.payload)

// //           }
// //         },
// //         removeItems:(state,action)=>{
// //             return state.filter((item)=>item.id !==action.payload)
// //         }
// //     }
// // })
// // export const{addItems,removeItems}= cartSlice.actions
// // export default cartSlice.reducer
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addItems: (state, action) => {
//       const existingItem = state.find((item) => item.id === action.payload.id);

//       if (existingItem) {
//         existingItem.qty += 1;
//       } else {
//         state.push({ ...action.payload, qty: 1 });
//       }
//     },
//     removeItems: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addItems, removeItems, Increment } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addItems: (state, action) => {
      let ave = state.find((item) => item.id === action.payload.id);

      if (ave) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        state.push(action.payload);
      }
    },

    removeItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
      );
    },
     DecrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty -1 } : item,
      );
    },
  },
});

export const { addItems, removeItems,IncrementQty,DecrementQty } = cartSlice.actions;

export default cartSlice.reducer;
