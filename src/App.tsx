import { useState } from 'react'
import { getMetamaskProvider, getBalance, transfer } from './MetamaskService'
import { AppContainer } from './styles'


export function App() {

  const [address, setAddress] = useState("0x41Cb6416e7ae45d254e456454bBABD333d87046E")
  const [to, setTo] = useState("0x4bf008E06D87aE158a768517cF23565A02b00564")
  const [balance, setBalance] = useState("click to show balance")
  const [quantity, setQuantity] = useState("0")
  const [message, setMessage] = useState('See the logs here');

  function handleGetBalance() {
    getBalance(address)
    .then(balance => setMessage(balance))
    setBalance(message)
  }

  function handleTransfer() {
    transfer({
      from: address,
      to: to,
      quantity: quantity
    }).then(tx => setMessage(tx))
    .catch(err => setMessage(err.message))
  }

  return (
    <AppContainer>
      <header>
        <a>transferWallet</a>
        <div className='wrapper'>
          <button onClick={() => getMetamaskProvider()}>🦊 Connect wallet </button>
          <button onClick={() => handleGetBalance()}>{balance}</button>
        </div>
      </header>
    <main>

      <div className='inputWrapper'><p>From: </p>  
        <input 
          type="text"
          value={address}
          onChange={
            (evt) => setAddress(evt.target.value)
          }/>
      </div>

      <div className='inputWrapper'><p>To: </p>  
        <input 
          type="text"
          value={to}
          onChange={
            (evt) => setTo(evt.target.value)
          }/>
      </div>

      <div className='inputWrapper'><p>Quantity: </p>  
        <input 
          type="text"
          value={quantity}
          onChange={
            (evt) => setQuantity(evt.target.value)
          }/>
      </div>
      <button onClick={() => handleTransfer()}>TRANSFER ETH</button>

      
      

      <span>{message}</span>
    </main>

    </AppContainer>
  )
}

