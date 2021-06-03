import logo from './logo.svg';
import './App.css';

function App() {

  const fuck = () => {

    fetch(`${window.origin}:5000/api/teste`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      },


    }).then(function (response) {
      return response.json();

    }).then(function (text) {
      console.log(text);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>






        <button onClick={fuck}>FUCKKKKKKKKKKKKKKKK</button>
        <div id="valor"></div>


        <script>

        </script>




      </header>
    </div>
  );
}

export default App;
