//importing react and also state...
import React, {useState} from 'react';
//add container and form for the added react bootstrap
import { Container, Form } from 'react-bootstrap';


//'prop' allows us to add properties to it. 
const Welcome = props => {
//or we can use the prop names from app.jsx
//const Welcome = ({name, greeting()}) => {
    //props shows the name'chris' because of the properties added in app.jsx
    console.log(props);
    //to pass props
    //const recipient = props.name;

    //to change state
    const [recipient, setRecipient] = useState(props.name);

    return (
        <Container className="my-5">
        <h2>Hello, { recipient }</h2>
        <hr/>
        <p>{props.greeting()}</p>

        {/* creats a for for input of the name. */}
        <Form.Group>
            <Form.Label>Recipient</Form.Label>
            <Form.Control onInput={
                //e = event, eg click, type etc
                //e is the event, target is what it happened on, value is the value
                //so it should change the label all at the same time.
                (e) => setRecipient(e.target.value)
                }/>
        </Form.Group>
        
        <Form.Group>
            <Form.Label>App Name</Form.Label>
            <Form.Control onInput={
                //e = event, eg click, type etc
                //e is the event, target is what it happened on, value is the value
                //so it should change the label all at the same time.
                (e) => props.setAppName(e.target.value)
                }/>
        </Form.Group>
        
        </Container>
    )
};

export default Welcome;