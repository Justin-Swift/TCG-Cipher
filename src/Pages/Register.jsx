import styled from "styled-components"
import { mobile } from "../responsive"
import { useDispatch } from "react-redux";
import { useState } from "react"
import { register } from "../redux/apiCalls";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    flex-width: 40%;
    margin: 20px 10px 0px 0px;
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
`;


const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
  
    const handleClick = (e) => {
      e.preventDefault();
      register(dispatch,{username,email,password});
    }
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick}>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
