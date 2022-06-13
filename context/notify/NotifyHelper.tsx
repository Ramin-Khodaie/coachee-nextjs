import { createContext, useContext, useState } from "react";
import SnackBar from "../../components/Snackbar/Snackbar";
import { NotifyContext } from "./NotifyContext";

const NotifyHelper = () => {
  const context = useContext(NotifyContext);

  const [state, setState] = useState({ message: "", hidden:"" });

  const show = (message: string) => {
    setState({ message: message, hidden:"visible" });
    setTimeout(()=>{
        setState({message:"", hidden:""})
    },3000)
  };

  context.notify = show;
console.log(64654,state.message)
  return <SnackBar message={state.message} classes={state.hidden}/>;
};

export default NotifyHelper;
