import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  position: relative;
  height: 100vh;
  width: 50vw;
`

export const Heading = styled.h1`
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  text-align: center;
`

export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  //   background-size: contain;
  //   background-repeat: no-repeat;
  position: absolute;
  left: 140px;
  top: 300px;
  border-radius: 30px;
  width: 400px;
  height: 250px;
  padding: 15px;
`

export const Input = styled.input`
  width: 80%;
  margin-top: 10px;
  font-size: 24px;
`
export const Payment = styled.h1`
  text-align: center;
`

export const PaymentContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  height:250px;
  box-shadow: -webkit-box-shadow: 31px 31px 73px 0px rgba(179,173,179,1);
-moz-box-shadow: 31px 31px 73px 0px rgba(179,173,179,1);
box-shadow: 31px 31px 73px 0px rgba(179,173,179,1);
  position: relative;
  top: 100px;
  left: 70px;
  
`

export const CardNumber = styled.p`
  color: #ffffff;
  margin-top: 85px;
  font-size: 28px;
  margin-left: 20px;
`
export const CardName = styled.p`
  color: #ffffff;
  font-size: 24px;
  margin-left: 20px;
`

export const CardHolder = styled.p`
  color: #ffffff;
  margin-left: 20px;
  font-family: 'Roboto';
`
