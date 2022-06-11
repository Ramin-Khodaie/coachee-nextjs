import React from "react";
import { useAppSelector } from "../../redux/hook";
import { INewResume } from "../../redux/Reducers/coacheSlice";
import styles from "./Panel.module.css";
import {
  FaUser,
  FaMobile,
  FaTelegram,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";

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

  console.log(coache);

  return (
    <div className={styles.container}>
      <div className={styles.coache_info}>
        <img src="" alt="coache avatar" />
        <p>coache name: </p>
        <span>john doe</span>
        <p>username:</p>
        <span>coache username</span>
      </div>
      <div className={styles.choachee_info}>
        <ul>
          <li>
            <span>
              <FaUser className={styles.icons} />
              name
            </span>
            <span>
              {" "}
              <FaMobile className={styles.icons} />
              phonenumber
            </span>
            <span>
              <FaTelegram className={styles.icons} /> /{" "}
          
              availbleOn
            </span>
            <span>
              <FaMailBulk className={styles.icons} />
              email
            </span>
            <span>resume</span>
            <span>status</span>
          </li>
          {coache.map((d: INewResume, idx: number) => (
            <li key={idx}>
              <div className={styles.cell}>
                <span>{d.name}</span>
              </div>
              <div className={styles.cell}>
                <span>{d.phonenumber}</span>
              </div>
              <div className={styles.cell}>
                <span>{d.availbleOn.telegram ? "telegram" : ""}</span>
                <span>{d.availbleOn.whatsapp ? "whatsapp" : ""}</span>
              </div>
              <div className={styles.cell}>
                <span>{d.email}</span>
              </div>
              <div className={styles.cell}>
                <span>{d.resume.toString()}</span>
              </div>
              <div className={styles.cell}>
                <span>{d.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Panel;
