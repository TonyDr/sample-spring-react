import React from 'react'
import { Grid }  from 'semantic-ui-react'
import MainMenu from './MainMenu'

const App = () => (
    <Grid columns={2}>
        <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column><h1>Я работаю!!!!</h1></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column><MainMenu/></Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid.Row>
    </Grid>
);

export default App