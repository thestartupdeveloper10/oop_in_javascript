user={
    name:'cliffe',
    email:'cliffe@gmail.com',
    login: function (){
        console.log(this.email +"logged in and the user name is "+this.name);
    },
    // other way to define a function
    logout(){
        console.log(this.email +"logged out and the user name is "+this.name);
    }
}
user.name='jasper';
// defining new function
user.logInfor=function (){
    console.log(this.name + this.email + this.login)
}

var property='name';
// make sure the name is in quotes
console.log(user['name']);
// using variable
console.log(user[property])

console.log(user.email)
