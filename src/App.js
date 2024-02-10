
import './app.scss';
import Tasklist from './components/pages/tasklist/Tasklist';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Tasklist />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
