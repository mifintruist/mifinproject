import React ,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import {Table,tr,td,thead,tbody,th} from 'reactstrap';
import axios from 'axios';

function Transactions() {
    const [data, setData] = useState();
    const[x,setx]=useState()
    useEffect(() => {
        const x=window.localStorage.getItem("userid")
        const fetchData = async () => {
          const result = await axios(
            `https://enrollment-a5de6-default-rtdb.firebaseio.com/users/users/${x}/.json`,
          );
      
          setData(result.data);
         
        };
      
        fetchData();
        setx(x)
      }, []);
      
      
  return (
      <>
      <Navbar/>
    <div className='transactions'>
      <h4>Recent Transactions :</h4>
      <br/>
      <Table
  dark
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        PLAN
      </th>
      <th>
       DATE
      </th>
      <th>
       STATUS
      </th>
    </tr>
  </thead>
  <tbody>
  {!!data&&!!data.transactions ? (
        <>
          {data.transactions.map(pack => (
            <tr>
      <th scope="row">
        {pack.id}
      </th>
      <td>
       {pack.plan}
      </td>
      <td>
       {pack.date}
      </td>
      <td>
       {pack.status}
      </td>
    </tr>
           
          ))}
        </>
      ) : (
        <><p>You have no Transactions yet</p></>
        )}
    
    </tbody>
    </Table>

    </div>
    </>
  )
}

export default Transactions
