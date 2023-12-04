import './App.css';
import img from '../src/images/jawan.jfif';
import { AiFillLike } from "react-icons/ai";
import { useState } from 'react';

function App() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const likeClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  return (
    <div className="App">
      <h1>Like-Dislike State</h1>
      <div>
        <h5 className='like-5'>Like button</h5>
        <span className={(isLike ? "like-color" : 'dislike-color')}>
          <AiFillLike className='like-icon' onClick={likeClick} />
        </span>
        <h6>Likes: {like}</h6>
      </div>
      {/* <div>
        <h4>Like Count:</h4>
        <img src={img} alt="" />
      </div> */}
    </div>
  );
}

export default App;
