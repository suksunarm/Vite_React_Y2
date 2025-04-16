import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
    return (
        
            <div>
                <div className='sticky top-14 grid grid-rows-[45%_40%_15%] h-[85vh]'>
                    <Header />
                    <Navbar />
                    <Contact />
                </div>
            </div> 
        
    )
}

export default LeftSection;