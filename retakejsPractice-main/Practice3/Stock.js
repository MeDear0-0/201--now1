class Stock {
    stockItems = []; // อาร์เรย์เก็บอ็อบเจ็กต์ของสินค้า

    // คอนสตรักเตอร์เพื่อกำหนดค่าเริ่มต้นของ stockItems เป็นอาร์เรย์ว่าง
    constructor() {
        this.stockItems = [];
    }

    // ฟังก์ชันหาดัชนีของสินค้าตาม ID
    findItemIndex(id) {
        return this.stockItems.findIndex(item => item.itemld === id);
    }

    // ฟังก์ชันขายสินค้า
    sell(id, amount) {
        const itemIndex = this.findItemIndex(id);
        if (itemIndex !== -1) {
            // ถ้าพบสินค้าในสต็อก
            const item = this.stockItems[itemIndex];
            // ตรวจสอบว่ามีปริมาณพอให้ขายหรือไม่
            const remainingQuantity = Math.max(item.quantity - amount, 0);
            this.stockItems[itemIndex].quantity = remainingQuantity;
            return remainingQuantity;
        }
        return -1; // หากไม่พบสินค้า
    }

    // ฟังก์ชันคืนค่าจำนวนรวมของสินค้าทั้งหมดในสต็อก
    getAllStockAmount() {
        return this.stockItems.reduce((total, item) => total + item.quantity, 0);
    }

    // ฟังก์ชันเพิ่มสินค้าหรือเพิ่มจำนวนสต็อกหากสินค้ามีอยู่แล้ว
    addItem(id, amount) {
        if (id === null || id === undefined || amount === null || amount === undefined) {
            return -1;
        }
        const itemIndex = this.findItemIndex(id);
        if (itemIndex !== -1) {
            // ถ้าสินค้ามีอยู่ในสต็อก เพิ่มจำนวนสินค้า
            this.stockItems[itemIndex].quantity += amount;
            return this.stockItems[itemIndex].quantity;
        } else {
            // ถ้าสินค้ายังไม่มีอยู่ เพิ่มสินค้าใหม่
            this.stockItems.push({ itemld: id, quantity: amount });
            return amount;
        }
    }

    // ฟังก์ชันเพิ่มสินค้าหลายรายการ
    addItems(items) {
        let successCount = 0;
        for (const item of items) {
            const { itemld, quantity } = item;
            const addedAmount = this.addItem(itemld, quantity);
            if (addedAmount !== -1) {
                successCount++;
            }
        }
        return successCount;
    }
}

// การใช้งานตัวอย่าง:
const stock = new Stock();
console.log(stock.addItems([
    { itemld: 102, quantity: 2 },
    { itemld: 103, quantity: 5 },
    { itemld: 103, quantity: 0 }
])); // คืนค่า 3
console.log(stock.addItems([
    { itemld: 102, quantity: 10 },
    { itemld: null, quantity: 5 },
    { itemld: 103, quantity: 5 }
])); // คืนค่า 2
console.log(stock.addItems([
    { itemld: 102, quantity: 2 },
    { itemld: 103, quantity: 5 },
    { itemld: 104, quantity: 0 }
])); // คืนค่า 3
console.log(stock.addItems([
    { itemld: 102, quantity: 10 },
    { itemld: 105, quantity: 5 },
    { itemld: 103, quantity: 5 }
])); // คืนค่า 2
console.log(stock.addItems([
    { itemld: 106, quantity: 50 },
    { itemld: 107, quantity: 10 },
    { itemld: 108, quantity: 20 },
    { itemld: 109, quantity: 50 },
    { itemld: 110, quantity: 0 },
    { itemld: 111, quantity: 0 }
])); // คืนค่า 5

