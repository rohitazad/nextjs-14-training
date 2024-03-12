

import styles from "./styles.module.scss";
import Link from "next/link";
import { redirect } from 'next/navigation'


const fetchPostDetails = async (blogId:any)=>{
    const APIURL = `https://dummyjson.com/post/${blogId}`
    const data = await fetch(APIURL);
    const resData = data.json();
    return resData;
}

export async function generateMetadata(props:any) {
    const {params, searchParams} = props;
    const blogId = params.id;
    const getID = blogId.find((element:any) => element.startsWith("id-")).split("id-")[1];
    const postData = await fetchPostDetails(getID);
    return {
        title: postData?.title,
        desc: postData?.desc,
        keywords: postData?.keyword,
      }
}

const BlogDetails = async (props:any)=>{
    const {params, searchParams} = props;
    const blogId = params.id;
    const getID = blogId.find((element:any) => element.startsWith("id-")).split("id-")[1];
    const postData = await fetchPostDetails(getID);
    const seoName = postData?.title?.trim().toLowerCase().replace(/\s+/g, "-");
    const getPath = `id-${getID}/${seoName}`;
    const urlPathName = params.id.join("/");
    const redirectURL = `/blog/${getPath}`;
    if (getPath !== urlPathName) {
        redirect(redirectURL);
      }
    return (
        <div className={`wraper ${styles.details}}`}>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <div className={styles.tags}>
                {
                   postData.tags &&  postData.tags.length > 0 ? postData.tags.map(((tag:any, index:number)=>{
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