import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from 'react-router-dom';

export default function CreatePost(){
    const [posts, setPosts]= useState([]);
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json())
        // .then((json) => console.log(json));
        getPosts();
    },[]);

    const getPosts=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
            console.log(response.data);
            setPosts(response.data);
        });
        
    }

    const navigate = useNavigate();
   
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    

    const addPost = async () => {
        const post = { title: title, body: body };
        axios.post('https://jsonplaceholder.typicode.com/posts', {
             title,
             body
            
        })
        setPosts([post, ...posts]);
      };
   

    return(
        <div class="wrap">
        <h1>Adding Posts</h1>
       <hr></hr>
        <br></br>
        <div className=" boxs panel-body">
        <form className="create-form">
                
                <label className='left'>Title</label>
                <input placeholder='title' className="form-control" onChange={(e) => setTitle(e.target.value)}/>
           <br></br>
            
                <label className='left'>Body</label>
                <input placeholder='body' className="form-control" onChange={(e) => setBody(e.target.value)}/>
              
        </form>
<br></br>
        <button onClick={addPost} className="btn btn-primary btn-sm">
          Add Post
        </button>
        <hr></hr>
</div>

        <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                    
                    
                    </tr>
                </thead>
                 <tbody>
                 {posts.map((post,key)=>{
                    return(
                        <tr key={key}>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{post.body}</td>

                          </tr>
                    );
                 }
                       
                    
                    )}      
                 </tbody>
                      
                  
                                  
            </table>
        </div>
    )
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState,useEffect } from "react";
// import {useParams} from 'react-router-dom';

// export default function CreatePost() {

//     const [posts,setPosts]=useState([]);
//     // const [formValues, setFormValues] = 
//     // useState({ title: '', body:''})

//     //const {id}=useParams();
     
//     //   this.state = {title: '', body:''};
//     //   this.handleChange = this.handleChange.bind(this);
//     //   this.handleSubmit = this.handleSubmit.bind(this);
    
//     useEffect(()=>{
//         // fetch('https://jsonplaceholder.typicode.com/posts')
//         // .then(response=>response.json())
//         // .then(res=>setUsers(res))
        
//         getPost();
//     },[]);
  
//     const getPost=()=>{
      
//         const addPost = async () => {
//             const post = { title: "New Post", body: "new" };
//             await axios.post('https://jsonplaceholder.typicode.com/posts', post);
//             setPosts([post, ...posts]);
//           };
        
//     }

//     const addPost = async () => {
//         const post = { title: "New Post", body: "new" };
//         await axios.post('https://jsonplaceholder.typicode.com/posts', post);
//         setPosts([post, ...posts]);
//       };

//       const handleChange=(event)=>{
//         const name=event.target.name;
//         const value=event.target.value;
//         setPosts(values=>({...values,[name]:value}));
//       }

//  const handleSubmit=(event)=>{
//       event.preventDefault();
   
//       let formData = new FormData();
//       formData.append('title', posts.title)
//       formData.append('body', posts.body)
   
//       axios.post('https://jsonplaceholder.typicode.com/posts',formData)
          
//       .then(function (response) {
//           //handle success
//           console.log(response)
//           alert('New post Successfully Added.');  
//       })
//       .catch(function (response) {
//           //handle error
//           console.log(response)
//       });
   
//     } 


  
//       return (
//           <div className="container">
//               <h1 className="page-header text-center">Add a post here</h1>
//               <Link to="/" className="home btn btn-primary btn-xs">Home</Link>
//               <button onClick={addPost} className="btn btn-primary btn-sm">
//           Add Post
//         </button>
//               <div className="col-md-12">
             
//               <div className="box panel panel-primary">
//               <div className='paragraph'> <p className='para'>*Create a post </p></div>
//               <br/>
//                   <div className=" boxs panel-body">
//                   <form onSubmit={this.handleSubmit}>
//                   <label>Title</label>
//                   <input type="textarea" name="title" className="form-control" value={posts.title} onChange={handleChange} />
//                   <br/>

//                   <label>Body</label>
//                   <input type="textarea" name="body" className="form-control" value={posts.body} onChange={handleChange} />
//                   <br/>
                 
//                   <br/>
//                   <input type="submit" className="btn btn-primary btn-block" value="Post" />
//               </form>
//                   </div>
//               </div>
//               </div>
//           </div>
//       );
  
// }
