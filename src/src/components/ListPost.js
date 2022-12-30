import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from 'react-router-dom';
import MaterialTable from "material-table";
import { useTable } from 'react-table'

export default function ListPost(){
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

  
    // var columns = [
    //     {title: "id", field: "id", hidden: true},
    //     {title: "Title", field: "title"},
    //     {title: "Body", field: "body"}
    //   ]

    //   const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //   } = useTable({
    //     columns,
    //     data: tutorials,
    //   });
  

  
   
   
    const handleDelete = async (post) => {
        await axios.delete('https://jsonplaceholder.typicode.com/posts' + "/" + post.id + post);
        setPosts(posts.filter((p) => p.id !== post.id));
        if(window.confirm("Are you sure want to delete?")) {
                axios({
                    method: 'post',
                    url: `https://jsonplaceholder.typicode.com/posts` + "/" + post.id
                })
                .then(function (response) {
                    //handle success
                    console.log(response)
                    getPosts();
                    if(response.status === 200) {
                        alert("Website deleted successfully");
                    }
                })
                .catch(function (response) {
                    //handle error
                    console.log(response)
                });
            }
      };

    
     



    const deletePost=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/?delete=${id}`)
        .then(function(response){
            console.log(response.data);
            getPosts();
        });

        fetch('https://jsonplaceholder.typicode.com/posts/?delete=${id}', {
        method: 'DELETE',
        });

      
        if(window.confirm("Are you sure want to delete?")) {
            axios({
                method: 'post',
                url: `https://jsonplaceholder.typicode.com/posts/?delete=${id}` 
            })
            .then(function (response) {
                //handle success
                console.log(response)
                getPosts();
                if(response.status === 200) {
                    alert("Website deleted successfully");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        }

        }


    return(
        <div class="wrap">
        <h1>Listing Posts</h1>
        <h5> There are {posts.length} post in the Database </h5>
        <br></br>

        <hr></hr>


        {/* <MaterialTable
              title="User data from remote source"
              columns={columns}
              data={posts}
              
              editable={{
               
                onRowDelete: (post) =>
                  {
                    handleDelete(post)
                  },
              }}
            /> */}








        <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                    
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
                            
                            <Link className='delete btn btn-danger ml-3'   onClick={() => handleDelete(post)}>Delete</Link>
                          </td>
                          </tr>
                    );
                 }
                       
                    
                    )}      
                 </tbody>
                      
                  
                                  
            </table>
        </div>
    )
}





