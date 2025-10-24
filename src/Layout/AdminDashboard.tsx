import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full flex flex-col'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
