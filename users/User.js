class User{
    #id
    #name
    #password
    #email
    #rule

    constructor(id,name,password,email,rule){
        this.#id = id
        this.#name = name
        this.#password = password
        this.#email = email
        this.#rule = rule
    }

    displayinfo() {
        return `
        ID: ${this.#id} 
        name: ${this.#name} 
        Password: ${this.#password}
        email: ${this.#email}
        role: ${this.#rule}`
    }

}

const userData = {
    "id": 1,
    "name": "artu",
    "email": "artu@gmail.com",
    "passwor": "12345turzinho",
    "role": "user"
}

const user = new User(userData.id,userData.name,userData.passwor,userData.email,userData.role)
console.log(user.displayinfo())
