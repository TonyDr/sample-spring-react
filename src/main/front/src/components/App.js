import React from 'react'
import {Container}  from 'semantic-ui-react'
import MainLayout from './MainLayout'

const App = () => {
    return (
        <MainLayout layoutContent={<Container>Welcome!</Container>}/>
    )
};

export default App
