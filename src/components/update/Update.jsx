import { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Update = () => {
  let navigate = useNavigate
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    // console.log(firstName);
    // console.log(lastName);

    // function to update data in the API
    const sendDataToMockApi = () => {
        axios.put(`https://6447dce27bb84f5a3e4b7b3e.mockapi.io/crud/${ID}`, {
            firstName,
            lastName,
        }).then(() => {
          navigate("../read")
        })
    }

    // getting items in a local storage and use it on the useState
    useEffect(() => {
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
      setID(localStorage.getItem('ID'));
    }, [])

  return (
    <div>
       <Form>
            <Form.Field>
                <label>First Name</label>
                <input value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last Name' />
            </Form.Field>
            <Button type='submit' onClick={sendDataToMockApi}>Update</Button>
  </Form>
    </div>
  )
}

export default Update
