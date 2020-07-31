//import react always!
import React, {useState} from 'react';

// import { Container } from 'react-bootstrap';

import Welcome from './components/Welcome'
//import { Form, Jumbotron } from 'react-bootstrap';

//importing jumbo
import {Jumbotron} from 'react-bootstrap';
//import { useState } from 'react';

//returning the welcome component
const App = () => {
    const [appName, setAppName] = useState('Default Boring Name');
   return(                  //can pass props and functions and methods also...
    <>
        <Jumbotron className="my-5">
        <h1>{appName}</h1>
        </Jumbotron>
        <Welcome name="Chris" greeting={
            () => {
            return `Welcom to Canada!`;
        }
        } setAppName={setAppName}/>
    </>
   );
};

//creating a component
// const Welcome = () => {
//     const recipient = "World";
//     return (
//         <Container className="my-5">
//         <h1>Hello, { recipient }</h1>
//         <hr/>
//         </Container>
//     )
// };

//to export the component
export default App;