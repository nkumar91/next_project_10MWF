import Link from "next/link"

export default (props)=>{
    return(
        <>
            <ul>
                {
                    props.emp.map((ele,index)=>
                        <li key ={index}>
                            <Link href={`employee/${ele._id}`}>{ele.empName}</Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export async function getStaticProps(context){
   const res =  await fetch(`http://localhost:3002/crud/listEmployee`)
   if(!res){
    return{
        notFound:true
    }
}

    return{
        props:{
            emp:await res.json()
        }
    }
   }
