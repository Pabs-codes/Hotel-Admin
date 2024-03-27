import { useEffect, useState } from "react";
import bg from "./assets/adminbg.png"


function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const message = params.get("message");
    if (status && message) {
      setMsg({ type: status, text: message });
    }
  }, []);

  const handleInputChange = (e, type) => {
    setMsg({ type: "", text: "" });
    switch (type) {
      case "user":
        setUser(e.target.value);
        if (e.target.value === "") {
          setMsg({ type: "error", text: "Username has been left blank" });
        }
        break;
      case "pass":
        setPass(e.target.value);
        if (e.target.value === "") {
          setMsg({ type: "error", text: "Password has been left blank" });
        }
        break;
      default:
    }
  };

  function loginSubmit() {
    if (user !== "" && pass !== "") {
      var token;
      var url = "https://api.sunshinegrand.lk/admin/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => {
          token = response.headers.get("Authorization");
          return response.json();
        })
        .then((response) => {
          if (response.status === "success") {
            if (token) {
              localStorage.setItem("token", token.split(" ")[1]);
              setTimeout(function () {
                window.location.href = "/dashboard";
              }, 1300);
            } else {
              throw new Error("Token not found in response");
            }
          }
          setMsg({ type: response.status, text: response.message });
        })
        .catch((err) => {
          setMsg({ type: "error", text: "An error occurred while logging in" });
          console.log(err);
        });
    } else {
      setMsg({ type: "error", text: "All fields are required!" });
    }
  }

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#0000" , width: "auto"}}>
        <div className="container  h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={bg}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-red">
                     

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h3 fw-bold mb-0"> <a href="Sunshinegrand.lk">Sunshinegrand.lk</a> Admin Panel</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your admin account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          value={user}
                          onChange={(e) => handleInputChange(e, "user")}
                        />
                        <label className="form-label" htmlFor="username">
                          User Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          value={pass}
                          onChange={(e) => handleInputChange(e, "pass")}
                        />
                        <label className="form-label" htmlFor="pass">
                          Password
                        </label>
                      </div>
                      <p>
                        {msg.text !== "" && (
                          <span className={msg.type} style={{ color: "red" }}>
                            {msg.text}
                          </span>
                        )}
                      </p>
                      <div className="pt-1 mb-4">
                        <input
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          defaultValue="Login"
                          onClick={loginSubmit}
                        />
                      </div>
                      
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Need help ?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Click here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use |
                      </a>
                      <a href="#!" className="small text-muted">
                        | Privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;