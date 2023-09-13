
import Banner from '../../Components/Banner/Banner';
import CountSection from '../../Components/CountSection/CountSection';
import EquepmentsSection from '../../Components/EquepmentsSection/EquepmentsSection';
import Expertis from '../../Components/Expertis/Expertis';

import RecentWorks from '../../Components/RecentWorks/RecentWorks';
import ReviewSection from '../../Components/Review/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CountSection></CountSection>
            <div className='my-10'>
                <RecentWorks></RecentWorks>
            </div>


            <div className='mt-[250px]'>
                <EquepmentsSection></EquepmentsSection>
            </div>

            <Expertis></Expertis>
            <ReviewSection></ReviewSection>

            <div className='mt-[300px]'>

            </div>
        </div>
    );
};

export default Home;