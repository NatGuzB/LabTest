const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


  //MIS PRUEBAS
  //Tarea 2
let user = new User(1234,"Santiago", "santiago@generation.org");

// Test para add()
test('add user to userController', () => { 
    userController.add(user); 
    expect(userController.getUsers()).toContain(user);
});

// Test para remove()
test('remove user to userController', () => { 
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});

// Función findByEmail().
test('find user by valid email', () => {
    userController.add(user);
    expect(userController.findByEmail('santiago@generation.org')).toBe(user);
});

test('return undefined for invalid email', () => {
    expect(userController.findByEmail('nonexistent@email.com')).toBeUndefined();
});

// Función findById().
test('find user by valid ID', () => {
    userController.add(user);
    expect(userController.findById(1234)).toBe(user);
});

test('return undefined for invalid ID', () => {
    expect(userController.findById(9999)).toBeUndefined();
});