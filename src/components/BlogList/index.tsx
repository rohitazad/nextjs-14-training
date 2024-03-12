"use client";
 import styles from "./styles.module.scss";

const BlogList = ({data}:any)=>{

    return (
        <>
            <ul className={styles.listItem}>
                {
                    data.length > 0 ? data.map((post:any, index:number)=>{
                        return (
                            <li key={index}>
                                {post.title}
                            </li>
                        )
                    }) : <li>No Data found</li>
                }
            </ul>
        </>
    )
}

export default BlogList;