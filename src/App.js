import './App.css';
import img from '../src/images/jawan.jfif';
import { AiFillLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';

function App() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [love, setLove] = useState(false);
  const [count, setCount] = useState(0);

  const likeClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  const handleLikes = () => {
    if (!love) {
      setLove(true);
      setCount(count + 1);
    } else {
      setLove(false);
      setCount(count - 1);
    }
  };

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
      <div>
        <h4>Like Count: {count}</h4>
        <div>
          <img src={img} alt="" />
          {
            love ? <p className='icon-p'><FaHeart className='icon' onClick={handleLikes} /></p>
              : <p className='icon-p'><CiHeart className='icon' onClick={handleLikes} /></p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
