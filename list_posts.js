$.get("article_boilerplate.html", function(raw_page) 
{
    for (i=2; i>0; i--) 
    { 
        formatted_page = raw_page
            .replace("SOURCE", ("posts/" + i + "/thumnail.jpg"))
            .replace("ID", i)
            console.log("Before", formatted_page)
        $.getJSON("posts/" + i + "/info.json",function(post_data){
            post_data = post_data["POST"]
            console.log("After", formatted_page)
            formatted_page = formatted_page                   
                                .replace("TITLE", post_data["TITLE"])
                                .replace("DESCRIPTION", post_data["DESCRIPTION"])
            $(".inner").prepend(formatted_page)
          });
    }
})
// The loop continues whilst the loop is running, breaking the correct thumnail and ID being set. A direct AJAX call needs to be implemented with Async set to False.





