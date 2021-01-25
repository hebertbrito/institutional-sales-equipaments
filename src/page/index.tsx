import react from 'react';
import { Header, HeroHeader, Brands, Works, Enterprise } from '../components'
export const Main = react.memo(() => {
    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
            <Header />
            <HeroHeader />
            <Brands />
            <Works />
            <Enterprise />
        </div>
    )
})