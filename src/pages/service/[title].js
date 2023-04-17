import { useRouter } from "next/router"

export default ()=>{
    const {title} = useRouter().query
   // console.log(title)
    return(
        <>
        <p>hello world {title?.[0]}</p>
        </>
    )
}


// getStaticProps vs getServerSideProps

export async function getServerSideProps(context){
console.log(context.query);
    const my = await fetch(`http://localhost:3002/crud/listEmployee/${context.query.title}`)
    
    const data = await my.json()
    if(data.status === "failed"){
        return {
            notFound:true
        }
    }
    
    return {
        props:{
            name:"mukesh",
            singleEmp:data
        }
    }
}