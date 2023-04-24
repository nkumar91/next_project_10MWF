import dynamic from "next/dynamic"
import Second from "@/components/dyn/Second"
const First = dynamic(()=>import("../../components/dyn/First"),{loading:()=><p>Loading...</p>,ssr:false})

export default ()=>{
    return(
        <>
       
            <h1>Dymanic Import</h1>
           <Second />
        
           <First />
         
          
        </>
    )
}