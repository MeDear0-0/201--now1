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
        const id = this.transactions.length + 1
        const newTrans = ({
            id:id,
            type:'deposit',
            amount:amount,
            timestamp:Date()
        })
        this.balance = this.balance + amount
        this.transactions.push(newTrans)
        return newTrans
    }

    withdraw(amount){
        if(amount > 0){
            const id = this.transactions.length + 1
            const newTrans2 = ({
                id:id,
                type:'withdraw',
                amount:amount,
                timestamp:Date()
            })
        this.balance = this.balance - amount
        this.transactions.push(newTrans2)
        return newTrans2
        }
        return null
        
        
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
        if((type !== 'deposit' || type !== 'withdraw') && amount <= 0){
            return null
        }
        const timestamp = new Date()
        return transaction = {
            type,
            amount,
            timestamp
        }

        // พลอย
        // if ((type === "deposit" || type === "withdraw") && amount === amount) {
        //     return this.transactions;
        //   }
        //   return "not record";
    }

    transferFunds(targetAccountNumber, amount){
        if (targetAccountNumber !== this.accountNumber || amount < amount) {
            return false
          }
          return true
        }
    }
    
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions


