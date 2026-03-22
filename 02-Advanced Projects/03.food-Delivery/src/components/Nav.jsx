import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContex";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  const { input, setInput, cate, setCate , setShow } = useContext(UserContext);
 let items = useSelector(state=>state.cart)

  let handlechange = (e) => {
    setInput(e.target.value);

  };
  useEffect(() => {
    let newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input),
    );

    setCate(newlist);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8 ">
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-2xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[40%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl md:w-[70%]"
      >
        <IoSearch className="w-5 h-5 text-green-500" />
        <input
          type="text"
          placeholder="search items..."
          onChange={handlechange}
          value={input}
          className="w-full outline-none text-[16px] md:text-[20px]"
        />
      </form>

      <div className="w-[60px] relative h-[60px] bg-white flex items-center justify-center rounded-md shadow-2xl " onClick={()=>setShow(true)}>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
        <span className="absolute right-2 top-0">{items.length}</span>
      </div>
    </div>
  );
}

export default Nav;
