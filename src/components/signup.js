import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "./login";
function Signup() {
    const [initialValues,setIntialValues]=useState({
        email:"",password:""
    });
    // const initialValues={email:"",password:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    let history =useHistory();
    
    const handleChange = (e) => {
        e.preventDefault();
      const{name,value}=e.target 
      setFormValues({...formValues,[name]:value})
      const fieldName=e.target.getAttribute("name");
      const fieldvalue=e.target.value;
      const newFormData={...initialValues };
      newFormData[fieldName]=fieldvalue;
      setIntialValues(newFormData);
    };

    const handleSubmit = (e) =>{
     e.preventDefault();

     setFormErrors(validate(initialValues));
     setIsSubmit(true);
    if(isSubmit===true){
        // const data=initialValues
        // const data1={email:data.email,password:data.password}
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(initialValues)
        }).then(()=>{
            console.log("new user added")
        })
        history.push("\sign-in");
    }
};
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
           console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values)=>{
       const errors={};
       const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       if(!values.email){
           errors.email="Username is required!";


       } else if(!regex.test(values.email)){
        errors.email="This is invalid email!";
       }
       if(!values.password){
        errors.password="Password is required!";
       
    }
    else if(values.password.length < 4){
        errors.password="Password must be more than 4 characters!";
       }
       else if(values.password.length >= 10){
        errors.password="Password cannot exceed more than 10 characters!";
       }
    return errors;
    };

    return (
        <div className="bg-style">
          
            <div className="container">
           <form onSubmit={handleSubmit}>
            <h3 style= { {color: 'black'}}>Register</h3>
            <div className="row justify-content-cenr">
                <div className="col-sm-10">

                    <div className="form-group">
                        <label style= { {color: 'black'}}>Username:</label>
                        <input type="email" className="form-control" style= { {color: 'black'}}
                            onChange={handleChange} id="email" name="email"/>
                            <p class="text-danger">{formErrors.email}</p>
                    </div>
                    
                    {/* <div className="form-group mt-2">
                        <label style= { {color: 'black'}}>Password:</label>
                        <input type="password" className="form-control" style= { {color: 'black'}}
                            onChange={handleChange} id="pwd" value={formValues.password}/>
                    </div> */}
                    <div className="form-group mt-2">
                        <label style= { {color: 'black'}}>Password:</label>
                        <input type="password" style= { {color: 'black'}} className="form-control"
                             onChange={handleChange} id="password" name="password"/>
                              <p class="text-danger">{formErrors.password}</p>
                    </div>
                   


                    <button type="submit" className="fluid ui btn btn-primary">Register</button>
                    <p className="forgot-password text-right" style= { {color: 'black'}}>
                        Already registered ? <Link to={"/sign-in"}>Sign In</Link>
                    </p>

                </div>
            </div>
            </form>
        </div>
        </div>
    );
}


export default Signup;