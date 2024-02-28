import React,{useState} from 'react';

export default function ComponentB({tableData}){
const [tablestate,setTableState]=useState('')
    
     console.log('tableData',tableData);
   

    const handleClick =(e)=>{
        setTableState(e.target.value)


    }
    return (
        <div>
            <h2>Table data</h2>
     <table style={{border:'2px'}}>
     <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
        </tr>
        </thead>
        <tbody>
       
        {(tableData).map((value,index)=>{
return (
        
        <tr key={index}>
            <td>{index+1}</td>
            <td>{value.Name}</td>
            <td>{value.Age}</td>
            <td>{value.Education}</td>
            <td><button onClick={handleClick}>Edit</button></td>
            <td><button>Delete</button></td>
       
        </tr>
)})}
</tbody>

     </table>
     </div>
    )
}