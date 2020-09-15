var curHeight;
var curWidth;

$(document).ready(function() {
    var image;
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            image = data.message;
            var elem = document.getElementById('feedback-img')
            elem.onload = function() {
                curHeight = this.height;
                curWidth = this.width;
            };
            elem.setAttribute("src", image);
        })
        .then(console.log(curHeight, curWidth))
        .catch(err => {
            console.error(err)
        });
});

function fetchRadio() {
    var x = $("input[type='radio'][name='stress_level']:checked").val();
    var y = document.getElementById("stess-value");
    y.value = x;
}(jQuery);

(function($) {
    "use strict";
    $(".form-radio .radio-item").click(function() {
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
})(jQuery);