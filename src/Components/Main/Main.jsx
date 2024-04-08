import React from "react";
import { PiCompassThin } from "react-icons/pi";
import { SlBulb } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { BiImageAdd } from "react-icons/bi";
import { MdMicNone } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { Myprovider } from "../AI_Context/AiContext";
import Prompt from "../Prompt/Prompt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { easeIn, easeInOut, motion } from "framer-motion";
import { IoReorderThreeOutline } from "react-icons/io5";
import "../CSS/Global.css";
import Loader from "../Loader/Loader";

const Main = () => {
  const { data, setData, sent, prompt, setPrompt,allprompt,setAllprompt,menu, setMenu,mobile,setMobile} = Myprovider();

  const handlechange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if(data.length===0){
      alert("please Enter a propmt")
    }else{
      sent(data);
      setData("");
      setPrompt(true);
      setAllprompt([...allprompt,data])
    }
  
  };

  const handlesuggestion=(suggestionId)=>{

    console.log(suggestionId)
    
    const value=document.getElementById(suggestionId).innerText

    setData(value)
  }

  const handlekey=(e)=>{
     if(e.key==="Enter"){
      if(data.length===0){
        alert("please Enter a Prompt")
      }else{
        sent(data);
        setData("");
        setPrompt(true);
        setAllprompt([...allprompt,data])
      }
      
     }
  }

  const handlekeydown=(e)=>{
    if(e.key==="Delete"){
      setPrompt(false);
      setAllprompt([])
    }
  }

   window.addEventListener("keydown",handlekeydown)


   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    {
      
      <div className="lg:w-screen sm:w-screen  flex flex-col items-center  overflow-y-scroll scroll-smooth"> 
        <div className="h-screen bg-white  flex flex-col justify-between">

          <div className="lg:w-10/12  h-10 bg-white flex justify-between items-center p-2 z-20">

          <div
              title="Collapse menu"
              className="w-10 h-10 lg:hidden sm:block flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-200"
            >
              <IoReorderThreeOutline
                className="text-2xl"
                onClick={() => setMobile(!mobile)}
              />
            </div>
            
            <h1 className="text-xl ms-2">Baymax Ai</h1>
            <div className="w-10 h-10   flex justify-center items-center rounded-full overflow-hidden ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrs-0HLtv6pOKjkX0sDAfskoGGHnQJiEr_VlwgyjcWA&s"
                className="w-screen"
              />
            </div>
          </div>


          {prompt ? (
            <Prompt />
          ) : (
            <div className="middle-part w-12/12 sm:gap-10  flex flex-col items-center p-3">
              <motion.div
              animate={{y:[-2000,0]}}
              transition={{duration:1}}
              >
                <h1 className="ms-10 lg:text-6xl sm:text-5xl">
                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(16deg, #4b90ff , #ff5546)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Hii,i'm Baymax Ai
                  </span>
                </h1>
                <h1 className="ms-10 lg:text-6xl sm:text-5xl" style={{ color: "#C4C7C5" }}>
                  How can I help you today?
                </h1>
              </motion.div>

              

              <div className="cards w-12/12 h-72 z-12 flex justify-center gap-1 items-end sm:flex-wrap">
                <motion.div className="card1 w-48 h-40 rounded-lg border p-2 relative bg-slate-100 hover:bg-slate-300 "
                animate={{x:[-2000,0]}}
                transition={{duration:1}}
                >
                  <p className="text-wrap cursor-pointer"
                    id="suggestion1"
                    onClick={()=>handlesuggestion("suggestion1")}
                  >
                    Suggest Beautiful Places to see on an upcoming road trip
                  </p>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute bottom-0 right-0 ">
                    <PiCompassThin className="text-3xl" />
                  </div>
                </motion.div>

                <motion.div className="card2 w-48 h-40 rounded-lg border p-2 relative bg-slate-100 hover:bg-slate-300"
                animate={{x:[-2000,0]}}
                transition={{duration:1}}
                >
                  <p className="text-wrap cursor-pointer"
                   id="suggestion2"
                   onClick={()=>handlesuggestion("suggestion2")}
                  >
                    Briefly Summarize this concept:Urban planning
                  </p>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute bottom-0 right-0 ">
                    <SlBulb className="text-2xl" />
                  </div>
                </motion.div>

                <motion.div className="card3 w-48 h-40 rounded-lg border p-2 relative bg-slate-100 hover:bg-slate-300"
                 animate={{x:[-2000,0]}}
                 transition={{duration:1}}
                >
                  <p className="text-wrap cursor-pointer"
                   id="suggestion3"
                   onClick={()=>handlesuggestion("suggestion3")}
                  >
                    Brainstorm Team bonding activities for our work retreat
                  </p>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute bottom-0 right-0 ">
                    <LuMessageSquare className="text-2xl" />
                  </div>
                </motion.div>

                <motion.div className="card4 w-48 h-40 rounded-lg border p-2 relative bg-slate-100 hover:bg-slate-300"
                 animate={{x:[-2000,0]}}
                 transition={{duration:1}}
                >
                  <p className="text-wrap cursor-pointer"
                   id="suggestion4"
                   onClick={()=>handlesuggestion("suggestion4")}
                  >
                    Improve the readiability of following code
                  </p>
                  <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center absolute bottom-0 right-0 ">
                    <FaCode className="text-2xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          <motion.div className="w-12/12  bg-white flex   items-center relative"
           animate={{x:[-2000,0]}}
           transition={{duration:1,ease:easeInOut}}
          >
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="w-full break-normal flex-1 outline-none h-16 ps-3 rounded-full"
              style={{ background: "#F0F4F9" }}
              value={data}
              onChange={handlechange}
              onKeyDown={handlekey}
            />

            <div className="flex text-2xl gap-2 items-center absolute right-2">
              {/* <BiImageAdd />
              <MdMicNone /> */}
            {data.length===0 ? null :  <LuSendHorizonal 
            onClick={handleClick} /> }
            </div>
          </motion.div>
          <h1 className="text-center">The Answer Provided by this Ai tool could be wrong that'why don't take it seriously</h1>
        </div>
      </div>

  }
    </>
  );
};

export default Main;
