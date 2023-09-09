import { useEffect, useState } from "react"

export default function Api() {
 
const [posts,setPosts] = useState([])

useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(posts =>setPosts(posts))

},[])


    return (
       
        <div>
        {
        posts.map((post) => (
          <div>
                <h3>id: {post.id}</h3>
            <p>title: {post.title}</p>
          </div>
        ))
        }

</div>
    )

}
 
    
