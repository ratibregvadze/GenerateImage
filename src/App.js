import './App.css';
import {Configuration, OpenAIApi} from 'openai';
import {useState} from "react";

const OPEN_AI_KEY= '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'

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("https://oaidalleapiprodscus.blob.core.windows.net/private/org-4F9CB6ZMw8anEk2lLRTWytOH/user-aRUi9IYO1E0pU1nbCBgARV5G/img-Pw7U3FLokZmqr1NaXIRLBkrH.png?st=2023-01-22T14%3A13%3A14Z&se=2023-01-22T16%3A13%3A14Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-22T12%3A36%3A58Z&ske=2023-01-23T12%3A36%3A58Z&sks=b&skv=2021-08-06&sig=GDJqFSuGfwNQgM6ejlZsZE4GIisHtrYZVEMfhPoyHdg%3D");
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
