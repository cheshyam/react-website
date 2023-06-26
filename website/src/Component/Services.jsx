import React from "react";
import Card from "./Card";
import Data from "./Data";


const Services =()=>{
    return(
        <>
          <div className="my-5">
             <h1 className="text-center"> Our Services</h1><br/>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-10 mx-auto">
                         <div className="row gy-5 ">
                            {
                                Data.map((Val , Indx)=>{
                                    return <Card
                                        key={Indx}
                                        title={Val.title}
                                        img={Val.img}
                                    />
                                })
                            }
                         </div>       
                     </div>
                 </div>
                </div>
          </div>
        </>
    )
}


export default Services;