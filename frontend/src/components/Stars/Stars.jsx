import './Stars.css';
import starFilled from '../../assets/star-filled.png';
import starEmpty from '../../assets/star-empty.png';

const Stars = ({ rating }) => {
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;

    console.log(filledStars, emptyStars)
    return (
        <div className='stars'>
            {[...Array(totalStars)].map((_, index) => (
                <img key={`${index}`} src={index < rating ? starFilled : starEmpty} alt="Star filled" className='star-icon' />
            ))}
        </div>
    )
}

export default Stars;