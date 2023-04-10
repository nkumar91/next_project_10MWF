import Foo from "@/components/product/Foo"
import { useEffect, useState } from "react"

export default function Kumar()
{
    const [counter,setCounter] = useState(0)
    const [s,setS] = useState(345)

    
    useEffect(()=>{   // react Hooks
      setS(s+1)
    },[counter])


    const fun = (t)=>{
        setCounter(t)
    }
    return(
        <>
            <h1>Kumar {counter} {s}</h1>
            <button onClick={()=>setCounter(counter+1)}>Inc</button>
            <Foo a = {counter} f = {fun}/>
        </>
    )
}