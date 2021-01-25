import react from 'react';
import tresM from '../../assets/3m-logo.png'
import ansell from '../../assets/ansell-logo.png'
import bracol from '../../assets/bracol-logo.png'
import marluvas from '../../assets/marluvas-logo.png'
import './styles.css'

export const Brands = react.memo(() => {

    return (
        <div className="container-brands">
            <h1>MARCAS</h1>
            <div className="container-images">
                <img src={tresM} alt="tresm" />
                <img src={ansell} alt="ansell" />
                <img src={bracol} alt="bracol" style={{backgroundColor: "#fafafa"}}/>
                <img src={marluvas} alt="marluvas" />
            </div>
        </div>
    )
})