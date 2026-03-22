import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { UserContext } from "../context/UserContex";
import { GiCrossedAirFlows, GiFingersCrossed } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdOutlineNoFood } from "react-icons/md";

function Home() {
  let { cate, setCate, input, show, setShow } = useContext(UserContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newlist = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newlist);
    }
  }
  let items = useSelector((state) => state.cart);
  console.log(items);

  let subtotals = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  let taxes = (subtotals * 0.5) / 100;
  let DeliveryFee = 20;
  let totals = Math.floor(subtotals + taxes + DeliveryFee);

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex justify-center flex-wrap  gap-5 w[100%]">
          {Categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col gap-5 p-5 items-start cursor-pointer justify-center text-gray-600 text-[18px] shadow-xl rounded-lg font-semibold hover:bg-green-200  duration-200 transition-all  "
                onClick={() => filter(item.name)}
              >
                <item.icon className="w-[60px] h-[60px] text-green-600" />
                {item.name}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex items-center justify-center flex-wrap gap-5 px-5 pt-8 pb-8">
        {cate.length > 1 ? (
          <>
            {cate.map((item) => (
              <Card
                name={item.food_name}
                price={item.price}
                type={item.food_type}
                image={item.food_image}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <h1 className="tex-xl font-semibold text-green-400 flex items-center justify-center text-xl gap-4">
            No dish found <MdOutlineNoFood className="text-2xl" />
          </h1>
        )}
      </div>

      <div
        className={` w-full md:w-[40vw] h-[100%] transition-all duration-00  flex  items-center flex-col  overflow-y-scroll scroll p-5 bg-white  fixed top-0 right-0 transition-all flex flex-col  ${show ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex w-full justify-between items-center p-6">
          <span className="text-[18px] text-green-500 font-semibold">
            Order items
          </span>
          <RxCross2
            onClick={() => setShow(false)}
            className="text-[30px] text-green-500 font-semibold cursor-pointer"
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="flex flex-col w-full  gap-5">
              {items.map((item) => (
                <Card2
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  image={item.image}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="border-t-2 border-b-2 w-full border-gray-400 mt-3 flex flex-col gap-4 p-8 ">
              <div className="w-full flex justify-between items-center  ">
                <span className="text-lg font-semibold">Subtotal </span>
                <span className="text-lg font-semibold text-green-400">
                  {" "}
                  Rs {subtotals}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center  ">
                <span className="text-log font-semibold">DeliveryFee </span>
                <span className="text-log font-semibold text-green-400">
                  {" "}
                  Rs {DeliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center  ">
                <span className="text-l font-semibold">Taxes </span>
                <span className="text-lg font-semibold text-green-400">
                  {" "}
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full p-9 flex justify-between items-center  ">
              <span className="text-xl font-semibold">Total </span>
              <span className="text-xl font-semibold text-green-400">
                {" "}
                Rs {totals}/-
              </span>
            </div>
            <button className="w-[80%] p-3 bg-green-300 text-gray-500 rounded-lg hover:bg-green-400 transition-all" onClick={()=>toast.success("items placed")}>
              Order placed
            </button>
          </>
        ) : (
          <h1 className="font-semibold text-xl text-green-400">Empty Cart</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
