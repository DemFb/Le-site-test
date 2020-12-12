import React, {useState, useEffect} from "react";
import Axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function Api() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  // const [show, setShow] = useState([]);

    useEffect(() => { 
    
    const apiUrlComment = 'https://jsonplaceholder.typicode.com/comments'
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'

    Axios.get(apiURL)
    .then((response) => {
      const dataList = response.data.map(listApi => {
        // console.log(listApi.id, listApi.title, listApi.body)
        return (listApi)
      })  
      setData(dataList)
        })

    Axios.get(apiUrlComment)
    .then((res) => {
      const dataPost = res.data.map(listPost => {
        // console.log(listPost.id)
        return listPost 
      })  
      setComment(dataPost)
        })
      .catch((error) => console.log(error));
  }, 
  [])

  const handleClick = (e) => {
    // e.preventDefault()
    // console.log(e.target.getAttribute("i"));
    //  currentTarget
     comment.map(commentList => (
      console.log(commentList)
      // console.log(commentList.postId) 
    ))

  }


  return (
    <div className="Api">
      <Header />
      <div className="Content">
        {data.map((dataList, i) => (
          <div key={dataList.id} className="Cards" onClick={handleClick}>
            <h3>{dataList.id}.</h3>
            <h3>{dataList.title}</h3>
            <p>{dataList.body}</p>
        </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Api;