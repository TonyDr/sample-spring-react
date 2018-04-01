import React from 'react'
import {Container, Divider} from 'semantic-ui-react'
import MainMenu from './MainMenu'
import MainHeader from "./MainHeader";
import './MainLayout.css'

const MainLayout = (props) => (
    <div className='page-container'>
        <div className='page-menu'><MainMenu/></div>
        <div className='page-header'><MainHeader/></div>
        <Divider/>
        <div className='page-content'>
            <Container color='green'>{props.layoutContent}</Container>
        </div>
    </div>
);

export default MainLayout