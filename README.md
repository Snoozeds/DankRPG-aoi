# If you want to download the source code, please download it from 'releases'.

# How to host Dank RPG (on a server)
**Before all of this, make sure you update the "config.json" file!!!**

## Step 1: Picking the correct host
Personally I chose DigitalOcean (though they have pretty STEEP prices), as it was the easiest to use with Github's education pack. But, there are a wide range of hosting options out there.\
Just make sure the one you choose supports: 
- Linux (I recommend **Ubuntu/Other Debian distros**, as they share they same commands.)
- 24/7 hosting 
- (optional) pay as you go.

## Step 2: Connecting to your host

For linux users (your personal machine), I recommend **Termius** or **Your OS's terminal** (using ssh) for accessing the server. \
For Windows users (your personal machine), I recommend **Bitvise** or **Termius**\
**Note that these are just recommendations from apps that I've used personally. There are countless options out there.**

To use these applications, they will usually ask for a couple of things:
- The host/address: This is the ipv4 address provided by your server provider.
- The username: Usually "root" on linux servers.
- The password: Set by yourself through your hosting provider.
- The port: Usually "22", but check with your hosting provider.

## Step 3: Downloading dependencies on your host

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
```npm install aoi.js@4.6.0``` (if you get any missing module errors, install the modules) \
```npm install pm2 -g``` (this will host the bot 24/7 and install pm2 globally) \
```pm2 start index.js```

**Alternatively:** run ```node index.js``` to see any errors occuring (this will not host the bot 24/7!)

## Extra pm2 commands:
```pm2 restart index.js - restarts the file``` \
```pm2 stop index.js - stops the file``` \
```pm2 ls - lists all processes running```

Feel free to contact me on [Discord](https://discord.com/users/764564962815115267) if you need any help.

## If you'd like to support me please check out these links:
<a href="https://www.digitalocean.com/?refcode=2b52a47c01fc&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">DigitalOcean (<b>REFERRAL</b>)</a> \
<a href="https://dankrpg.xyz/donate">WidgetBot (Actual money in my pocket)</a>
<a href="https://paypal.me/snoozeds">Direct paypal (any amount)</a>
