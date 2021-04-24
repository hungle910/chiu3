let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

const findAge = prompt('Nhập độ tuổi của người cần tìm'); 
 let ten = 0;
 for (let i = 0; i < student.length; i++) {
     if (student[i].age == findAge) {
         console.log(student[i].name);
         ten++; 
     }
 }