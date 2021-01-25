import react from 'react';
import { Header } from '../components'
export const Main = react.memo(() => {
    return (
        <div>
            <Header />
        </div>
    )
})