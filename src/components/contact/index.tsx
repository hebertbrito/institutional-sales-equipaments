import react from 'react'
import './styles.css'


export const Contact = react.memo(() => {
    return (
        <div className="container-contact">
            <h1>CONTATO</h1>
            <hr />
            <div className="sub-container-contact">
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Rua Paulo Mazetto, 344, 13142-150 - Bom Retiro/Paulínia - SP</p>
                    <p>Email: hebertfelipe.97@outlook.com.br</p>
                    <p>Telefone: +5519971364515</p>
                </div>
                <div>
                    <h3>HORÁRIO DE FUNCIONAMENTO</h3>
                    <p>Aberto de Segunda-feira a Sexta-feira das 8h00 as 18h00</p>
                    <p>e Sabado das 09h00 as 12h00</p>
                </div>
            </div>
        </div>
    )
})