import './App.css';
import { Route,Routes, Navigate } from 'react-router-dom';
import AllPosts from './components/Pages/AllPosts';
import Header from './components/UI/Header';
import Login from './components/Pages/Login';
import UserPage from './components/Pages/UserPage';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';
import NewPost from './components/Pages/NewPost';
import ManageUsersPage from './components/Pages/ManageUsersPage';


const App=()=>{
  const {currentUser}=useContext(UserContext);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/posts' element={<AllPosts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userPage' element={
          currentUser?
          <UserPage/>:
          <Navigate to='/login'/>
        }/>
        <Route path='/posts/newPost' element={
          currentUser?
            <NewPost/>:
            <Navigate to='/login'/>
        }/>
        <Route path="/manageUsers" element={
          currentUser?.role === "admin" ?
          <ManageUsersPage /> :
          <Navigate to="/posts" />
        } />
      </Routes>
    </>
  );
}

export default App;
