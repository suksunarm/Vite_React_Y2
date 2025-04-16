import About from "../About";
import Experience from "../Experience";

const RightSection = () => {
    return (
    <div className="grid gap-40"> 
        <About />
        <Experience />

        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
      </div>
    )
}

export default RightSection;