import React, { useRef, useEffect } from 'react';
import './App.css';

async function playVideoFromCamera(videoElement) {
  try {
    const constraints = { 'video': true, 'audio': false };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    // const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
    videoElement.srcObject = stream;
  } catch (error) {
    console.error('Error opening video camera.', error);
  }
}

function App() {
  const video = useRef()
  useEffect(() => {
    playVideoFromCamera(video.current);
  }, [])
  return (
    <div className="App">
      <video ref={video} autoPlay playsInline controls={false} />
    </div>
  );
}

export default App;
