import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Posts from './components/Posts';

function App() {

  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/page2" element={<Posts />} />
      </Routes>


    </section>
  )
}

export default App
