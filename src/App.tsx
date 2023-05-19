import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Second from './pages/Second';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <section className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/second" element={<Second />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
