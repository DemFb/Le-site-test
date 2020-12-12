import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Api from './Api';




function App() {
  return(
    <div className="App">
      <Api />
      
      {/* <Router>
          <Route exact path ="/home" component={Home}/>
          <Route exact path ="/api" component={Api}/>
          <Route exact path ="/setupUnit" component={setupUnit}/>
      </Router> */}
    </div>
    
  );
}
export default App;


// const [data, setData] = useState([]);
//   const [comment, setComment] = useState([]);
//   // const [show, setShow] = useState([]);

//     useEffect(() => { 
    
//     const apiUrlComment = 'https://jsonplaceholder.typicode.com/comments'
//     const apiURL = 'https://jsonplaceholder.typicode.com/posts'

//     Axios.get(apiURL)
//     .then((response) => {
//       const dataList = response.data.map(listApi => {
//         // console.log(listApi.id, listApi.title, listApi.body)
//         return (listApi)
//       })  
//       setData(dataList)
//         })

//     Axios.get(apiUrlComment)
//     .then((res) => {
//       const dataPost = res.data.map(listPost => {
//         // console.log(listPost.id)
//         return listPost 
//       })  
//       setComment(dataPost)
//         })
//       .catch((error) => console.log(error));
//   }, 
//   [])

//   const handleClick = (e) => {
//     // e.preventDefault()
//     console.log(e.target.getAttribute("i"));
//     //  currentTarget
//     // comment.map(commentList => (
//       // console.log(commentList)

//       /* console log des id qui auraient pu m'aider à filtrer */
//     //   console.log(commentList.postId) 
//     // ))

//   }


//   return (
//     <div className="App">
//       <div className="alert alert-primary" role="alert">
//           A simple primary alert—check it out!
//         </div>
//       <div className="Content">
//         {data.map((dataList, i) => (
//           <div key={dataList.id} className="Cards" onClick={handleClick.bind(i)}>
//             <h3>{dataList.id}.</h3>
//             <h3>{dataList.title}</h3>
//             <p>{dataList.body}</p>
//         </div>
//         ))}
//       </div>
//     </div>
//   );