import react from 'react';
import { CardWorks } from './cardworks'
import './styles.css'

import delivery from '../../assets/delivery.jpg'
import qualidade from '../../assets/qualidade1.jpg'


export const Works = react.memo(() => {

    const itens = [
        {
            image: delivery,
            title: "Entrega",
            text: "Entregamos produtos com rapidez e segurança para qualquer lugar do Brasil, respeitando os limites de entrega pré estabelecidos na hora da compra."
        },
        {
            image: qualidade,
            title: "Qualidade",
            text: "Buscamos sempre os melhores produtos e fornecedores, para que o cheguem até você com altissima qualidade e resistência."
        }
    ]

    return (
        <div className="container-works">
            <h1>SERVIÇOS</h1>
            <hr />
            <div className="div-works">
            {itens.map((item, index) => {
                return(
                    <CardWorks image={item.image} title={item.title} text={item.text} key={index}/>
                )
            })}
            </div>
        </div>
    )
})