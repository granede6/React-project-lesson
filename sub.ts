interface User {
    name : string;
    age : number;
}
function drive(urs : User){
console.log('te user is',urs.name);
if(urs.age > 30){
    console.log("allow to drive")
}else{
 console.log("not allow to drive")
}
}
const tom : User = {
    name: 'ton',
    age : 34
}
drive(tom)