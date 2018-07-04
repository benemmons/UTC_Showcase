$.get("article_boilerplate.html", function(raw_page) {
    for (i=0; i+=1; i<=2) { 
            $.getJSON("posts/" + i + "/info.json", function(data){
                post_content = data["POST"];
                post_author = post_content["AUTHOR"]
                post_description = post_content["DESCRIPTION"]
                post_title = post_content["TITLE"]
                $(".inner").prepend(raw_page
                    .replace("SOURCE", "posts/" + i + "/thumnail.jpg")
                    .replace("TITLE", post_title)
                    .replace("DESCRIPTION", post_description)
                    .replace("ID", i))
                })   
        }
})
