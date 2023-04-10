import Header from "@/components/layout/Header"
import Link from "next/link"

export default ()=>{
    return(
        <>
        <Header />
        <p>Hello Service DD</p>

            <Link href="/abc/[]/3" as="/abc/3">Go to abc</Link>
        </>
      
    )
}