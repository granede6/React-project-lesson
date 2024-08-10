function drive(urs) {
    console.log('te user is', urs.name);
    if (urs.age > 30) {
        console.log("allow to drive");
    }
    else {
        console.log("not allow to drive");
    }
}
var tom = {
    name: 'ton',
    age: 34
};
drive(tom);
