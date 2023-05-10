import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as generatedID} from 'uuid';
import UserContext from '../../contexts/UserContext';
import PostsContext from '../../contexts/PostsContext';
const NewPost = () => {
    const navigate = useNavigate();
    const {currentUser}=useContext(UserContext);
    const {setPosts,PostsActionTypes}=useContext(PostsContext);
    const {formInputs, setFormInputs}=useState({
        title:''
    });
    const inputHandler=e=>{
        setFormInputs({
            ...formInputs,
            [e.target.name]:e.target.value
        });
    };
    const formHandler =e=>{
        e.preventDefault();
        const newPost={
            id:generatedID(),
            userId: currentUser.id,
            title: formInputs.title
        };
        setPosts({
            type:PostsActionTypes.add,
            data:newPost
        });
        navigate(-1);
    }
    return ( 
        <main>
            <h1>
                Add New Post
            </h1>
            <form>
                <div>
                    <label htmlFor="title">title</label>
                    <input 
                        type="text"
                        name="title" id="title"
                        value={formInputs.title}
                        onChange={(e)=>{inputHandler(e)}}
                    />
                </div>
                <input type="submit" value ="Create Post" />
            </form>
        </main>
     );
}
 
export default NewPost;