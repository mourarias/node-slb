# node-slb

A simple leaderboard using RocksDB for storage.

### Features(SO FAR):
- Simple Leaderboard
- Supports creation of (name, score) tuples (STILL HARDCODED, needs to be nonexistant)
- Supports the deletion of elements
- Update mechanism(Updates a rank or creates)
- Realtime update(using [socket.io](https://socket.io))


### Objectives(For the future):
- Highly configurable leaderboard 
- Filters
- Other data processing
- Expansible properties based in existing


### Technology Used:
- Backend:
    + REN stack (RocksDB + Express js + Node js)
    + Socket.io
- Frontend:
    + Plain old HTML5 + CSS3
    + Socket.io
    + Bootstrap
    

### Dependencies:
- RocksDB
- Node JS
- NPM
- Nodemon(It's a node module)

### Install
```
cd node-slb
npm install
cd public
bower install
cd ..
npm start
``` 

### Model
- app
    + pages
    + api
        - list
        - delete
        - submit
        - update
    + model(RocksDB, using level - a node js module)
- realtime: socket.io for update
