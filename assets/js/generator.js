document.getElementById("submitButton").onclick = function() {
    postAuthor = document.getElementById("author").value
    postTitle = document.getElementById("title").value
    postContent = document.getElementById("content").value
    
    postHTML = "test" /* add actual generation */

    download(postTitle, postHTML)

  };

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}