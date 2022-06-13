import styles from "./Snackbar.module.css";

const SnackBar = ({ message, classes }: { message: string, classes:string }) => {
    console.log(2222, classes)
  return <div className={`${styles.snackbar} ${classes ? styles.visible : ""}`}>{message}</div>;
};

export default SnackBar;
