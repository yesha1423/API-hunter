import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isloading, setisloading] = useState(false)
  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate()
  console.log(isloading)

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
    setisloading(true)
    axios.post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        setisloading(false)
        loginUser(res.data.token)
        console.log(res.data.token)
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return isloading ? <Loader /> : (
    <div data-testid="login-container" style={{marginTop:"270px"}}>
      <form data-testid="login-form" onSubmit={(e) => handelsubmit(e)}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password} onChange={(e) => setpassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}
export default Login;
