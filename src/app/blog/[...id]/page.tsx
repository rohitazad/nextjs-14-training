

import styles from "./styles.module.scss";
import Link from "next/link";

const BlogDetails = async (props:any)=>{
    const {params, searchParams} = props;
    const blogId = params.id;
    const getID = blogId.find((element:any) => element.startsWith("id-")).split("id-")[1];

    const fetchPostDetails = async ()=>{
        const APIURL = `https://dummyjson.com/post/${getID}`
        const data = await fetch(APIURL);
        const resData = data.json();
        return resData;
    }
    const postDetailsData = await fetchPostDetails();
    return (
        <div className={`wraper ${styles.details}}`}>
            <h1>{postDetailsData.title}</h1>
            <p>{postDetailsData.body}</p>
            <div className={styles.tags}>
                {
                   postDetailsData.tags &&  postDetailsData.tags.length > 0 ? postDetailsData.tags.map(((tag:any, index:number)=>{
                    return <span key={`-${index}-${tag}`}>
                        {
                            tag
                        }
                    </span>
                   })):""
                }

            </div>
            <Link className={styles.backBtn} href={`/blog`}>Back to blog Page</Link>
        </div>
    )
}

export default BlogDetails;