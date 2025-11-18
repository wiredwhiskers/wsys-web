//Change this to your local base directory if you have downloaded this site
const baseDir = ""

// This js just cuts down on the commonly used code in the site i guess?
// gonna see if this means i have to write less when i make new pages
// also serves as a good way to test what i can do with js to help headmates make their pages easier

//establish head and body tag for appending content
var head = document.getElementById("dynhead");
var body = document.getElementById("dynbody");

var currentFullPath = window.location.href; // get path for script relativity
var currentProtocol = window.location.protocol;
var currentPath = currentFullPath.substring(currentProtocol.length + 2);

if(currentProtocol==="file:"){
    currentPath = currentPath.substring(baseDir.length);
}

var pathSlashCount = currentPath.match(/\//g).length - 1;
var relativePathInj = "";

//determine if path needs relativity
if(pathSlashCount !== 0){
    for(let i = 0; i < pathSlashCount; i++){
        relativePathInj += "../"
    }
}

head.insertAdjacentHTML("afterbegin",`
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="${relativePathInj}images/favicon.ico">
    <link rel="stylesheet" href="${relativePathInj}style.css">
`);

body.insertAdjacentHTML("afterbegin",`
<nav id="nav">
    <div>
        <p>Wsys</p>
    </div>
    <ul>
        <li>
            <a href="${relativePathInj}index.html">Home</a>
        </li>
        <li>
            <a href="${relativePathInj}members/members.html">Members</a>
        </li>
        <li>
            <a href="${relativePathInj}links.html">Links</a>
        </li>
    </ul>
</nav>
`);
