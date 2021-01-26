import react from 'react';
import './styles.css'

export const Enterprise = react.memo(() => {

    return (
        <div className="container-enterprise">
            <div />
            <div className="div-enterprise">
                <h1>Empresa</h1>
                <div className="div-content-enterprise">
                    <p style={{fontWeight: "bold"}}>Somos uma empresa especializada no comércio e pequenas montagem.  </p>
                    <p>Em atividade desde 1993, somos liderados por Meire Matos, empresária Nordestina com mais de 30 anos de experiência profissional neste setor.  </p>
                    <p>Temos no nosso comércio diversas marcas de referência, oferecendo uma vasta gama de equipamentos de segurança e proteção.  </p>
                    <p>Nossa missão é satisfazer as necessidades dos nossos clientes numa longa parceria.  </p>
                    <p>Comercializamos produtos para todos os tipos de locais, desde banheiros e cozinhas á comercios e empresa de construções.  </p>
                </div>
            </div>
        </div>
    )
})