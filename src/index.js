import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Architecture Knowledge Graph</h1>
      <h2>Product Line Views</h2>
      <select>
        <option value="Customer Master Data Management">
          Customer Master Data Management
        </option>
        <option value="Digital Experience">Digital Experience</option>
      </select>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
