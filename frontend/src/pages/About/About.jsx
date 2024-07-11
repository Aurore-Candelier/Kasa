import './About.css';
import img from '../../assets/image-about.png';
import { Collapse } from '../../components/Collapse/Collapse';

const About = () => {
    return (
        <>
            <img src={img} alt='Image montagne' className='image-about' />
            <div>
                <Collapse />
                <Collapse />
                <Collapse />
                <Collapse />
            </div>
        </>
    );
}

export default About;
