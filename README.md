# node-slb

A simple leaderboard using RocksDB for storage.

### Features(SO FAR):
- Simple Leaderboard
- Supports creation of (name, score) tuples (STILL HARDCODED)
- Supports the deletion of elements

### High priority:
- Update mechanism, like votes and such

### Objectives:
- Highly configurable leaderboard (ETC - 20/07)
- Realtime update (ETC - 20/07)
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