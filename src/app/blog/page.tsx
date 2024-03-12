
import BlogList from "../../components/BlogList";
const BlogPage = async ()=>{
     const fetchBlogData = async ()=>{
        const APIURL = "https://dummyjson.com/posts"
        const data = await fetch(APIURL);
        const resData = await data.json(); 
        return resData;
     }

     const getPostData:any = await fetchBlogData();
    return (
        <>
         <div className='wraper'>
            <h1>Blog  Page Us </h1>
            <BlogList data={getPostData.posts} />
         </div>
        </>
    )
}

export default BlogPage;