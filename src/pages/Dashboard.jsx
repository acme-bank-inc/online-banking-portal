const accounts = [
  { name: 'Checking Account', number: '****4821', balance: 12483.57 },
  { name: 'Savings Account', number: '****7390', balance: 48210.33 },
  { name: 'Money Market', number: '****1056', balance: 105620.00 },
]

const recentTransactions = [
  { date: '2026-04-01', description: 'Grocery Store', amount: -127.43 },
  { date: '2026-03-30', description: 'Direct Deposit', amount: 3250.00 },
  { date: '2026-03-28', description: 'Electric Bill', amount: -184.20 },
  { date: '2026-03-25', description: 'Online Transfer', amount: -500.00 },
  { date: '2026-03-22', description: 'ATM Withdrawal', amount: -200.00 },
]

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Account Overview</h2>
      <div className="accounts-grid">
        {accounts.map((acct) => (
          <div key={acct.number} className="account-card">
            <h3>{acct.name}</h3>
            <p className="account-number">{acct.number}</p>
            <p className="balance">{formatCurrency(acct.balance)}</p>
          </div>
        ))}
      </div>

      <h2>Recent Transactions</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((tx, i) => (
            <tr key={i}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td className={tx.amount < 0 ? 'negative' : 'positive'}>
                {formatCurrency(tx.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
