// class Stock {
//     constructor(){
//         this.stockItems = []
//         // this.itemId = itemId
//         // this.quantity = quantity
//     }
    
//     findItemIndex(id){
//         this.stockItems.findIndex((stocks) => {
//             return(stocks.itemId === id)
//         })
        
//     }

//     addItem(id,amount){

//     }

//     addItems(items){

//     }

//     sell(id,amount){

//     }

//     getAllStockAmount(){
        
//     }
// }
// const testC = new Stock(5,)
// const err = [1,22,4,5]
// // err.findItemIndex(err)

// console.log(testC.findItemIndex(err))

// class Stock {
//     constructor() {
//       this.stockItems = []
//     }
  
//     findItemIndex(id) {
//       return this.stockItems.findIndex(item => item.itemld === id)
//     }
  
//     addItem(id, amount) {
//       if (id == null || amount == null) return -1
  
//       const newProduct = this.findItemIndex(id)
//       if (newProduct !== -1) {
//         this.stockItems[newProduct].quantity += amount
//       } 
//       else {
//         this.stockItems.push({ itemld: id, quantity: amount })
//       }
//       return amount
//     }
  
//     addItems(items) {
//     //   let count = 0;
//     //   items.forEach(item => {
//     //     const addedAmount = this.addItem(item.itemld, item.quantity)
//     //     if (addedAmount !== -1) count++
//     //   })
//     //   return count
//         const successfullyAdded = 0
//         for (let i = 0; i < items.length; i++) {
//             const item = items[i]
//             if (this.addItem(item.itemld, item.quantity) !== -1) {
//                 successfullyAdded
//             }
//         }
//         return successfullyAdded
    
    
//     }
  
//     sell(id, amount) {
//       const productId = this.findItemIndex(id)
//       if (productId === -1){
//         return -1
//         } 
  
//       const quantitys = this.stockItems[productId].quantity
//       if (quantitys >= amount) {
//         this.stockItems[productId].quantity -= amount
//         return amount
//       } 
//       else {
//         this.stockItems[productId].quantity = 0
//         return quantitys
//       }
//     }
  
//     getAllStockAmount() {
//             // const total = 0
//             // for (let i = 0; i < this.stockItems.length; i++) {
//             //     total += this.stockItems.quantity
//             // }
//             // return total
//             return this.stockItems.reduce((total, item) => total + item.quantity, 0)
//     }
//   }
  
//   // Example usage:
//   const stock = new Stock();
//   stock.addItems([{ itemld: 102, quantity: 23 }, { itemld: 103, quantity: 5 }, { itemld: 103, quantity: 0 }]);
//   console.log(stock.getAllStockAmount()); // Output: 28
  
//   stock.addItems([{ itemld: 102, quantity: 10 }, { itemld: null, quantity: 5 }, { itemld: 103, quantity: 5 }]);
//   console.log(stock.getAllStockAmount()); // Output: 43
  
//   stock.addItems([{ itemld: 101, quantity: 50 }, { itemld: 200, quantity: 10 }, { itemld: 211, quantity: 20 }, { itemld: null, quantity: 50 }, { itemld: 101 }]);
//   console.log(stock.getAllStockAmount()); // Output: 183
  
//   stock.sell(102, 5);
//   console.log(stock.getAllStockAmount()); // Output: 38
  

// // Example usage:
// const myStock = new Stock();

// myStock.addItem(101, 100);
// myStock.addItem(102, 200);

// console.log(myStock.getAllStockAmount()); // Output: 300

// myStock.sell(101, 50);

// console.log(myStock.getAllStockAmount()); // Output: 250


class Stock {
    constructor() {
      this.stockItems = []
    }
  
    findItemIndex(id) {
      return this.stockItems.findIndex(item => item.itemld === id)
    }
  
    addItem(id, amount) {
      if (id == null || amount == null) {
        return -1
      }
  
      const add = this.findItemIndex(id)
      if (add !== -1) {
        this.stockItems.quantity += amount
      } 
      else {
        this.stockItems.push({ itemld: id, quantity: amount })
      }
      return amount
    }
  
    addItems(items) {
        let successAdd = 0
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (this.addItem(item.itemld, item.quantity) !== -1) {
                successAdd++
            }
        }
        return successAdd
    }
  
    sell(id, amount) {
      const product = this.findItemIndex(id)
      if (product === -1) {
        return -1
      } 
  
      const quantitys = this.stockItems.quantity
      if (quantitys >= amount) {
        this.stockItems.quantity -= amount
        return amount
      } 
      else {
        this.stockItems.quantity = 0
        return quantitys
      }
    }
  
    getAllStockAmount() {
        return this.stockItems.reduce((total, item) => total + item.quantity, 0)
    }
}

// Example usage:
const stock = new Stock();
stock.addItems([{ itemld: 102, quantity: 23 }, { itemld: 103, quantity: 5 }, { itemld: 103, quantity: 0 }]);
console.log(stock.getAllStockAmount()); // Output: 28

stock.addItems([{ itemld: 102, quantity: 10 }, { itemld: null, quantity: 5 }, { itemld: 103, quantity: 5 }]);
console.log(stock.getAllStockAmount()); // Output: 43

stock.addItems([{ itemld: 101, quantity: 50 }, { itemld: 200, quantity: 10 }, { itemld: 211, quantity: 20 }, { itemld: null, quantity: 50 }, { itemld: 101 }]);
console.log(stock.getAllStockAmount()); // Output: 183

stock.sell(102, 5);
console.log(stock.getAllStockAmount()); // Output: 38
