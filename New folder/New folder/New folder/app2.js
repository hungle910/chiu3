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
const findHobby = prompt("nhap vao khoa hoc");
for (let i of student) {
    if (i.hobbies.indexOf(findHobby,0) != (-1)) {
        console.log(i.name);
    }   
}