//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.

//ID: 65130500111      Name: Pimpajee Seththirungplop

class BankAccount {
    constructor(accountNumber){
        this.accountNumber = accountNumber
        this.balance = 0
        this.transactions = []
    }

    deposit(amount){
        const newAmount = this.transactions.findIndex(newAm => newAm.amount === amount)
        if(newAmount === -1){
            return null
        }
        const add = amount++
            const  newBalance = ({
                id:this.accountNumber, 
                type:"deposit",
                amount:add,
                timestamp:timestamp
            })
            return newBalance
    }

    withdraw(amount){
        const checkAmount = this.transactions.findIndex(money => money.amount === amount)
        if(checkAmount !== -1){
            return null
        }
        this.transactions.splice(checkAmount,1)
        const newBa = ({
            id:this.accountNumber, 
            type:"withdraw",
            amount:amount,
            timestamp:Date
            })
            return newBa
    }

    getBalance(){
        return this.balance
    }

    getAccountNumber(){
        return this.accountNumber
    }

    getTransactions(){
        return this.transactions
    }

    getTransaction(id){
        const transactionID = this.transactions.findIndex(tran => tran.id === id)
        if(transactionID === -1){
            return null
        }
        return transactionID
    }

    recordTransaction(type, amount){

    }

    // For Module 1.1
    transferFunds(targetAccountNumber, amount){
        const tranfer = this.transactions.findIndex(target => target.targetAccountNumber === targetAccountNumber)
        if(tranfer === -1){
            return false

        }

    }
}
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions