import React from 'react';


 function GetStar (boolean) {
  if(boolean.boolean) {
    return (
      <div className="text-center" >
      	<img className="btnStar" src="http://pngimg.com/uploads/star/star_PNG41518.png" alt="img-select" />
      </div>
    )
  }

    else{
    return (
      <div className="text-center" >
        <img className="btnStar" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Silver_star.png" alt="img-not-select" />
      </div>
    )
  }
}

export default GetStar