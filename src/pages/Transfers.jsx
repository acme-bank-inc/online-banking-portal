import { useState } from 'react'

const accountOptions = [
  { label: 'Checking (****4821)', value: 'checking' },
  { label: 'Savings (****7390)', value: 'savings' },
  { label: 'Money Market (****1056)', value: 'money-market' },
]

function Transfers() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!from || !to || !amount) {
      setMessage('Please fill in all fields.')
      return
    }
    if (from === to) {
      setMessage('Source and destination accounts must be different.')
      return
    }
    if (parseFloat(amount) <= 0) {
      setMessage('Amount must be greater than zero.')
      return
    }
    setMessage(`Transfer of $${parseFloat(amount).toFixed(2)} submitted successfully.`)
    setFrom('')
    setTo('')
    setAmount('')
  }

  return (
    <div className="transfers">
      <h2>Transfer Funds</h2>
      <form className="transfer-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="from">From Account</label>
          <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Select account</option>
            {accountOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="to">To Account</label>
          <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Select account</option>
            {accountOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="amount">Amount (USD)</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>
        {message && <p className={message.includes('successfully') ? 'success' : 'error'}>{message}</p>}
        <button type="submit" className="btn-primary">Submit Transfer</button>
      </form>
    </div>
  )
}

export default Transfers
