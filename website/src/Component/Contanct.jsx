import React, { useState } from "react";


const Contanct =()=>{
    // useState for this data display
  const [ data ,setData ] = useState({
    name:"",
    number:"",
    email:"",
    about:""
  });

 //   change event to previous data and vakue input
  const inputEvent=(event)=>{
       const {name , value} =event.target                                                          ;

        // changed value to used
        setData((preVal)=>{
            return {
                ...preVal,
               [name]:value,
            };
        });
    };
  
    const inputButton=()=>{
        // e.preventDefault();
        
        // alert to display san submit data
        alert(`My Name ${data.name} my mobile No ${data.number} email numebr is ${data.email} and about of this ${data.about} `)
        
        // can submit data page
        setData({
              name:"",
              number:"",
              email:"",
              about:""
            }
      
        )
  }

    return(
        <>
          <div className="my-5">
             <h1 className="text-center">Contanct Us </h1>
          </div>
          <div className="container contact_div">
             <div className="row">
                    <div className="col-md-5 col-10 mx-auto">
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Full Name:- </strong></label>
                            <input type="text" className="form-control border border-secondary  " name="name" value={data.name} onChange={inputEvent} id="exampleFormControlInput1 " placeholder="Enter Your Full Name"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Mobile number:-</strong></label>
                            <input type="number" className="form-control border border-secondary" name="number" value={data.number} onChange={inputEvent} id="exampleFormControlInput1 " placeholder="Enter your Mobile Number"/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Email address:-</strong></label>
                            <input type="email" className="form-control border border-secondary" name="email" value={data.email} onChange={inputEvent} id="exampleFormControlInput1 " placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>About Your:-</strong></label>
                            <textarea className="form-control border border-secondary" name="about" value={data.about} placeholder="Enter your about" onChange={inputEvent} id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        <div className="col-12" onClick={inputButton}>
                            <button className="btn btn-outline-primary " type="submit"><strong>Submit form</strong></button>
                        </div>
                    </div>
                </div>
          </div>
       
        </>
    )
}


export default Contanct;