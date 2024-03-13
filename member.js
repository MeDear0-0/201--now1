// class Membership{
//     static autoId = 1

//     constructor(){
//         this.members = []
//     }
    
//     findMemberId(id) {
//         for (let i = 0; i < array.length; i++) {
//             return this.members.findIndex((memberId) => {
//                 memberId.id === id
//             })
            
//         }
//     }

//     findMemberName(name) {
//         this.members.findIndex((Memname) => {
//             Memname.name.toLowerCase() === name.toLowerCase()
//         })
//     }
//     subscribe(name) {
        
//     }
//     unsubscribe(id) {

//     }
// }

// const member = new Membership();

// สมัครสมาชิก
// member.subscribe("John Doe");
// member.subscribe("Jane Doe");

// // ค้นหา id ของ John Doe
// const johnId = member.findMemberName("John Doe");

// // ยกเลิกสมาชิก John Doe
// member.unsubscribe(johnId);

// // ตรวจสอบจำนวนสมาชิก
// const memberCount = member.members.length;

// // const mem = new Membership(1,'gg')
// const mem1 = new Membership([1,'ff'])
// console.log(mem1)




class Member {
    static autold = 1

    constructor() {
      this.members = []
      this.autold = autold
    }
  
    findMemberId(id) {
        // for (let i = 0; i < this.members.length; i++) {
        //     return this.members.findIndex((memberId) => {
        //         memberId.id === id
        //     })
            
        // }

        this.members.findIndex((memberId) => {
          memberId.id === id
      })
    
    }
    findMemberName(name) {
        this.members.findIndex((Memname) => {
            return (Memname.memberName.toLowerCase() === name.toLowerCase())
        })
    }
    subscribe(name) {
        // const subName = this.members.findIndex((member) => member.memberName.toLowerCase() === name.toLowerCase())
        const subName = this.findMemberName(name)

      if (subName === -1) {
        const newMember = {
          memberld: Member.autold++,
          memberName: name,
            }
           return this.members.push(newMember)
        }

        else {
             return -1
        }
        
    }

    unsubscribe(id) {
        if(id === undefined){
            return -1
        }

        const unId = this.members.findIndex((member) => member.memberld === id)
        if (unId === -1) {
          return -1
        }
      
        const memId = this.members.indexOf(member)

        this.members.splice(memId, 1)
      
        for (let i = memId; i < this.members.length; i++) {
          this.members[i].memberld--
        }
        return id
      
}

}

const member = new Member();

// สมัครสมาชิก
member.subscribe("John Doe");
member.subscribe("Jane Doe");

// ค้นหา id ของ John Doe
const johnId = member.findMemberName("John Doe",5);
const john = member.findMemberId(1);

// ยกเลิกสมาชิก John Doe
member.unsubscribe(johnId);

// ตรวจสอบจำนวนสมาชิก
const memberCount = member.members.length;

// const mem = new Membership(1,'gg')
const mem1 = new Member([1,'ff'])
console.log(mem1)


    // findMemberld(id) {
    //   for (let i = 0; i < this.members.length; i++) {
    //     if (this.members[i].memberld === id) {
    //       return i;
    //     }
    //   }
    //   return -1;
    // }
  
    // findMemberName(name) {
    //   for (let i = 0; i < this.members.length; i++) {
    //     if (this.members[i].memberName.toLowerCase() === name.toLowerCase()) {
    //       return i;
    //     }
    //   }
    //   return -1;
    // }