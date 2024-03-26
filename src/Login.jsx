// import { useEffect, useState} from 'react';
// import './Style.css'

// function Login() {
//     const [user , setUser ] = useState("");
//     const [pass , setPass ] = useState("");
//     const [error , setError ] = useState("");
//     const [msg , setMsg ] = useState("");

//     useEffect (() => {
//         setTimeout(function (){
//         setMsg("");
//         }, 5000 );
//     }, [msg]);

//     const handleInputChange = (e, type) => {
//         switch(type){
//             case "user":
//                 setError("");
//                 if(e.target.value === ""){
//                     setError("Username has left blank");
//                 }
//                 break;
//             case "pass":
//             setError("");
//             setPass(e.target.value);
//             if(e.target.value === ""){
//                 setError("Password has left blank");
//             }  
//             break;
//             default:  
//         }
//     }

//     function loginSubmit (){
//         if (user !== "" && pass != ""){
//             var url = "http://localhost/react/login.php";
//             var headers = {
//                 "Accept" : "application/json",
//                 "Content-type" : "application/json",

//             };
//             var Data = {
//                 user:user,
//                 pass:pass
//             };
//             fetch(url, {
//                 method: "POST",
//                 headers: headers,
//                 body: JSON.stringify(Data)
//             }).then((response)=> response.json())
//             .then((response)=> {
//                 setMsg(response[0].result);
//             }).catch((err) => {
//                 setError(err);
//                 console.log(err);
//             })
//         }
//         else{
//             setError("All field are required !")
//         }
//     }
    
    
//     return(
      
//         <div className='form'>
//             <p>
//                 {
//                     error !== "" ?
//                     <span className='error'> {error} </span> :
//                     <span className='success'> {msg} </span>
//                 }
//             </p>
//             <label> Username </label>
//             <input
//             type="text"
//             value={user}
//             onChange={(e) => handleInputChange (e, "user")}
//             />
//              <label> Password </label>
//             <input
//             type="password"
//             value={pass}
//             onChange={(e) => handleInputChange (e, "pass")}
//             />
//              <label> </label>
//             <input
//             type="submit"
//             defaultValue="Login"
//             className='button'
//             onClick={loginSubmit}
//             />

//         </div>
//     )
// }

// export default Login;



import { useEffect, useState} from 'react';
import './Style.css'

function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect (() => {
        setTimeout(function () {
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch(type) {
            case "user":
                setError("");
                setUser(e.target.value)
                if (e.target.value === "") {
                    setError("Username has been left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("Password has been left blank");
                }  
                break;
            default:  
        }
    }

    function loginSubmit() {
        if (user !== "" && pass !== "") {
            var token;
            var url = "http://localhost/backend/admin/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json",
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            })
            .then((response) => {
                token = response.headers.get('Authorization');
                return response.json();
            })
            .then((response) => {
                if (response.status==='success') {
                    if (token) {
                        localStorage.setItem('token', token.split(' ')[1]);
                        setTimeout(function() {
                            window.location.href = "/dashboard";
                        }, 2000);
                        setMsg(response.message);
                    }
                    else {
                        throw new Error("Token not found in response");
                    }
                } else {
                    setError(response.message);
                }
            })
            .catch((err) => {
                setError("Error occurred while logging in");
                console.log(err);
            });
        } else {
            setError("All fields are required!")
        }
    }
    
    return (
        <div className='form'>
            <p>
                {error !== "" ? 
                <span className='error'>{error}</span> : 
                <span className='success'>{msg}</span>}
            </p>
            <label> Username </label>
            <input
                type="text"
                value={user}
                onChange={(e) => handleInputChange(e, "user")}
            />
            <label> Password </label>
            <input
                type="password"
                value={pass}
                onChange={(e) => handleInputChange(e, "pass")}
            />
            <input
                type="submit"
                defaultValue="Login"
                className='button'
                onClick={loginSubmit}
            />
        </div>
    );
}

export default Login;
