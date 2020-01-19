const React = require('react');
const ReactDOM = require('react-dom');

function App() {
  return (
    <div>
	  <span>Hello React comming !!</span>
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);