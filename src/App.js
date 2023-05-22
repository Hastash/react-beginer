import logo from './logo.svg';
import './App.css';
import Nav from './views/nav/Nav.js';
// template + logic
// const App = () => {}
// JSX
// Babel
function App() {
  let name ="Nathan";
  let year = "2021";
  let obj ={name: 'Nathan', year:'2023'};
  let link = 'https://www.youtube.com/channel/UCaJPscRKdj5tCpJsWjKJlUA'
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name} in {year}!</h1>
        it is detail of Obj: {obj.name} in {obj.year}
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target='_blank'>Visit my channel</a>
      </header>
    </div>
  );
}

export default App;
