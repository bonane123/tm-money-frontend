
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

const Error = () => {
  return <>
  <Navbar/>
  <div className="flex flex-col justify-center items-center py-20" >
    <h2 className="text-4xl py-10" >An error occured!</h2>
    <p className="text-xl" >Could not find this page!</p>
  </div>
  <Footer/>
  </>;
};

export default Error;
