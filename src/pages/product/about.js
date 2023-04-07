import Header from "@/components/layout/Header";
import Image from "next/image";

export default function About(){
    return (

        <>
        <Header />
         <h1>About</h1>
         <Image src={"/images/next.svg"} width={100} height={200} />
        </>
       
        
    )
}