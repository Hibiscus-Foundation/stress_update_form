$(document).ready(function() {
    var image;
    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(data => {
            image = data.url;
            var elem = document.getElementById('feedback-img')
            elem.setAttribute("src", image);
        })
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