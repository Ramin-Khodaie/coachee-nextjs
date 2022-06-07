import { BsFillCloudUploadFill } from "react-icons/bs";
import { useState, useRef } from "react";

import styles from "./Landing.module.css";

interface newForm {
  name: string;
  phonenumber: number;
  availbleOn: string;
  resume: string;
  email: string;
}
const Landing = () => {
  const [state, setState] = useState<newForm>({
    name: "",
    phonenumber: 0,
    availbleOn: "",
    resume: "",
    email: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const doSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  return (
    <div>
      <form onSubmit={doSubmit} className={styles.form}>
        <div className={styles.input_container}>
          <label>Name </label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className={styles.input_container}>
          <label>Telephone</label>
          <input
            type="tel"
            name="telephone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className={styles.radio_container}>
          <label>Available on : </label>
          <label>
            Telegram <input type="radio" name="telegram" />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            WhatsApp <input type="radio" name="whatsapp" />
            <span className={styles.checkmark}></span>
          </label>
        </div>
        <div className={styles.input_container}>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your e-mail" />
        </div>
        <div className={styles.uploadfield}>
          <BsFillCloudUploadFill
            size="20px"
            style={{ marginTop: "5px", color: "#ff7c24" }}
          />
          <p>Drag & Drop here or</p>
          <span onClick={handleUpload}>brows</span>
          <input type="file" id="file" hidden ref={inputRef} />
        </div>
        {/* <button>
          Upload file <input type="file" hidden />
        </button> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Landing;
