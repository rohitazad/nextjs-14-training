
import styles from "./styles.module.scss";
const UserList = ({userData, editHanlder, removeHandler}:any)=>{
    return (
        <div className={styles.userList}>
            {
               userData && userData.length > 0 ? userData.map((item:any, index:any)=>{
                return (
                    <div key={`${index}-user${item.id}`} className={styles.carditem}>
                        <span>Name:- <strong>{item.name}</strong></span>
                        <span>Age:- <strong>{item.age}</strong></span>
                        <span className={styles.editBtn} onClick={()=>editHanlder(item)}>Edit</span>
                        <span className={styles.removeBtn} onClick={()=>removeHandler(item.id)}>Remove</span>
                    </div>
                )
               }):"No data " 
            }
        </div>
    )
}

export default UserList;