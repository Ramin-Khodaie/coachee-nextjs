import React from "react";
import { useAppSelector } from "../../redux/hook";
import { INewResume } from "../../redux/Reducers/coacheSlice";
import styles from "./Panel.module.css";

const Panel = () => {
  const dummydata: INewResume[] = [
    {
      name: "john doe",
      phonenumber: "55555555",
      availbleOn: { telegram: true, whatsapp: false },
      email: "johndoe@gmail.com",
      resume: "",
      status: "status 1",
    },
    {
      name: "john smth",
      phonenumber: "2222222",
      availbleOn: { telegram: false, whatsapp: true },
      email: "johnsmith@gmail.com",
      resume: "",
      status: "status 2",
    },
  ];
  const { coache } = useAppSelector((state) => state.coacheeINFO);
  

  const DataTable = (data:any) =>{
    return(
      <React.Fragment>
        <td>
          {data.name}
        </td>
        <td>{data.phonenumber}</td>
        <td>{data.phonenumber}</td>
        <td>{data.email}</td>
        <td>{data.resume}</td>
      </React.Fragment>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.coacheInfo}>sdfdf</div>

      <div>
        <>
        
        
        <table>
          <th>
            <tr>
              <td>name</td>
              <td>phonenumber</td>
              <td>availbleOn</td>
              <td>email</td>
              <td>resume</td>
            </tr>
          </th>
          <tbody>
            <tr>
              {dummydata.map((d:INewResume, i) => (
                <>
                  <DataTable data={d}/>
                </>
              ))}
            </tr>
          </tbody>
        </table>
        </>
      </div>
    </div>
  );
};

export default Panel;
