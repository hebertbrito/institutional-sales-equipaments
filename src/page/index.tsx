import react from 'react';
import { Header, HeroHeader, Brands, Works, Enterprise, Team, Contact } from '../components'
export const Main = react.memo(() => {
    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
            <Header />
            <HeroHeader />
            <Brands />
            <Works />
            <Enterprise />
            <Team />
            <Contact />
        </div>
    )
})