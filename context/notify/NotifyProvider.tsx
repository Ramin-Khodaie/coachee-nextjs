import { NotifyContext } from "./NotifyContext"
import NotifyHelper from "./NotifyHelper"

const NotifyProvider = ({children}:{children:any})=>{

    const contextValue = {
        notify:()=>{}
    }
    return(
        <NotifyContext.Provider value={contextValue}>
            {children}
            <NotifyHelper/>
        </NotifyContext.Provider>
    )
}

export default NotifyProvider