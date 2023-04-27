import { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  // useState hook to map the data coming from API which is now store all data into APIData
  const[APIData, setApiDAta] = useState([]);
 
  // fetching data from api using useEffect hook whick loads our data
  useEffect(() => {
    axios.get(`https://6447dce27bb84f5a3e4b7b3e.mockapi.io/crud`)
    .then((getData) => {
      // data is coming from the API
      setApiDAta(getData.data);
    });
  }, [])

  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
  }

 
  const getData = (id) => {
    axios.get(`https://6447dce27bb84f5a3e4b7b3e.mockapi.io/crud`)
    .then((getData) => {
      setApiDAta(getData.data);
    });
  }

   // delete operation
   const onDelete = (id) => {
    axios.delete(`https://6447dce27bb84f5a3e4b7b3e.mockapi.io/crud/${id}`)
    .then(() => {
      // get data after deletion
      getData();
    });
   }

  return (
    <div>
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S/N</Table.HeaderCell>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* mapping our API data from APIData useState into the table row */}
        {APIData.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                 <Button color='green' onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                  <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          )
        })}
        
      </Table.Body>
  </Table>
    </div> 
  )
}

export default Read
