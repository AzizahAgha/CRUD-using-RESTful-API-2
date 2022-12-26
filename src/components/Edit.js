import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
 import axios from "axios";
// // import { useNavigate,useParams } from 'react-router-dom';

// // export default function EditPost(){
// //     const navigate=useNavigate();

// //     const [inputs,setState]=useState([])

// //     const {id}=useParams();

// //     useEffect(()=>{
// //       // fetch('https://jsonplaceholder.typicode.com/posts')
// //       // .then(response=>response.json())
// //       // .then(res=>setUsers(res))
      
// //       getPost();
// //   },[]);

// //   const getPost=()=>{
    
// //       axios.put(`https://jsonplaceholder.typicode.com/posts/?id=${id}`)
// //       .then(response => response.data)
// //       .then((data) => {
// //         // handle success
// //         console.log(data);
// //         setState({ id: data.id, title: data.title, body: data.body})
// //       })
// //       .catch(function (error) {
// //         // handle error
// //         console.log(error);
// //       })
// //       .then(function () {
// //         // always executed
// //       });
      
// //   }


// //     const handleChange=(event)=>{
// //         const name=event.target.name;
// //         const value=event.target.value;
// //         setState(values=>({...values,[name]:value}));

// //     }
// //     const handleSubmit=(event)=>{


// //         // event.preventDefault();
// //         // axios.post('http://localhost/ReactAPI/contacts.php',inputs).then(function(response){
// //         //     console.log(response.data);
// //         //     navigate('/');
// //         // });

// //         console.log(inputs);

// //         event.preventDefault();
 
// //         let formData = new FormData();
// //         formData.append('title', inputs.title)
// //         formData.append('body', inputs.body)
       
   
// //         axios.post( `https://jsonplaceholder.typicode.com/posts/?id=${id}`,formData)
// //       //   axios({
// //       //     method: 'post',
// //       //     url: `http://localhost/ReactAPI/contacts.php/?id=${id}`,
// //       //     data: formData,
// //       //     config: { headers: {'Content-Type': 'multipart/form-data' }}
// //       // })
// //         .then(function (response) {
// //             //handle success
// //             console.log(response.data);
// //             if(response.status === 200) {
// //               alert("Contact update successfully.");
// //             }
// //         })
// //         .catch(function (response) {
// //             //handle error
// //             console.log(response)
// //         });
// //     }
// //     return(
       
// //          <div class="wrapper">
// //           <div class="container-fluid">
// //             <div class="row">
// //                 <div class="col-md-12">
// //                     <h2 class="mt-5 title">Edit Post</h2>
// //                    <div class="boxx"> 
// //                       <p class="para">Please fill this form to create record to the database.</p>
// //                       <form onSubmit={handleSubmit}>
// //                         <table class="gfg" >
// //                           <tbody>
                          
// //                              <tr>
// //                                 <th class='heading'>
// //                                 <label>Title:</label>
// //                               </th>
// //                               <td>
// //                                 <input type="text" name="title" value={inputs.title} onChange={handleChange}/>
// //                               </td>
// //                            </tr>

// //                            <tr>
// //                                <th class='heading'>
// //                                  <label>Body:</label>
// //                                </th>
// //                                <td>
// //                                   <input type="text" name="body" value={inputs.body} onChange={handleChange}/>
// //                                </td>
// //                           </tr>

                         

// //                            </tbody>
// //                         </table>
// //                          <div class="buttons">
// //                           <input type="submit" class="btn btn-primary" value="Submit"/>
// //                           <a href="/" class=" cancel btn btn-secondary ml-2">Cancel</a>
// //                           </div>
// //                      </form>
// //                    </div>
// //                 </div>
// //             </div>        
// //         </div>
// //     </div>
       
// //     )
// // }



export default function EditUser(){

  // const [posts, setPosts] = useState([]);
  // const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
  // const history=useNavigate();
  // const {id}=useParams();

  // useEffect(()=>{
 
  //   const getPosts = async () => {
  //     const { data: res } = await axios.get(apiEndPoint);
  //     setPosts(res);
  //   };
  //   getPosts();

  // },[]);

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

  const handleUpdate = async (post) => {
    post.title = "Updated";
    await axios.put('https://jsonplaceholder.typicode.com/posts' + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

    return(
      <div class="wrap">
        <h1>Update Posts</h1>
        
        <hr></hr>
        <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                    
                    </tr>
                </thead>
                 <tbody>
                 {posts.map((post,key)=>{
                    return(
                        <tr key={key}>
                          <td>{post.id}</td>
                          <td>{post.title}</td>
                          <td>{post.body}</td>

                         
                          <td>
                            
                            <Link className='delete btn btn-warning ml-3'   onClick={() => handleUpdate(post)}>Update</Link>
                          </td>
                          </tr>
                   );
                 }
                       
                    
                     )}      
                  </tbody>
                      
                  
                                  
             </table>
         </div>
     );
 }



// import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
//  import "bootstrap/dist/js/bootstrap.bundle.min";
//  import React from 'react';
// import axios from 'axios';
// import { useNavigate,useParams } from 'react-router-dom';
// import {Link} from 'react-router-dom';



// export default function EditPost(){
//   const [posts, setPosts]= useState([]);
//   useEffect(()=>{
//       // fetch('https://jsonplaceholder.typicode.com/posts')
//       // .then((response) => response.json())
//       // .then((json) => console.log(json));
//       getPosts();
//   },[]);

//   const getPosts=()=>{
//       axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
//           console.log(response.data);
//           setPosts(response.data);
//       });
      
//   }
//   const {id}=useParams();

//   const navigate = useNavigate();
//   // const [id, setID] = useState(null);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
  

//   const handleUpdate = async (post) => {
//         // post.title = "Updated";
//         await axios.put('https://jsonplaceholder.typicode.com/posts' + "/" + post.id);
//         const postsClone = [...posts];
//         const index = postsClone.indexOf(post);
//         postsClone[index] = { ...post };
//         setPosts(postsClone);
//       };
   

//   const updateAPIData = async (post) => {
//       axios.put(`https://jsonplaceholder.typicode.com/posts/?id=${id}`, {
//           title,
//           body
         
//       }).then(() => {
//         navigate('/read')
//       })
//   }
//   const addPost = async () => {
//       const post = { title:"ihghkjo" , body:"jlk" };
//       await axios.post('https://jsonplaceholder.typicode.com/posts', post);
//       setPosts([post, ...posts]);
//     };
 
//   const handleDelete = async (post) => {
//       await axios.delete('https://jsonplaceholder.typicode.com/posts' + "/" + post.id + post);
//       setPosts(posts.filter((p) => p.id !== post.id));
//     };

  
   



//   // const deletePost=(id)=>{
//   //     axios.delete(`https://jsonplaceholder.typicode.com/posts/?delete=${id}`)
//   //     .then(function(response){
//   //         console.log(response.data);
//   //         getPosts();
//   //     });

//       // fetch('https://jsonplaceholder.typicode.com/posts/?delete=${id}', {
//       // method: 'DELETE',
//       // });

    
//       // if(window.confirm("Are you sure want to delete?")) {
//       //     axios({
//       //         method: 'post',
//       //         url: `https://jsonplaceholder.typicode.com/posts/?delete=${id}` 
//       //     })
//       //     .then(function (response) {
//       //         //handle success
//       //         console.log(response)
//       //         getUsers();
//       //         if(response.status === 200) {
//       //             alert("Website deleted successfully");
//       //         }
//       //     })
//       //     .catch(function (response) {
//       //         //handle error
//       //         console.log(response)
//       //     });
//       // }

//       // }


//   return(
//       <div class="wrap">
//       <h1>Listing Posts</h1>
//       <h5> There are {posts.length} post in the Database </h5>
//       <button onClick={addPost} className="btn btn-primary btn-sm">
//         Add Post
//       </button>
//       <hr></hr>



//       <form className="create-form">

         
              
//                   <label>Title</label>
//                   <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
              
//               <br></br>
//                   <label>Body</label>
//                   <input placeholder='body' value={body} onChange={(e) => setBody(e.target.value)}/>
              
//                   <button type='submit' onClick={handleUpdate}>Update</button>
             
//           </form>







//       <table class="table table-bordered table-striped" >
//               <thead>
//                   <tr>
//                   <th>id</th>
//                   <th>Title</th>
//                   <th>Body</th>
//                   <th>Action</th>
                  
//                   </tr>
//               </thead>
//                <tbody>
//                {posts.map((post,key)=>{
//                   return(
//                       <tr key={key}>
//                         <td>{post.id}</td>
//                         <td>{post.title}</td>
//                         <td>{post.body}</td>

                       
//                         <td>
                          
//                           {/* <Link className='delete btn btn-warning ml-3'   onClick={updateAPIData}>update</Link> */}
//                           {/* <button type='submit' onClick={handleUpdate}>Update</button> */}
//                         </td>
//                         </tr>
//                   );
//                }
                     
                  
//                   )}      
//                </tbody>
                    
                
                                
//           </table>
//       </div>
//   )
// }





