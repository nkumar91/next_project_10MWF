import Header from "@/components/layout/Header"
import Link from "next/link"
import { useEffect, useState } from "react"

export default (props)=>{
    const [data,setData]  = useState([])
    useEffect(()=>{
            Promise.resolve(fetch(`http://localhost:3002/crud/listEmployee`)).then(ele=>{
                setData(ele)
            })
    },[])
    return(
        <>
        <Header />
        <p>Hello Service DD {props.name}</p>
        {
            props.apiData.map(ele=>
                
                <h1>{ele.empName}</h1>
                )
        }

            <Link href="/abc/[]/3" as="/abc/3">Go to abc</Link>

        </>
      
    )
}

export async function getStaticProps(){
      const res = await  fetch(`http://localhost:3002/crud/listEmployee`)
    
    return {
        props:{
            name:"mukesh",
            apiData:await res.json()
        }
    }
}