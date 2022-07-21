
# CFX Finder Discord Bot

A simple to use discord bot to lookup information about fivem servers coded in JavaScript.
* Server IP and Port
* Server Name
* Players (online/max)
* Resources
* enhancedHostSupport, requestSteamTicket, Onesync







## Requirements

* [Nodejs Download](https://nodejs.org/en/)
* A code editing program such as [Visual Studio Code](https://code.visualstudio.com/)


## Setting up the project

First of all, if you're using Visual Studio Code there should be a button 'Terminal' in the top left, click it and then click 
'New Terminal'. You should see a terminal at the bottom. Next write these commands into the terminal
```bash
npm init -y
npm install discord.js dotenv
npm install request
```
If you get any errors, close the application and reopen it as an administrator.

After successfully installing everything make a new file called '**index.js**', which is the main file of your discord bot. Copy and paste or replace the code from my index.js file to yours. Create another file '**.env**' which is going to be where you store your discord token.

Type this into the .env file
```bash
TOKEN=COPY AND PASTE YOUR TOKEN HERE
```


## Running the project

To run your project, type this into your terminal
```bash
node index.js
```
This part is optional but, you can also add this into your package.json -> scripts 
```bash
"dev": "nodemon index.js"
```
You need to install nodemon by typing 'npm install nodemon' into the terminal, if you want to do this.
This makes it so everytime you save your file it updates automatically without you having to restart the bot.

Run this in your terminal to activate.
```bash
npm run dev
```
