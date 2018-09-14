# Node Nats
This is simple demonstration project on how [Nats.io](https://nats.io/) can be integrated with [Node.js](https://nodejs.org/en/) to build an error logging and alerting pipeline mechanism for any Express/Node/JavaScript based projects

# Pre-requites
1. [Node.js](https://nodejs.org/en/)
2. [NPM - Node Package Manager](https://www.npmjs.com/)
3. [Nats.io](https://nats.io/)

### Tips and Tricks
If you are `Linux` user and well acquainted with [Docker](https://www.docker.com), you can simply set up the Nats Docker container using the following command
```
docker run -p 4222:4222 -p 8222:8222 -p 6222:6222 --name nats-container -it nats:latest
```

# Setting up the project
```
npm install
```

# Running the project
```
node app.js
```
