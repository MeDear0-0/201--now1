//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500111      Name:Pimpajee Seththirungplop
class Game {
    constructor(id,title,genre,price){
        this.id = id
        this.title = title
        this.genre = genre
        this.price = price
    }
}
 
class GameStore {
    constructor(storeName){
        this.storeName = storeName
        this.inventory = []
    }

    addGame(game){
       
        if(game !== null){
        const uniqId = this.inventory.length + 1
        const gameNew = ({
            id:uniqId,
            title:this.title,
            genre:this.genre,
            price:this.price
        })
        this.inventory.push(gameNew)
        return gameNew
    }
    }

    searchByTitle(title){
       return this.inventory.filter(ti => ti.title === title)
    }

    searchByGenre(genre){
        return this.inventory.find(gen => gen.genre === genre)
    }

    purchaseGame(id){
        const reID = this.inventory.findIndex(findID => findID.id === id)
        if(reID !== -1){
            return this.inventory.splice(reID,1)
        }
        
    }

    listInventory(){
        console.log(this.inventory) 
    }

    updateGamePrice(id, newPrice){
        const update = this.inventory.find(gm => gm.id === id)
        if(update){
            update.price = newPrice
            return true
        }
        return false
    }

    totalInventoryValue(){

    }

    listGenres(){
        const uniqGenre = this.inventory.filter(uniq => uniq.genre === genre)
        if(uniqGenre !== -1){
            console.log(uniqGenre) 
        }
         
    }

    sellGame(id, quantity){
       
        const gameSell = this.inventory.findIndex(id)
        if(gameSell !== -1){
            const game = this.inventory[gameSell]

            const quan = Math.max(game.quantity - quantity, 0)
            this.inventory[gameSell].quantity = quan
            return quan
        }
        
    }
}

const store = new GameStore("Epic Game Store");
 
// Adding games to the inventory
store.addGame(new Game(1, "Game One", "Action", 59.99));
store.addGame(new Game(2, "Game Two", "Adventure", 49.99));
 
// Searching games by title
console.log(store.searchByTitle("One"));
 
// Searching games by genre
console.log(store.searchByGenre("Adventure"));
 
// Purchasing a game
console.log(store.purchaseGame(1));
 
// Listing the inventory
console.log(store.listInventory());
 
// Updating a game price
store.updateGamePrice(2, 39.99);
 
// Calculating total inventory value
console.log(store.totalInventoryValue());
 
// Listing all genres
console.log(store.listGenres());
 
// Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
console.log(store.sellGame(2, 1));
