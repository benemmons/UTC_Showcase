$(function() {
    var ref = new Firebase("https://yoweather-2bd60.firebaseio.com/"),
      postRef = ref.child(slugify(window.location.pathname));
  
      postRef.on("child_added", function(snapshot) {
        var newPost = snapshot.val();
        $(".comments").prepend('<div class="comment">' +
          '<h4>' + escapeHtml(newPost.name) + '</h4>' +
          '<span class="date">' + moment(newPost.postedAt).fromNow() + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');
      });
  
      $("#comment").submit(function() {
        if (!($("#name").val() == "" || $("#message").val() == "" || $("#name").val().length > 20 || $("#message").val().length > 80)){
            var a = postRef.push();
        
            a.set({
              name: $("#name").val(),
              message: $("#message").val(),
              postedAt: Firebase.ServerValue.TIMESTAMP
            });
      
            $("input[type=text], textarea").val("");
            return false;
        }else{
            alert("Comment is not valid. Is the message or name too long or blank?")
        }

      });
  });
  
  function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/&/g, '-and-')
      .replace(/[\s\W-]+/g, '-')
      .replace(/[^a-zA-Z0-9-_]+/g,'');
  }
  
  
  function escapeHtml(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
  }