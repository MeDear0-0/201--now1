class Membership {
    static autoId = 1; // คุณสมบัติแบบสถิตเพื่อเก็บค่า ID ที่สร้างอัตโนมัติ
    members = []; // อาร์เรย์สำหรับเก็บอ็อบเจ็กต์สมาชิก

    // คอนสตรักเตอร์สำหรับกำหนดค่าเริ่มต้นของอาร์เรย์สมาชิกเป็นอาร์เรย์ว่าง
    constructor() {
        this.members = [];
    }

    // ค้นหาดัชนีของสมาชิกโดยใช้ ID
    findMemberId(id) {
        return this.members.findIndex(member => member.memberld === id);
    }

    // ค้นหาดัชนีของสมาชิกโดยใช้ชื่อ (ไม่สนใจตัวอักษรใหญ่-เล็ก)
    findMemberName(name) {
        const lowerCaseName = name.toLowerCase();
        return this.members.findIndex(member => member.memberName.toLowerCase() === lowerCaseName);
    }

    // เพิ่มสมาชิกใหม่
    subscribe(name) {
        const existingMemberIndex = this.findMemberName(name);
        if (existingMemberIndex !== -1) {
            return -1; // ชื่อสมาชิกซ้ำ
        }
        const newMemberId = Membership.autoId++;
        this.members.push({ memberld: newMemberId, memberName: name });
        return this.members.length;
    }

    // ยกเลิกการสมัครสมาชิกโดยใช้ ID
    unsubscribe(id) {
        if (id === undefined) {
            return -1; // ID ไม่ถูกต้อง
        }
        const memberIndex = this.findMemberId(id);
        if (memberIndex !== -1) {
            this.members.splice(memberIndex, 1);
            return id;
        }
        return -1; // ไม่พบสมาชิก
    }

    // คืนค่าอาร์เรย์ทั้งหมดของสมาชิก
    getAllMembers() {
        return this.members;
    }
}

// ตัวอย่างการใช้งาน:
const membership = new Membership();
membership.subscribe('Alison Butler');
membership.subscribe('Simon Brown');
membership.subscribe('Tim Carr');
membership.subscribe('Neil Davidson');

console.log(membership.getAllMembers());

console.log(membership.unsubscribe(2)); // ยกเลิกสมาชิก Simon Brown
console.log(membership.getAllMembers());
