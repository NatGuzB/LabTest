class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        this.users.push(user);
    }

    remove(user){
        // Corregir la lógica para eliminar el usuario por su ID
        this.users = this.users.filter(function(ele){
            return ele.id !== user.id; 
        });
    }

    findByEmail(email){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return this.users[i];
        } 
    }
}

module.exports = UserController;