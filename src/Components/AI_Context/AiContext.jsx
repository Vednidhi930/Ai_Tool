import { createContext, useContext, useState } from "react";
import runChat from "../../Config/Baymax";
import { PiArrowArcRight } from "react-icons/pi";

const Ai_context=createContext()

const ContextProvider=({children})=>{

    const[data,setData]=useState("")
    const[prompt,setPrompt]=useState(false)
    const[question,setQuestion]=useState("")
    const[answer,setAnswer]=useState("")
    const[allprompt,setAllprompt]=useState([])
    const[allresponse,setAllresponse]=useState([])
    const[loader,setLoader]=useState(false)
    const[history,setHistory]=useState(false)
    const[recent,setRecent]=useState("")
    const[recentans,setRecentans]=useState("")
    const [menu, setMenu] = useState(true);
    const[mobile,setMobile]=useState(true)
    
   

    
    
    const sent =async(prompt)=>{
        setQuestion(prompt)
        setLoader(true)
        const response=await runChat(prompt)
        // const newarray=response.split("**")
        // const replaced=newarray.replace('**', '<b>**</b>');
        // console.log(replaced) 
       
        setAnswer(response)
        setAllresponse([...allresponse,response])
        setLoader(false)
    }


    const passData={
        data,
        setData,
        sent,
        prompt,
        setPrompt,
        question,
        answer,
        allprompt,
        setAllprompt,
        loader,
        setLoader,
        allresponse,
        setAllresponse,
        history,
        setHistory,
        recent,
        setRecent,
        recentans,
        setRecentans,
        menu,
        setMenu,
        mobile,
        setMobile
    }

    return <Ai_context.Provider value={passData}>
        {children}
    </Ai_context.Provider>
}

const Myprovider=()=>{
    return useContext(Ai_context)
}

export {Ai_context,Myprovider,ContextProvider}