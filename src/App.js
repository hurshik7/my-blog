import './App.css';
import { useState } from 'react';

function App() {

  let [posts, setPosts] = useState([{"title": "Hello world", "likes": 0},
                                    {"title": "My name is Shik", "likes": 0},
                                    {"title": "What's going on stock market now", "likes": 0}]);
  let [modal, setModal] = useState(false);
  let [clickedIndex, setClikedIndex] = useState(-1);
  let [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blogit</h4>
      </div>
      <button onClick={() => {
        let sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortedPosts);
      }}>Order by title</button>

      {
        posts.map((element, i) => {
          return (
            <div className="list">
              <h4 onClick={() => {
                setModal(!modal);
                setClikedIndex(i);
              }}>{posts[i].title}  <span onClick={(e) => {
                e.stopPropagation();
                let postsCopied = [...posts];
                postsCopied[i].likes = postsCopied[i].likes + 1;
                setPosts(postsCopied);
              }}>👍</span> {element.likes}</h4>
              <p>May 11, 2022</p>
              <button onClick={() => {
                let copy = [...posts];
                copy.splice(i, 1);
                setPosts(copy);
              }}>Delete</button>
            </div>
          );
        })
      }

      <input onChange={(e) => {
        setInput(e.target.value);
        //console.log(input);
      }}/>
      <button onClick={() => {
        let postsCopied = [...posts];
        let newPost = {"title": input, "likes": 0};
        postsCopied.unshift(newPost);
        //postsCopied.push(newPost);
        setPosts(postsCopied);
      }}>submit!</button>

      {
        modal ? <Modal posts={posts} setPosts={setPosts} color="skyblue" index={clickedIndex}/> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
        <h4>{props.posts[props.index].title}</h4>
        <p> 👍 {props.posts[props.index].likes}</p>
        <p>Date</p>
        <p>Contents</p>
        <button onClick={() => {
          let postsCopied = [...props.posts];
          postsCopied[props.index].title = "Edited";
          props.setPosts(postsCopied);
        }}>Edit</button>
    </div>
  );
}

export default App;
