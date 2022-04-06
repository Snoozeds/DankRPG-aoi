module.exports = ({
name: "meme",
$if: "v4",
code: `
$addButton[1;$replaceText[$getObjectProperty[numComments];undefined;0];primary;comments;yes;💬]
$addButton[1;$replaceText[$getObjectProperty[downvotes];undefined;0];danger;downvotes;yes;⬇]
$addButton[1;$replaceText[$getObjectProperty[upvotes];undefined;0];success;upvotes;yes;⬆]
$footer[1;From r/memes]
$title[1;$getObjectProperty[title];$getObjectProperty[url]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$replaceText[$replaceText[$checkContains[$getObjectProperty[image];https://v.redd.it/];true;];false;$image[1;$getObjectProperty[image]]]
$if[$checkContains[$getObjectProperty[image];https://v.redd.it/]==false]
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=memes]]
$endIf
$if[$checkContains[$getObjectProperty[image];https://v.redd.it/]==false]
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=memes]]
$endIf
$createObject[$jsonRequest[https://cryptons-api.herokuapp.com/api/v1/reddit?subreddit=memes]]
$globalCooldown[5s;Please wait **%time%** to use this command again.]`
})