import Webcam from "react-webcam";
import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState({});
  // console.log(videoRef)
  // const [labelBool,setLabel] = useState(false)
  let videoRef = useRef();
  const imgURL = "https://teachablemachine.withgoogle.com/models/f3rdJMbyh/model.json";
  useEffect(() => {
    const ml5 = require("ml5");
    let detectInterval;

    const modelLoaded = () => {
      // videoRef.current.video;
      detectInterval = setInterval(() => {
        detect();
      }, 2000);
    };
    const classifier = ml5.imageClassifier(imgURL, modelLoaded);

    // Start image classification

    const detect = () => {
      classifier.classify(videoRef.current.video, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results[0]);
        console.log(results);
        // console.log(results[0]);
      });
    };

    return () => {
      if (detectInterval) {
        clearInterval(detectInterval);
      }
    };
  },[]);

  return (
    <div>
      <Webcam ref={videoRef} mirrored={true} style={{ display: "block" }} width={500} height={400} audio={false} video={"true"} />
      <button style={{ display: "block" }}>CLASSIFY</button>
      {result.label && <p>{result.label + " " + result.confidence}</p>}
    </div>
  );
}

export default App;
