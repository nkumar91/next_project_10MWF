export default (props)=>{
    return(
        <>
            <h1>Employee {props.data.empName}</h1>
        </>
    )
}


export async function getStaticPaths(){
    const res =  await fetch(`http://localhost:3002/crud/listEmployee`)
    let total = await res.json()
    const path = total.map(ele=>{
        return {
            params:{emp_id:ele._id}
        }
    })

    return {
        paths:path,
        fallback:false
    }
}


 
   

export async function getStaticProps({params}){
    const res =  await fetch(`http://localhost:3002/crud/listEmployee/${params.emp_id}`)
    const data = await res.json()
    console.log(data)
    return {
      props:{
        data:data
      }
    }
}