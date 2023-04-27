import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'

// functional component
const Create = () => {
    let navigate = useNavigate();
    // useState hook for input filed
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // loggining user input into the console
    console.log(firstName);
    console.log(lastName);

    // function for sneding data to API
    const sendDataToMockApi = () => {
        axios.post(`https://6447dce27bb84f5a3e4b7b3e.mockapi.io/crud`, {
         //inside here we are sending input data which are firstName lastName. 
          firstName,
          lastName,
        }).then(() => {
          // after sending data to api move to read page
          navigate.push('/read')
        })
    }

  return (
    <div>
      {/* create form for sending data to API */}
       <Form>
            <Form.Field>
                <label>First Name</label>
                <input name="f_name"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input name="l_name"
                onChange={(e) => setLastName(e.target.value)}
                laceholder='Last Name' />
            </Form.Field>
            <Button type='submit' onClick={sendDataToMockApi}>Submit</Button>
      </Form>
    </div>
  )
}

export default Create
