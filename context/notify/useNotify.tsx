import { useContext } from "react"
import { NotifyContext } from "./NotifyContext"

const useNotify = () =>{
    const context = useContext(NotifyContext)

    const notify = (msg:string) =>{
        console.log(msg)
        context.notify(msg)
    }

    return notify;
}

export default useNotify;