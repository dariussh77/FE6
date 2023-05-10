import { useContext } from "react"; 
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
const AllPosts = () => {
    const {posts}=useContext(PostsContext);
    return ( 
    <StyledMain>
      <h1>All Posts</h1>
      <div>
        {
          posts.map(post => 
            <Post 
              key={post.id}
              data={post}
            />  
          )
        }
      </div>
    </StyledMain>
     );
}
 
export default AllPosts;