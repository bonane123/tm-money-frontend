import AutoNext from '../Layout/home/AutoNext';
import Review from '../Layout/home/Review';
import SubHeader from '../Layout/home/SubHeader';
import WhyUs from '../Layout/home/WhyUs';
import Working from '../Layout/home/Working';

function HomePage() {

  return (
    <>
      <SubHeader />
      <WhyUs />
      <AutoNext />
      <Review />
      <Working/>
    </>
  );
}

export default HomePage;
