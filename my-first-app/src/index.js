//needs to be imported, like a 'require('')' in node
import React from 'react';
//compy we want to render and where to render it.
import ReactDOM from 'react-dom';
//import for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// import { Container } from 'react-bootstrap';
import { render } from '@testing-library/react';

//import container/app
import App from './App';


//this is the class method!!!!!!!!!!!!!!!
//to hold this stuff in a component
// class Welcome extends React.Component {
//     //to render 
//     render() {
//         const recipient = "World";
//         //to return this
//         return (
//             <Container className="my-5">
//             <h1>Hello, { recipient }</h1>
//             <hr/>
//             </Container>
//         );
//     }
// }

//this is function method===============!!Better
//much cleaner and faster
// const Welcome = () => {
//     const recipient = "World";
//     return (
//         <Container className="my-5">
//         <h1>Hello, { recipient }</h1>
//         <hr/>
//         </Container>
//     )
// };

//to render the screen
//element we want to render, and then where to render it to.
//queryselector id of html element
ReactDOM.render(<App/>, document.querySelector('#root'));


//npm run build - to create the build folder in dir
//npm