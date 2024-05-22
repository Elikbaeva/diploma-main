import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <video width="600" controls>
        <source src="7303604-hd_1080_1920_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
