import Header from "@/components/layout/Header"
import Bar from "@/components/product/Bar"
import Link from "next/link"
import { useEffect, useState } from "react"

export default ({name,apiData,singleEmp})=>{
    const [data,setData]  = useState([])
    useEffect(()=>{
            Promise.resolve(fetch(`http://localhost:3002/crud/listEmployee`)).then(ele=>{
                setData(ele)
            })
    },[])
    return(
        <>
        <Header />
        <p>Hello Service DD {name}   {singleEmp.empName}</p>
      <Bar abc = {apiData}/>

            <Link href="/abc/[]/3" as="/abc/3">Go to abc</Link>

        </>
      
    )
}

export async function getStaticProps(){
      const res = await  fetch(`http://localhost:3002/crud/listEmployee`)
      
      const my = await fetch(`http://localhost:3002/crud/listEmployee/6427cc4d30ba6a178f6f0064`)
    
    return {
        props:{
            name:"mukesh",
            apiData:await res.json(),
            singleEmp:await my.json()
        }
    }
}