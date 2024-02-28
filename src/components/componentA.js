import React from 'react'
import { useState ,useEffect} from 'react';
import ComponentB from './componentB';
import './componentA.css';

export default function Member(){
    const [memberData, setMemberData] = useState({
        Name: '',
        Age: '',
        Education:''
      });

      const [tableData,setTabledata]=useState([]);
      
      
      const handleChange=(event)=>{
        const{name,value}=event.target;
        setMemberData({...memberData, [name]:value})
        //setMemberData({...memberData,[event.target.name]: event.target.value})
            };
            
      const handleSubmit = (event) => {
       event.preventDefault();
       const checkEmptyInput = !Object.values(memberData).every(res=>res==="")
       if(checkEmptyInput)
       {
        const newData = (data)=>([...data, memberData])
        setTabledata(newData);
        const emptyInput= {Name:'', Age:'',Education:''}
        setMemberData(emptyInput)
       }
   }  

//    useEffect(() => {
//     localStorage && localStorage.setMemberData("formData", JSON.stringify(memberData))
//   }, [memberData]);

useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(memberData));
  }, [memberData]);
   console.log("data3",tableData)
return (
<div>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>Form</h1>
        </div>
        <div>
           <div className='formElement'>
                   <label>
                        Fullname
                        </label>
                      
                   
                        <input type='text' name="Name"
                        placeholder="Enter Fullname" value={memberData.Name}
                        onChange={handleChange}
                        Required/>
                      
                      <label>
                        Age
                        </label>
                       
                      <input type='text'  name="Age"
                         placeholder="Member Age" value={memberData.Age}
                         onChange={handleChange}/>
                       
                       <label>
                        Education
                        </label>
                   
                        <input type='text' name="Education"
                         placeholder="Enter education" value={memberData.Education}
                         onChange={handleChange}/>
                         
            
              <button onClick={handleSubmit}>Submit</button>
                 
                        </div>
                   
        </div>
        <ComponentB tableData={tableData}/>
      </form>
   </div>
  );
}