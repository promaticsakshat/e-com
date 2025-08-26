import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfileLayout = () => (
    <>
        {/* No Navbar or Footer here */}
        <div className='max-w-7xl mx-auto  min-h-[100vh] bg-[#f4f6f6] border'>
            <Navbar />

            <Outlet />
        </div>
    </>
);
export default ProfileLayout;