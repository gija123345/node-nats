# Building Nats-Container and Running it

docker run -d -p 4222 -p 8222 -p 6222 --name nats-container -it nats 


# In case the container is already build, just start the container

docker start nats-container


# Installing NPM Dependencies

npm install


# Running server file

node app.js