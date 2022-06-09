import logo from './logo.svg';
import './App.css';
import Page1 from './component/Page1';
import { Link, Route, Routes } from 'react-router-dom';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Page5 from './component/Page5';
import Page6 from './component/Page6';
import Page7 from './component/Page7';
import Page8 from './component/Page8';
import Page9 from './component/Page9';
import Page10 from './component/Page10';

function App() {
  return (
    <div>
      <div className='page'>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
        <Link to="/page4">Page 4</Link>
        <Link to="/page5">Page 5</Link>
      </div>
      <div className='page'>
        <Link to="/page6">Page 6</Link>
        <Link to="/page7">Page 7</Link>
        <Link to="/page8">Page 8</Link>
        <Link to="/page9">Page 9</Link>
        <Link to="/page10">Page 10</Link>
      </div>
            
      <Routes>
        <Route path='/page1' element={<Page1/>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} />
        <Route path='/page5' element={<Page5/>} />
        <Route path='/page6' element={<Page6/>} />
        <Route path='/page7' element={<Page7/>} />
        <Route path='/page8' element={<Page8/>} />
        <Route path='/page9' element={<Page9/>} />
        <Route path='/page10' element={<Page10/>} />
      </Routes>
    </div>
  )
}

export default App;
