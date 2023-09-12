
import { FaBars } from 'react-icons/fa';
const Header = () => {
    return (
        <div>
            <div className='flex justify-between maxWidth h-[80px] items-center'>
                <div className='text-white'>
                    <h2 className='text-5xl italic'>Logo</h2>
                </div>
                <div className='md:block hidden'>
                    <ul className='flex gap-10 text-xl font-semibold text-white'>
                        <li>Home</li>
                        <li>Our Works</li>
                        <li>Our Gears</li>
                        <li>Reviews</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div className='bg-blue-400 p-4 text-white'>
                        <FaBars ></FaBars>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;