import react from 'react';
import './styles.css'
import doublecheck from '../../assets/double-check.png'

interface cardWorks {
    image: any,
    title: string,
    text: string
}

export const CardWorks = react.memo((props: cardWorks) => {
    const { image, text, title } = props;
    return (
        <div className="container-card-works">
            <div className="sub-container-works">
                <img src={image} alt="deliveryimage" className="image-delivery" />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="div-works-check">
                <img src={doublecheck} alt="deliveryimage" className="image-check" />
            </div>
        </div>
    )
})