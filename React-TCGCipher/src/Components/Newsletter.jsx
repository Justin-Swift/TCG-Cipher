import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.div`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}

`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.div`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.div`
    flex: 1;
    border: none;
    
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Recieve updates when new products are in stock.</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
