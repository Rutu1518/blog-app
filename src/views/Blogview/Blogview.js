import "./Blogview.css"

import React from 'react'
import {useParams} from "react-router-dom";
import blogs from "./../../data"

 function Blogview() {

    const {id}=useParams()

    const selectedBlog = blogs.find((blogObject) => blogObject.id === id )

   
  return (
    <div className="selected-blog">
      
      <h1 className="author-title">{selectedBlog.title}</h1>
      <img src={selectedBlog.author.avatar} alt="author" className="author-avatar"/>
      <p className="author-name-date">{selectedBlog.author.name}  | {selectedBlog.date}</p>
      {selectedBlog.content}
    </div>
  )
}
export default Blogview