var main = function () {
    "use strict";

    var addCommentFromInputBox = function (x) {
        var $new_comment;

        if (x == ".comment-input input") {
         if ($(".comment-input input").val() !== "") {
             $new_comment = $("<p>").text($(".comment-input input").val());
             $new_comment.hide();
             $(".comments").append($new_comment);
             $new_comment.fadeIn();
             $(".comment-input input").val("");
           }
         }

        else if(x == ".comment-input1 input")
         if ($(".comment-input1 input").val() !== "") {
             $new_comment = $("<p>").text($(".comment-input1 input").val());
             $new_comment.hide();
             $(".comments1").append($new_comment);
             $new_comment.fadeIn();
             $(".comment-input1 input").val("");
           }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox(".comment-input button");
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox(".comment-input input");
        }
    });

    $(".comment-input1 button").on("click", function (event) {
        addCommentFromInputBox(".comment-input1 button");
    });

    $(".comment-input1 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox(".comment-input1 input");
        }
    });
};

$(document).ready(main);
