import react, { useEffect } from 'react';
import './styles.css'
import logo from '../../assets/traffic-cone.png'
import heroimage from '../../assets/hero-image1.jpg'

export const Header = react.memo(() => {


    return (
        <div className="container-header">
            <div className="sub-header-left">
                <img src={logo} alt="logosite" className="image-logo" />
                <h1>RM EQUIPAMENTOS</h1>
            </div>
            <div className="sub-header-right">
                <div className="sub-container-right">
                    <div>
                        <p className="indicator-text-header">INICIO</p>
                    </div>
                    <div className="topic">
                        <p id="indicator-view" className="indicator-text-header">SABER MAIS</p>
                        <div className="sub-topic">
                            <ul>
                                <li>EMPRESA</li>
                                <li>PROJETOS</li>
                                <li>EQUIPE</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="indicator-text-header">CONTATO</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export const HeroHeader = react.memo(() => {
    return (
        <div className="container-hero-image">
            <img src={heroimage} alt="heroimage" className="image-header" />
            <h1 className="text-hero-header">O UNIVERSO DE SOLUÇÕES PARA EQUIPAMENTOS DE SEGURANÇA</h1>
        </div>
    )
})