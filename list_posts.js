$.get("article_boilerplate.html", function(raw_page) 
{
    for (i=2; i>0; i--) 
    { 
        formatted_page = raw_page
            .replace("SOURCE", ("posts/" + i + "/thumnail.jpg"))
            .replace("ID", i)
            console.log("Before", formatted_page)
        
        $.ajax({
            async: false,
            type: 'GET',
            url: "posts/" + i + "/info.json",
            success: function(post_data) {
                post_data = post_data["POST"]
                console.log("After", formatted_page)
                formatted_page = formatted_page                   
                                    .replace("TITLE", post_data["TITLE"])
                                    .replace("DESCRIPTION", post_data["DESCRIPTION"])
                $(".inner").prepend(formatted_page);
            }
        });
            
    }
})





// loads in reverse order for some reason.