import "./Home.css"
import blogs from "./../../data"
import Blogcard from "../../component/Blogcacrd/Blogcard"

function Home() {
  return (
    <>
    <div className="blogs-container">
    {
        blogs.map((blogObject, i)=>{
         const {
            id,
            title,
            content,
            author,        
            date,
            categories

         } = blogObject

         return(
          <Blogcard
           key={i}
           id={id}
           title={title}
           content={content}
           author={author}
           date={date}
           categories={categories}
          
          />)
         })
       }
       </div>
    </>
    )
}

export default Home
