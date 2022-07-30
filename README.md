## Forewarning: Always download the latest version from "Releases". The main branch will be unstable.

# The Guide
Please note that this project mainly for people who want to see the code of DankRPG, and learn from it. I have provided this guide for the people that wish to self host DankRPG, but you will most likely encounter errors. You will have to edit some of the code yourself.

If you wish to continue:
- First update the config.json file.
- Update some of the vars in index.js
- Read through code and change what you'd like to.
- Take note of the [license](https://tldrlegal.com/license/mit-license).

## Hosting DankRPG | Step 1: Picking the correct host
There are multiple providers out there, with some even offering free credit. Choose what suits you best.\
You could also use an online IDE, like replit. Though these will usually not allow root access.\
Just make sure the one you choose supports: 
- Linux (I recommend Ubuntu/Debian distros. I will be mentioning Ubuntu commands below.)
- 24/7 hosting 
- (optional) pay as you go.

## Hosting DankRPG | Step 2: Connecting to your host
You should skip this step when using an online IDE.

For Linux users (your personal machine), I recommend **EasySSH** + **FileZilla** or **Termius** for accessing the server. \
For Windows users (your personal machine), I recommend **Bitvise** or **Termius**.

To use these applications, they will usually ask for a couple of things:
- The host/address: This is the ipv4 address provided by your hosting provider.
- The username: Usually "root" on linux servers.
- The password: Set by yourself through your hosting provider.
- The port: Usually "22", but check with your hosting provider.

## Hosting DankRPG | Step 3: Downloading dependencies on your host

Assuming you are using **Ubuntu**, run the following commands:

**Installing Nodejs v18 (normal apt version is outdated):** \
```curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -``` \
```sudo apt-get install -y nodejs``` 

**Installing npm (if you do not have it included with Nodejs):** \
```sudo apt install npm```

**-- Here you want to upload the bot's files to a new folder.** \
\
```mkdir folder_name``` (upload files here through your chosen program) \
```cd folder_name``` \
```npm init``` \
```npm install aoi.js@5.5.5``` \
```npm install pm2 -g``` (this will host the bot 24/7 and install pm2 globally) \
```pm2 start index.js```

**Alternatively:** run ```node index.js``` to see any errors occuring (this will not host the bot 24/7!)

## Extra pm2 commands:
```pm2 restart index.js - restarts the file``` \
```pm2 stop index.js - stops the file``` \
```pm2 ls - lists all processes running```

## Owner-Only commands from DankRPG:
```<prefix>eval <code> - evaluate code to make sure it runs without errors``` \
```<prefix>addcoins <user> <amount>``` \
```<prefix>refresh - updates changed commands, instead of restarting the entire process.```
