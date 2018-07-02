$.getJSON("info.json", function( data) {
    data = data["POST"]
    post_author = data["AUTHOR"]
    post_description = data["DESCRIPTION"]
    post_title = data["TITLE"]

    $("#post_author").html(data["AUTHOR"])
    $("#post_description").html(data["DESCRIPTION"])
    $("#post_title").html(data["TITLE"])

})

$.get( "body.html", function( data ) {
    post_content = data["documentElement"]["innerHTML"];
    $("#post_content").html(post_content);
  });