import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  Heading,
  CreditCardImage,
  CardNumber,
  CardName,
  CardHolder,
  PaymentContainer,
  Payment,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [atmNumber, setAtmNumber] = useState('')
  const [name, setName] = useState('')

  return (
    <>
      <MainContainer>
        <CreditCardContainer>
          <Heading>CREDIT CARD</Heading>
          <CreditCardImage data-testid="creditCard">
            <CardNumber>{atmNumber}</CardNumber>
            <CardHolder>CARDHOLDER NAME</CardHolder>
            <CardName>{name}</CardName>
          </CreditCardImage>
        </CreditCardContainer>
        <PaymentContainer>
          <Payment>Payment Method</Payment>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={event => setAtmNumber(event.target.value)}
          />

          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={event => setName(event.target.value)}
          />
        </PaymentContainer>
      </MainContainer>
    </>
  )
}
export default CreditCard
