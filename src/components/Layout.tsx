import { Outlet } from 'react-router-dom';
import Header from './Header';
import './header.css';

function Layout() {
  return (
    <div id="headerDiv">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
