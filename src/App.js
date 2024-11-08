import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';

function App() {

  let x = 5;

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          {/*Different clickable routes*/}
          <Route path = "/home" element = {<Content />} />
          <Route path = "/read" element = {<Read />} />
          <Route path = "/create" element = {<Create />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
