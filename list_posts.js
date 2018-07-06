function sort(order) {
    $.get("article_boilerplate.html", function (raw_page) {
        $(".inner").html("");

        for (i = 0; i < 10; i++) {
            formatted_page = raw_page
                .replace("SOURCE", ("posts/" + i + "/content/thumnail.jpg"))
                .replace("ID", i)

            $.ajax({
                async: false,
                type: 'GET',
                url: "posts/" + i + "/content/info.json",
                success: function (post_data) {
                    post_data = post_data["POST"]
                    formatted_page = formatted_page
                        .replace("TITLE", post_data["TITLE"])
                        .replace("DESCRIPTION", post_data["DESCRIPTION"])

                    if (order == "Newest") {
                        $(".inner").prepend(formatted_page);
                    }
                    if (order == "Oldest") {
                        $(".inner").append(formatted_page);
                    };
                },
            });

        }
    })
}

sort("Newest")