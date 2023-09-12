 
import Banner from '../../Components/Banner/Banner';
import CountSection from '../../Components/CountSection/CountSection';
import Expertis from '../../Components/Expertis/Expertis';
import RecentWorks from '../../Components/RecentWorks/RecentWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CountSection></CountSection>
            <RecentWorks></RecentWorks>
            <Expertis></Expertis>

            <div className='mt-[300px]'>

            </div>
        </div>
    );
};

export default Home;