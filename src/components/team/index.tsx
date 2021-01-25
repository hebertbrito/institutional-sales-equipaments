import react from 'react'
import './styles.css'

import logo from '../../assets/traffic-cone.png'

export const Team = react.memo(() => {
    return (
        <div className="container-team">
            <h1 className="">EQUIPE</h1>
            <hr />
            <div className="div-team">
                <img src={logo} alt="equipereferencialogo" className="logo-team"/>
                <h2>RM EQUIPAMENTOS</h2>
            </div>
        </div>
    )
})