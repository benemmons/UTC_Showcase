$.getJSON("content/info.json", function (data) {
    data = data["POST"]
    post_author = data["AUTHOR"]
    post_description = data["DESCRIPTION"]
    post_title = data["TITLE"]

    $("#post_author").html(data["AUTHOR"])
    $("#post_description").html(data["DESCRIPTION"])
    $("#post_title").html(data["TITLE"])

})

$("#post_content").load("content/article.html");