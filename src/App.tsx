import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
   <>
   <Router>
     <div className='App'>
      <div>
        <h3 className='header'>React Crud MockAPI</h3>
      </div>
      <Routes>
      <Route path='/create' element={ <Create />} />
      <Route path='/read' element={<Read/>} />
      <Route path='/update' element={<Update />} />
      <Route path='/delete' element={<Delete />}/>
      
      </Routes>
    </div>
   </Router>
   </>
  )
}

export default App
