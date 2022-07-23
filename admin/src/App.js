import {
  Dashboard,
  Students,
  Blogs,
  Settings,
  Courses,
  Feedbacks,
  Login
} from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/feedbacks' element={<Feedbacks/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
