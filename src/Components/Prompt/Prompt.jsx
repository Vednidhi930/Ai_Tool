import React from "react";
import { Myprovider } from "../AI_Context/AiContext";
import { SiProbot } from "react-icons/si";

import Loader from "../Loader/Loader";

const Prompt = () => {
  const { question, answer,loader} = Myprovider();
  return (
    <>
    <div className="lg:w-[50rem] sm:w-96 flex flex-col items-center">
      <div className="lg:w-10/12 sm:w-96  flex items-center gap-2 p-3">
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrs-0HLtv6pOKjkX0sDAfskoGGHnQJiEr_VlwgyjcWA&s"
            className="w-screen rounded-full"
          />
        </div>

        <div>
          <h1>{question}</h1>
        </div>
      </div>
      
      <div className="lg:w-10/12 sm:w-[25rem] h-96 flex  gap-2 p-3 overflow-auto">

           <div className="w-7  flex justify-center">
            <SiProbot
            className="text-3xl my-5"
            style={{color:"#698fb7"}}
            />
           </div>
           <div>
            {loader ? <Loader/> : <p className="text-md text-wrap  font-serif my-7">{answer}</p> }
           </div>
      </div>

      </div>
    </>
  );
};

export default Prompt;
