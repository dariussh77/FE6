import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import PostsContext from "../../contexts/PostsContext";
import Post from "../UI/Molucles/Post";
import styled from 'styled-components';
const StyledMain = styled.main`
  padding: 0 50px;
  > h1{
    text-align: center;
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const UserPage = () => {
    const {posts}=useContext(PostsContext);
    const {currentUser}=useContext(UserContext)
    return ( 
        <StyledMain>
            <h1>{currentUser.userName}</h1>
            <div>
                {
                   posts.map(post=>{
                    post.userId===currentUser.id&&
                        <Post
                            key={post.id}
                            data={post}
                        />
                   }) 
                }
            </div>
        </StyledMain>
     );
}
 
export default UserPage;