import {Dashboard, Students, Blogs} from './pages'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </Router>
  )
}

export default App;
