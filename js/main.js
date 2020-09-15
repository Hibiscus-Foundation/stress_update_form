$(document).ready(function() {
    var image, iHeight, iWidth;
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            body = data[0];
            image = body.url;
            iHeight = body.height;
            iWidth = body.width;
            var elem = document.getElementById('feedback-img')
            elem.setAttribute("src", image);
            if (iHeight > iWidth) {
                elem.classList.add("potrait")
                console.log("potrait")
            } else {
                elem.classList.add("landscape")
                console.log("landscape")
            }
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