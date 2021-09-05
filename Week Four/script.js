// function User(name,age,email){
//     this.name = name
//     this.age = age
//     this.email = email
// }

class User {
    constructor(name, age, email){
        this._name = name
        this.age = age
        this.email = email    
    }

    // ageByOne(){
    //     this.age += 1 
    // }

    // static staticMethod(){
    //     console.log('hello');
    // }
    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }
}

const person = new User('Dan', 21 , 'dan@email.com')


console.log(person.name);