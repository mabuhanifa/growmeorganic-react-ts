import { Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Home from './pages/Home';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/page2" element={<Posts />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
