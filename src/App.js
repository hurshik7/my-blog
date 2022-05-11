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

  let [titles, setTitles] = useState(["Hello World1", "ABCDE", "HelloWorld3"]);
  let [likeCount, setLikeCount] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blogit</h4>
      </div>
      <button onClick={() => {
        let titlesOrderedBy = [...titles].sort();
        setTitles(titlesOrderedBy);
      }}>Order by title</button>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
        }}>{titles[0]}  <span onClick={() => {setLikeCount(likeCount + 1)}}>👍</span> {likeCount}</h4>
        <p>May 11, 2022</p>
        <button onClick={() => {
          let titleCopied = [...titles];
          titleCopied[0] = "Hello React!";
          setTitles(titleCopied);
          }}>Change the title to "Hello React"</button>
      </div>
      <div className="list">
        <h4>{titles[1]}</h4>
        <p>May 12, 2022</p>
      </div>
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>May 13, 2022</p>
      </div>

      {
        modal ? <Modal /> : null
      }
    </div>
  );
}

export default App;
