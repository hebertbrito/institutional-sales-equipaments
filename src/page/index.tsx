import react from 'react';
import { Header, HeroHeader } from '../components'
export const Main = react.memo(() => {
    return (
        <div>
            <Header />
            <HeroHeader />
        </div>
    )
})