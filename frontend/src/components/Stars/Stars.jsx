import './Stars.css';
import starFilled from '../../assets/star-filled.png';
import starEmpty from '../../assets/star-empty.png';

const Stars = ({ rating }) => {
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;

    return (
        <div className='stars'>
            {[...Array(filledStars)].map((_, index) => (
                <img key={index} src={starFilled} alt="Star filled" className='star-icon' />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <img key={index} src={starEmpty} alt="Star empty" className='star-icon' />
            ))}
        </div>
    )
}

export default Stars;