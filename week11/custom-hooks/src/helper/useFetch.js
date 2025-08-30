import { useEffect, useState } from "react";


export function usePostTitle(){
  const [post , setPost] = useState({});

  async function getPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();
    console.log(json);
    setPost(json);
  }
  
  useEffect(()=>{
    getPosts();
  }, [])

  return post.title;
}

export function useFetch(url){
    const [fetchData, setFetchData] = useState({});
    const [loading, setLoading] = useState(true);
    
    async function getPost(){
        const res = await fetch(url);
        const json = await res.json();
        setLoading(false)
        setFetchData(json);
    }

    useEffect(()=>{
        getPost();
    }, [url])

    return {fetchData: fetchData, loading: loading};
}


// it will not work
// why? because when we.

// closure property: In React, every render is like a snapshot:
// When your component renders, it creates functions (getData, increasePostId, interval callback, etc.).
// These functions “capture” the values of variables (postId, fetchPost, etc.) from that render only.
// Later, when the function runs, it doesn’t magically “know” the new state — it still sees the values it had when that render happened.
// This is called a stale closure problem.

export function usefetchInterval(url, time){
  const [fetchPost, setFetchPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [postId, setPostId] = useState(1);
  
  async function getData(){
    setLoading(true);
    const res = await fetch(url+ postId);
    const json = await res.json();
    setFetchPost(json);
    setLoading(false);
  }

  function increasePostId(){
    setPostId(id => id+1);
    console.log(postId);
  }

  useEffect(()=>{
    const iid = setInterval(()=>{
      increasePostId();
      getData();
    }, time);

    return () => {
      clearInterval(iid);
    }
  // }, [])
  }, [fetchPost])
  return {fetchPost: fetchPost, Loading: loading};
}

// add fetchPost as dependency of the ueEffect
// thus when the data is fetch the useEffect
// runs again and the new postId is used in the url