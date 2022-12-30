import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import EditPost from './components/Edit';
import ListPost from './components/ListPost';
//import CreatePost from './components/Create';
import { lazy,Suspense } from 'react';
const CreatePost=lazy(()=>import('./components/Create'));

function App() {
  return (
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
     <BrowserRouter>
      <nav>
        <ul className='ul'>
          <li className='li'>
            <Link to="/" className=" btn btn-primary btn-xs">List Posts</Link>
          </li>
          <li className='li'>
          <Link to="/create" className=" btn btn-primary btn-xs">Create Post</Link>
          </li>
          <li>
          <Link className="btn btn-warning mr-3" to="/edit/:id">update</Link>
          </li>
        </ul>
      </nav>
     
      <Routes>
        <Route index element={<ListPost />}></Route>
        <Route className='btn btn-primary' path="/create" element={<CreatePost />}></Route>
        <Route path="/edit/:id" element={<EditPost />}></Route>
      </Routes>
     </BrowserRouter>
     </Suspense>
    </div>
  );
}

export default App;


// import './App.css';
// import PostList from './API/PostList';

// function App(){
//   return(
//     <div className="App">
//       <PostList></PostList>
//     </div>
//   )
// }

// export default App;