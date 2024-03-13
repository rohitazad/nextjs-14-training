

import styles from "./styles.module.scss";

const AddUser = ({
    userName, 
    setUserName,
    age,
    setAge,
    formSubmit,
    mode
}:any)=>{
    return (
        <>
            <div className={styles.formWrap}>
                <div className={styles.formSec}>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="enter your name" />
                </div>
                <div className={styles.formSec}>
                    <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="enter your age" />
                </div>
                <button onClick={formSubmit}>
                    {mode ? "Update" : "Add User"}
                </button>
            </div>
        </>
    )
}

export default AddUser;