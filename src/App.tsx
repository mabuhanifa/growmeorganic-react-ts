import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Posts from './components/Posts';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/page2" element={<Posts />} />
        </Route>
      </Routes>


    </section>
  )
}

export default App
