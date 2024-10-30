# os-manager
React web application that collects and simplifies various organisational aspects of the graduation year in one place.
## Installation
Clone the repository to your local computer. You must then install all node.js dependencies in the client and server folders.
```
cd os-manger/client
npm install

cd ../server
npm install
```
In order to build the application you need to install **yarn** and **nodemon** on your machine. *(You may need root privileges.)*
```
npm install -g yarn
npm install -g nodemon
```
## Build and Run
Before starting the server for the first time, you need to build the client into your server folder. You can use `startscript.sh` to do so.
```
cd os-manager
chmod u+x startscript.sh
./startscript.sh
```
After building the client once, you do not need to build it again. *(Except after changes were made to the client.)* From now on, you can start the server by `npm run start` in your server folder instead. 