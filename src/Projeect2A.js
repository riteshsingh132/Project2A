
import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
function Project2A() {


    const [data,setData]=useState("")
    const [toggle,setToggle]=useState(false)


    const handlechange=(e)=>{

        const  getValue=e.target.value;
        console.log(e)
        // setData( getValue.name)
        if(getValue == 1){
            setData("Email Address")
            setToggle(true)
        }else if(getValue==2){
            setData("Phone Number")
            setToggle(true)
        }else if(getValue==0){
            setData("")
            setToggle(false)
            
        }
    }


    return (
        <>
        {/* with bootstrap structure  */}
        <div className='container '>
            <div className='col-sm-8 mt-5 mx-auto'>

            <div className='card shadow bg-light'>
                <div className='card-body '>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <label className=''>First Name</label>
                            <input type='text' className='form-control' name='' />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <label className=''>First Name</label>
                            <input type='text' className='form-control' name='' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <label className=''>First Name</label>
                            <select className='form-control' onChange={(e)=>handlechange(e)}>
                            <option type="text" value={"0"}>Selcet Option</option>
                            <option type="email" value={"1"}>Email</option>
                            <option type="number" value={"2"}>Phone</option>  
                            </select>
                        </div>
                       {toggle ?  <div className='col-sm-6 form-group'>
                            <label className=''>{data}</label>
                            <input type='text' className='form-control' name='' />
                        </div>
                        
                      :"" }
                       
                    </div>


                </div>
            </div>

            </div>

        </div>
        {/* without bootstrap structure */}
            {/* <div className='container col-6 mt-5 pb-3' style={{ border: "1px solid #ccc",backgroundColor:"rgba(50, 115, 220, 0.3)",borderRadius:"10px"}}>

                <Form >
                    <Form.Group className="mt-3 mb-3 d-flex justify-between"style={{gap:"10px"}} controlId="formBasicText">
                        <div style={{ width: "300px" }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name='fname' placeholder='Enter Your First Name'/>
                        </div>
                        <div style={{ width: "300px" }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lname' placeholder='Enter Your Last Name' />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1 gap-3" style={{gap:"10px"}} className='mb-3 d-flex justify-between'>
                      
                       <div style={{width:"300px"}}>
                       <Form.Label>How Should we Contact You?</Form.Label>
                        <Form.Control as="select" onChange={(e)=>handlechange(e)} name='selection' type='text'>
                            <option type="text" value={"0"}>selcet option</option>
                            <option type="email" value={"1"}>Email</option>
                            <option type="number" value={"2"}>Phone</option>  
                        </Form.Control>
                       </div>
                      {toggle ? <div style={{width:"300px",gap:3}}>                        
                            <Form.Label>{data}</Form.Label>
                            <Form.Control type="text" />
                        </div> :" "}
                    </Form.Group>
                </Form>


              
            </div> */}
        </>
    )
}

export default Project2A