"use client";
import { useState } from "react";
import React from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form action="">
        <div className="display">
          <input
            className="rounded-sm w-[255px] bg-[#333] mt-5 my-[2vw] text-[30px] text-right"
            type="text"
            name="display"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <div className="flex justify-center">
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="AC"
              onClick={() => setValue("")}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, value.length - 1))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="."
              onClick={() => setValue((prev) => (prev += "."))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="/"
              onClick={() => setValue((prev) => (prev += "/"))}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="7"
              onClick={() => setValue((prev) => (prev += "7"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="8"
              onClick={() => setValue((prev) => (prev += "8"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="9"
              onClick={() => setValue((prev) => (prev += "9"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="*"
              onClick={() => setValue((prev) => (prev += "*"))}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="4"
              onClick={() => setValue((prev) => (prev += "4"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="5"
              onClick={() => setValue((prev) => (prev += "5"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="6"
              onClick={() => setValue((prev) => (prev += "6"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="-"
              onClick={() => setValue((prev) => (prev += "-"))}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="1"
              onClick={() => setValue((prev) => (prev += "1"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="2"
              onClick={() => setValue((prev) => (prev += "2"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="3"
              onClick={() => setValue((prev) => (prev += "3"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="+"
              onClick={() => setValue((prev) => (prev += "+"))}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="00"
              onClick={() => setValue((prev) => (prev += "00"))}
            />
            <input
              className="border-0 outline-0 w-[60px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px]"
              type="button"
              value="0"
              onClick={() => setValue((prev) => (prev += "0"))}
            />
            <input
              className="border-0 outline-0 w-[125px] h-[60px] bg-[#fff] rounded-[10px] text-[#333] mx-[2px] my-[3px] mb-3"
              type="button"
              value="="
              onClick={() => setValue(eval(value))}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
