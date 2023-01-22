import './App.css';
import {Configuration, OpenAIApi} from 'openai';
import {useState} from "react";

const OPEN_AI_KEY= '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'

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration  = new Configuration({
    apiKey: OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    setResult(res.data.data[0].url);
    console.log(result)
  }
  return (
    <div className="app">
      <div className="generate-container">
        <h3>Generate Image </h3>
        <input
            className="generate-input"
            placeholder="Type something to Generate an Image"
            onChange={(e) => setPrompt(e.target.value)}/>
        <button
            className="generate-button"
            onClick={generateImage}>Generate an Image
        </button>
        <div className="image-container">
          {result.length > 0 ? (
              <img className="result-image" src={result} alt="result"/>
          ) : (
              <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
