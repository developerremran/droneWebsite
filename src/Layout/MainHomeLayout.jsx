
import Header from '../ShearSection/Header/Header';
import { Outlet } from 'react-router-dom';
const MainHomeLayout = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 z-50 w-full '>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainHomeLayout;