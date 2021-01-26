import react from 'react'
import './styles.css'


export const Footer = react.memo(() => {
    return (
        <div className="container-footer">
            <p style={{marginRight: "0.5%"}}>RM EQUIPAMENTOS © 2021</p>
            <p className="politc-footer">Politica de Privacidade</p>
        </div>
    )
})