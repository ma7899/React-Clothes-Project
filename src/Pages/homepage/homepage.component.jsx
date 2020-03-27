import React from 'react';
import './homepage.styles.scss'
import Directory from '../../Components/directory/directory.component.jsx';


const HomePage = ({ history }) => (
    <div className= 'homepage'>
        <Directory/>
    </div>
);


export default HomePage; 