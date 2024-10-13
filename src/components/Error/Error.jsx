import s from "./Error.module.css";

const Error = () => {
  return (
    <div className={s.body}>
      <div className={s.errorloader}>
        <div className={s.erroricon} />
        <p className={s.errormessage}>Error!</p>
      </div>
      ;
    </div>
  );
};
export default Error;