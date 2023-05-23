class User{
    constructor(name){
        this.name = name
        this.id = generateID()
        this.chats = []
    }
}

let idSet = new Set([0]); // initialized with 0 so no user gets that
let currentId = 1;

function generateID() {
    idSet.add(currentId);
    return currentId++;
}

class ChatRoom{
    constructor(){
        this.users = []
        this.messages = []
    }
    addUserToChat(user){
        this.users.push(user)
        user.chats.push(this)
    }
    leaveChat(user){
        this.users = this.users.filter((existingUser) => {
            return existingUser.id !== user.id;
        });
        user.chats = user.chats.filter((chat) => {
            return chat !== this;
        });
    }
    sendMessage(user, message){
        this.messages.push({user: user, message: message})
        this.publish(user, message)
    }
    publish(user, message){
        console.log(`${user.name} said ${message}`)
    }
}