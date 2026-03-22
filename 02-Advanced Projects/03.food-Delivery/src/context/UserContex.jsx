import { createContext, useState } from "react";
import { food_items } from "../food";

export const UserContext = createContext();
function UserContex({ children }) {
  let [input, setInput] = useState("");
  let [cate, setCate] = useState(food_items);
  let [show,setShow]= useState(false)
  let[Quantity,setQuantity]= useState(0)

  let value = {
    input,
    setInput,
    cate,
    setCate,
    show,
    setShow,
   setQuantity,
   Quantity
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContex;
