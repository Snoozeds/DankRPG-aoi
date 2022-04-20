# The Guide
Please note that this project mainly for people who want to see the code of DankRPG, and learn from it. I have provided this guide for the people that wish to self host DankRPG, but you will most likely encounter errors. You will have to edit some of the code yourself (e.g removing all top.gg lines, updating emotes).

#### First of all: Note that the current version of the "main" branch is most likely not stable. For the most up-to-date and stable version, download the code from "releases". The latest release will be the latest public version of the bot.

If you wish to continue:
- First update the config.json file.
- Update some of the vars in index.js
- Read through code and change what you'd like to.
- Take note of the [license](https://tldrlegal.com/license/mit-license).

## Hosting DankRPG | Step 1: Picking the correct host
Personally I chose DigitalOcean (though they have pretty STEEP prices), as it was the easiest to use with Github's education pack. But, there are a wide range of hosting options out there.\
Just make sure the one you choose supports: 
- Linux (I recommend **Ubuntu/Other Debian distros**, as they share they same commands.)
- 24/7 hosting 
- (optional) pay as you go.

## Hosting DankRPG | Step 2: Connecting to your host

For Linux users (your personal machine), I recommend **EasySSH** + **FileZilla** for accessing the server. \
For Windows users (your personal machine), I recommend **Bitvise** or **Termius** (termius seems unstable on some of my linux distros.)\
**Note that these are just recommendations from apps that I've used personally. There are countless options out there.**

To use these applications, they will usually ask for a couple of things:
- The host/address: This is the ipv4 address provided by your server provider.
- The username: Usually "root" on linux servers.
- The password: Set by yourself through your hosting provider.
- The port: Usually "22", but check with your hosting provider.

## Hosting DankRPG | Step 3: Downloading dependencies on your host

Assuming you are using **Ubuntu**, run the following commands:

**Installing Nodejs v17 (normal apt version is outdated):** \
```curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -``` \
```sudo apt-get install -y nodejs``` 

**Installing npm (may be outdated):** \
```sudo apt install npm```

**-- Here you want to upload the bot's files to a new folder.** \
\
```mkdir folder_name``` (upload files here through your chosen program) \
```cd folder_name``` \
```npm init``` \
```npm install aoi.js@5.1.2``` \
```npm install pm2 -g``` (this will host the bot 24/7 and install pm2 globally) \
```pm2 start index.js```

**Alternatively:** run ```node index.js``` to see any errors occuring (this will not host the bot 24/7!)

## Extra pm2 commands:
```pm2 restart index.js - restarts the file``` \
```pm2 stop index.js - stops the file``` \
```pm2 ls - lists all processes running```

## Owner-Only commands from DankRPG:
```<prefix>eval <code> - evaluate code to make sure it runs without errors```

## The Future of DankRPG:
I am not interested in monetizing DankRPG. \
However, if you'd like to support the future of this project, feel free to use my DigitalOcean referral code. \
<a href="https://www.digitalocean.com/?refcode=2b52a47c01fc&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" /></a>