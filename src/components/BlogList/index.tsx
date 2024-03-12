"use client";
 import styles from "./styles.module.scss";
 import Link from "next/link";

const BlogList = ({data}:any)=>{

    return (
        <>
            <ul className={styles.listItem}>
                {
                    data.length > 0 ? data.map((post:any, index:number)=>{
                        let seoName = post.title.trim().toLowerCase()
                        seoName = seoName.replace(/\s+/g, "-");
                        return (
                            <li key={index}>
                                <Link href={`/blog/id-${post.id}/${seoName}`}>
                                    {post.title}
                                </Link>
                                
                            </li>
                        )
                    }) : <li>No Data found</li>
                }
            </ul>
        </>
    )
}

export default BlogList;