import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
    </Routes>
  );
}

export default App;
