import { useState } from 'react';
import { useFetch, usefetchInterval, usePostTitle } from '../helper/useFetch';

const FetchHook = () => {
//   easy implementation of fetch hook where our hook fetches the same data from same url all the times
  const postTitle = usePostTitle();

//   in this hook we are providing our custom url and also changing it using postId state.
//   the hook returns the complete fetch data and a loading state variable
  const [postId, setPostId] = useState(1);
  const {fetchData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + postId);

//  fetching new post data in interval time given by us
  const {fetchPost, Loading} = usefetchInterval("https://jsonplaceholder.typicode.com/posts/", 5000);

  return (
    <div>
      {postTitle}
      <br /><br />


      <button onClick={()=> setPostId(1)}>post 1</button>
      <button onClick={()=> setPostId(2)}>post 2</button>
      <button onClick={()=> setPostId(3)}>post 3</button>
      { loading ? "LOADING..." : JSON.stringify(fetchData)}
      <br /><br />


      {Loading ? "Loading ..." : JSON.stringify(fetchPost)}

    </div>
  )
}

export default FetchHook;

