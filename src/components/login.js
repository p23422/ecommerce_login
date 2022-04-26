import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom';
function Login() {
    //const useRef = useRef();
    //const errRef = useRef();
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const submit = () => {

        //const [errMsg, setErrMsg] = useState('');
        //const [success, setSuccess] = useState(false);
        console.log(user + ' ' + passwd);

        // useEffect(()=>{
        //     useRef.current.focus();
        // }, [])

        // useEffect(()=>{
        //   setErrMsg('');
        // }, [user, passwd])
    }

    return (

        <div className="bg-style">
            <h3 style= { {color: 'black'}}>Login</h3>
            <div className="row justify-content-center">
                <div className="col-sm-10">

                    <div className="form-group">
                        <label style= { {color: 'black'}}>Username:</label>
                        <input type="email" className="form-control" style= { {color: 'black'}}
                            onChange={e => setUser(e.target.value)} id="email" required/>
                    </div>
                    <div className="form-group mt-2">
                        <label style= { {color: 'black'}}>Password:</label>
                        <input type="password" style= { {color: 'black'}} className="form-control"
                            onChange={e => setPasswd(e.target.value)} id="pwd" required/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input style= { {color: 'black'}} type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" style= { {color: 'black'}} htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="" onClick={submit} class="btn btn-primary mt-4 border-dark">Login</button>
                    <p className="forgot-password text-right" style= { {color: 'black'}}>
                        Register <Link to={"/sign-up"}>here !!</Link>
                    </p>

                </div>
            </div>
        </div>

    )
}

export default Login;