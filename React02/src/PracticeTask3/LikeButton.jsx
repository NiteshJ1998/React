import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);

  function LikehandleClick() {
    setLike(like + 1);
  }
  return (
    <div>
      <p>Like : {like}</p>
      <button onClick={LikehandleClick}> 👍 Like </button>
    </div>
  );
}

export default LikeButton;
