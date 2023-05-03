import { useEffect, useState } from "react"

export default function useMyFetch(url){
    const [data,setData] = useState()
    useEffect(()=>{
            fetch(url).then(res=>res.json()).then(response=>{
                setData(response)
            })
    },[url])
    return [data]
}