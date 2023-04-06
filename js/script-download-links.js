
const repoOwner = 'OctoPi-Team';
const repoName = 'OctoPi-Website';
const folderPath = 'files';

function getFile(fileObject){
    const downloadLink = document.createElement('a');
    downloadLink.href = fileObject.download_url;
    const button = document.createElement('button');
    button.classList.add('button-file');
    const btn_div = document.createElement('div');
    btn_div.classList.add('btn');

    const img = document.createElement('img');
    img.src = '../img/Download.png';
    btn_div.appendChild(img);
    btn_div.appendChild(document.createTextNode(fileObject.name));

    button.appendChild(btn_div);
    downloadLink.appendChild(button);
    downloadLink.appendChild(document.createElement("br"));
    return downloadLink;
}

// fetch list of files in the specified folder through the GitHub API
fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`)
.then(response => response.json())
.then(files => {
    const main_container = document.getElementById("main");
    files.forEach(file => {
        main_container.appendChild(getFile(file));
    });
})
.catch(error => {
    console.error(`Error fetching files: ${error.message}`);
});