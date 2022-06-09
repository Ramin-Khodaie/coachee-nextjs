import { ReactElement } from "react";
import { AiFillFilePdf } from "react-icons/ai";

const MimeIconType = ({ type, ...otherProps }: { type: string }) => {
  let Icon = null;

  console.log(9999, type)
  switch (type) {
    case "application/pdf":
      Icon = <AiFillFilePdf style={{fontSize:"2em", color:"#00aaff"}}/>;
      break;
    default:
      break;
  }
  return <> 
  {Icon}
  </>;
};

export default MimeIconType;
