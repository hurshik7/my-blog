import './App.css';
import { useState } from 'react';

function Modal() {
  return (
    <div className="modal">
        <h4>Title</h4>
        <p>Date</p>
        <p>Contents</p>
    </div>
  );
}

function App() {

  let [posts, setPosts] = useState([{"title": "Hello World1", "likes": 0},
                                    {"title": "Hello World2", "likes": 0},
                                    {"title": "Hello World3", "likes": 0}]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blogit</h4>
      </div>
      <button onClick={() => {
        let sortedPosts = [...posts].sort((a, b) => {
          return a.title - b.title;
        });
        setPosts(sortedPosts);
      }}>Order by title</button>

      {
        posts.map((element, i) => {
          return (
            <div className="list">
              <h4 onClick={() => {
                setModal(!modal);
              }}>{posts[i].title}  <span onClick={() => {
                let postsCopied = [...posts];
                postsCopied[i].likes = postsCopied[i].likes + 1;
                setPosts(postsCopied);
              }}>👍</span> {element.likes}</h4>
              <p>May 11, 2022</p>
            </div>
          );
        })
      }

      {
        modal ? <Modal /> : null
      }
    </div>
  );
}

export default App;
