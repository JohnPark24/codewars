// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

var rooms = {
    room1: {
        name: 'room1',
        description: '',
        completed: 'false'
    },
    room2: {
        name: 'room2',
        description: '',
        completed: 'false'
    },
    room3: {
        name: 'room3',
        description: '',
        completed: 'false'
    }
}

class Room  {
    constructor() {
      this.name = '';
      this.description = '';
      this.completed= '';
    }
}
  var rooms = {
    bedroom : new Room(),
    kitchen : new Room(),
    bathroom : new Room(),
}