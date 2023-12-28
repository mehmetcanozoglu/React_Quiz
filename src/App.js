import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import İntorduce from './pages/intorduce/İntorduce'
import Quiz from './pages/quiz/Quiz'

function App() {
  return (
    <div className="">
    <Router>
      <Routes>
        <Route path='/' element={<İntorduce/>}/>
        <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
