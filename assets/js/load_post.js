id = getAllUrlParams().id;

// firebase get from id
var get_post_content = new XMLHttpRequest();
get_post_content.open("GET", "../posts/" + id + "/post.html", true);

var get_post_details = new XMLHttpRequest();
get_post_details.open("GET", "../posts/" + id + "/post.html", true);

// set elements to firebase components

post_title = document.getElementById("post_title");
post_description = document.getElementById("post_description");
post_author = document.getElementById("post_author");
post_content = document.getElementById("post_content");

post_title = get_post_details.responseText.split("/n")[0];
post_description = get_post_details.responseText.split("/n")[1];
post_author = get_post_details.responseText.split("/n")[2];
post_content = get_post_content.responseText;