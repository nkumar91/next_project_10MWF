import {userContext} from  './UserContext'
export default function MainContext({children}){
    const initData = {
        name:"kumar"
    }
    return(
     <userContext.Provider value={initData}>
        {children}
     </userContext.Provider>
    )
}