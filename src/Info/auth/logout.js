import React, {useEffect, useState} from 'react'
import axios from 'axios';


const Logout = (props) => {

    const[json,setJson] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/getAll',{
        headers: { 'auth': `${JSON.parse(localStorage.getItem('auth'))}` }
        })
        .then(res => {
          setJson(res.data);
    })
    .catch(err => {
        
    })
    },[])
    return (
        <div>
       <h1>Are you Want to logout?</h1>
       <div className="row">
                    <div className="col-1">
       <button onClick ={() => {
           localStorage.clear();
           props.history.push('/home');
       }} className ="btn btn-primary">Yes</button>
       </div>
                           <div className="col-11">

       <button onClick ={() => {
           
           props.history.push('/home');
       }} className ="btn btn-primary">No</button>
              </div>

       </div>
       </div>

        )
        
}

 export default Logout;