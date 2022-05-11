import './App.css';
import { useState } from 'react';

function App() {

  let [titles, setTitles] = useState(["Hello World1", "HelloWorld2", "HelloWorld3"]);
  let [likeCount, setLikeCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blogit</h4>
      </div>
      <div className="list">
        <h4>{titles[0]}  <span onClick={() => {setLikeCount(likeCount + 1)}}>👍</span> {likeCount}</h4>
        <p>May 11, 2022</p>
      </div>
      <div className="list">
        <h4>{titles[1]}</h4>
        <p>May 12, 2022</p>
      </div>
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>May 13, 2022</p>
      </div>
    </div>
  );
}

export default App;
