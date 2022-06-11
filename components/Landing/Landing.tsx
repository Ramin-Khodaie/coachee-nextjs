import { BsFillCloudUploadFill } from "react-icons/bs";
import { useState, useRef, useCallback } from "react";
import { INewResume } from "../../redux/Reducers/coacheSlice";
import { useDropzone } from "react-dropzone";
import { useAppDispatch } from "../../redux/hook";
import { uploadResume } from "../../redux/Reducers/coacheSlice";

import styles from "./Landing.module.css";
import MimeIconType from "../MimeIconType/MimeIconType";

const Landing = () => {
  const [state, setState] = useState<INewResume>({
    name: "",
    phonenumber: "",
    availbleOn: { telegram: false, whatsapp: false },
    resume: "",
    email: "",
    status: "status 1",
  });

  // const [previewFile, setPreviewFiles] = useState<any>([]);

  const dispatch = useAppDispatch();

  // function collectFiles(files: any[]) {
  //   const showFiles = [];
  //   const actFiles = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const d = URL.createObjectURL(file);
  //     const showFile = { preview: d, type: file.type };
  //     showFiles.push(showFile);
  //     actFiles.push(file);
  //   }

  //   //setstate({...state})
  //   setPreviewFiles(showFiles);
  //   console.log(888, state)
  //   setState({ ...state, resume: actFiles });
  // }

  // const onDrop = useCallback((acceptedFiles: any) => {
  //   console.log(234, state)
  //   collectFiles(acceptedFiles);
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const inputRef = useRef<HTMLInputElement>(null);

  //handle change for inputs
  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;

    if (name === "telegram") {
      setState({
        ...state,
        availbleOn: { ...state.availbleOn, [name]: !state.availbleOn.telegram },
      });
      return;
    }
    if (name === "whatsapp") {
      setState({
        ...state,
        availbleOn: { ...state.availbleOn, [name]: !state.availbleOn.whatsapp },
      });
      return;
    }
    if (name === "phonenumber") {
      setState({ ...state, [name]: value });
      return;
    }
    if (name === "resume") {
      setState({ ...state, [name]: e.target.files[0] });
      // setPreviewFiles([e.target.files]);
      return;
    }
    setState({ ...state, [name]: value });
  };

  //submit the filled form to backend
  const doSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("resume", "ok")
    console.log(4466, state);

    dispatch(uploadResume(state))
  };

  const handleInputRef = (e: any) => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <form onSubmit={doSubmit} className={styles.form}>
        <div className={styles.input_container}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={state.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className={styles.input_container}>
          <label>Telephone</label>
          <input
            type="tel"
            name="phonenumber"
            maxLength={11}
            placeholder="Enter your phone number"
            value={state.phonenumber}
            onChange={handleChangeInput}
          />
        </div>
        <div className={styles.radio_container}>
          <label>Available on : </label>
          <label>
            Telegram{" "}
            <input
              type="checkbox"
              checked={state.availbleOn.telegram}
              name="telegram"
              value={state.availbleOn.telegram ? "telegram" : ""}
              onChange={handleChangeInput}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            WhatsApp{" "}
            <input
              type="checkbox"
              checked={state.availbleOn.whatsapp}
              name="whatsapp"
              value={state.availbleOn.whatsapp ? "whatsapp" : ""}
              onChange={handleChangeInput}
            />
            <span className={styles.checkmark}></span>
          </label>
        </div>
        <div className={styles.input_container}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={state.email}
            onChange={handleChangeInput}
          />
        </div>

        <button
          className={styles.uploadbtn}
          onClick={handleInputRef}
          type="button"
        >
          Upload a file or
          <input
            onChange={handleChangeInput}
            type="file"
            id="file"
            name="resume"
            hidden
            ref={inputRef}
          />
        </button>

        {/* <div
          className={styles.uploadfield}
          style={{
            border: isDragActive
              ? "2px dotted #00FF00"
              : "2px dotted rgb(1,28,107)",
          }}
          {...getRootProps()}>
          <BsFillCloudUploadFill
            size="20px"
            style={{ marginTop: "5px", color: "#ff7c24" }}
          />
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop it now</p> : <p>Drag & Drop here or</p>}

          <span onClick={handleInputRef}>brows</span> 
        </div> */}

        {/* <div className={styles.preview}>
          {previewFile.map((a: any, i: number) => (
            <div className={styles.preview_item} key={i}>
              <MimeIconType
                type={a.type}
                // style={{fontSize:'5em'}}
              />
            </div>
          ))}
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Landing;
