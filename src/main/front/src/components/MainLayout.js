import React from 'react'
import { Grid }  from 'semantic-ui-react'
import MainMenu from './MainMenu'

const MainLayout = (props) => (
    <Grid columns={2} stretched>
        <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={13}><h1>Я работаю!!!!</h1></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={3}><MainMenu/></Grid.Column>
            <Grid.Column width={13}>
                {props.layoutContent}
            </Grid.Column >
        </Grid.Row>
    </Grid>
);

export default MainLayout