import React from "react";
import { NavLink } from "react-router-dom";

const Page =(props)=>{
 return (
    <>
       <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-1 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                {props.name} <strong className="brand-name"> Belymon Infotech</strong> 
                            </h1>
                            <h2 className="my-3">
                                We are best to best given for your development skil impoved me and my team
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn btn-get-statrted">
                                    {props.btname}
                                </NavLink>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </>
 )


                    


}

export default Page;