import logo from './logo.svg';
import './App.scss';
import Timekeeping from './Timekeeping/timekeeping';
import ListToDo from './todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * 2 components: class component / function component (function, arrow)
 * JSX return block
 * fragment <></>
 */
import Nav from './Nav/nav';
import Home from './Timekeeping/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
//const App = () => {
  return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />}/>
              <Route path="todo" element={<ListToDo  />} />
              <Route
                path="about"
                element={<Timekeeping />}
              />
           
          </Routes>
        </header>

        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      </div>
    </Router>
  );
}
export default App;
