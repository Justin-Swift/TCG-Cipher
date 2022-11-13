import { useSelector } from "react-redux";
import styled from "styled-components"
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { useState } from "react"
import { login } from "../redux/apiCalls";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-width: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    flex-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`

    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: grey;
    color: white;
    cursor: pointer;
    &::disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
`


const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username,password});
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="Password" 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something Went Wrong</Error>}
            <Link>Forgot Password?</Link>
            <Link>Create Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login
