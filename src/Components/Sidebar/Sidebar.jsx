import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import "./Sidebar.css";
import { Myprovider } from "../AI_Context/AiContext";
import { easeInOut, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // const [menu, setMenu] = useState(true);
  const {
    allprompt,
    setPrompt,
    history,
    setHistory,
    setRecent,
    allresponse,
    setRecentans,
    menu,
    setMenu,
    mobile,
    setMobile
  } = Myprovider();

  const handlehistory = (id) => {
    setHistory(true);
    setRecent(allprompt[id]);
    setRecentans(allresponse[id]);
    //  console.log(id)
  };

  const handleclear = () => {
    setPrompt(false);
    setHistory(false);
  };
  return (
    <>
      <div className="side-bar sm:hidden lg:block" style={{ background: "#F0F4F9" }}>
        <div
          className={`${
            menu ? "w-18" : "effect"
          } h-full  p-2 flex flex-col justify-between`}
        >
          <div className="flex flex-col gap-10 p-2">
            <div
              title="Collapse menu"
              className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-200"
            >
              <IoReorderThreeOutline
                className="text-2xl sm:block"
                onClick={() => setMenu(!menu)}
              />
            </div>

            <div
              title="New chat"
              className={`${
                menu ? "w-10 h-10 " : "w-32"
              }  h-10  p-1 rounded-full flex justify-center items-center gap-2`}
              style={{ background: "rgba(223, 228, 234,1.0)" }}
              onClick={handleclear}
            >
              <GoPlus
                className="text-2xl"
                style={{ color: "rgba(87, 101, 116,1.0)" }}
              />
              {menu ? null : (
                <h1
                  className="text-sm cursor-pointer"
                  style={{ color: "rgba(87, 101, 116,1.0)" }}
                >
                  New chat
                </h1>
              )}
            </div>

            {menu ? null : (
              <div className="recent h-60 overflow-auto">
                <h1 className="ms-2">Recent</h1>
                {allprompt.map((curr, i) => (
                  <div
                    onClick={() => handlehistory(i)}
                    key={i}
                    className="w-full flex  p-2 my-1 hover:bg-slate-200 rounded-full overflow-hidden"
                  >
                    <div className="w-9">
                      {" "}
                      <LuMessageSquare className="text-2xl" />{" "}
                    </div>
                    <p className="text-sm overflow-hidden text-nowrap cursor-pointer">
                      {curr}...
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div
              title="Help"
              className="w-full flex flex-col justify-center items-center gap-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5  items-center">
                <IoIosHelpCircleOutline className="text-2xl" />
                {menu ? null : (
                  <h1
                    className="text-md "
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Help
                  </h1>
                )}
              </div>
            </div>

            <div
              title="Activity"
              className="w-full flex flex-col gap-2 p-2 justify-center items-center  rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5  items-center">
                <RxCounterClockwiseClock className="text-xl" />
                {menu ? null : (
                  <h1
                    className="text-md"
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Activity
                  </h1>
                )}
              </div>
            </div>

            <div
              title="Settings"
              className="w-full flex flex-col gap-2 p-2 justify-center items-center  rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5 items-center">
                <IoSettingsOutline className="text-xl" />
                {menu ? null : (
                  <h1
                    className="text-md"
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Settings
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    {mobile ? null : 
     <div className="for mobile">
        <div
          className="w-80 h-screen absolute top-0 left-0 z-20  flex flex-col justify-around"
          style={{ background: "#F0F4F9" }}
        >
          <div className="recent h-60 overflow-auto">
            <h1 className="ms-2">Recent</h1>

            {allprompt.map((curr, i) => (
              <div
                onClick={() => handlehistory(i)}
                key={i}
                className="w-full flex  p-2 my-1 hover:bg-slate-200 rounded-full overflow-hidden"
              >
                <div className="w-9">
                  {" "}
                  <LuMessageSquare className="text-2xl"
                   />{" "}
                </div>
                <p className="text-sm overflow-hidden text-nowrap cursor-pointer">
                  {curr}...
                </p>
              </div>
            ))}
          </div>

          <div>
          
        <div className="flex flex-col">
        <div
              title="Help"
              className="w-full flex flex-col justify-center items-center gap-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5  items-center">
              <IoIosHelpCircleOutline className="text-2xl" />
              <h1
                    className="text-md"
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Help
                  </h1>
              </div>
            </div>
        </div>

        
        <div className="flex flex-col">
        <div
              title="Help"
              className="w-full flex flex-col justify-center items-center gap-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5  items-center">
              <RxCounterClockwiseClock className="text-2xl" />
              <h1
                    className="text-md"
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Activity
                  </h1>
              </div>
            </div>
        </div>

        
        <div className="flex flex-col">
        <div
              title="Help"
              className="w-full flex flex-col justify-center items-center gap-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer"
            >
              <div className="w-full flex gap-5  items-center">
              <IoSettingsOutline className="text-2xl" />
              <h1
                    className="text-md"
                    style={{ color: "rgba(87, 101, 116,1.0)" }}
                  >
                    Settings
                  </h1>
              </div>
            </div>
        </div>
        </div>

        </div>
      </div>  
}
    </>
  );
};

export default Sidebar;
