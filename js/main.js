$(document).ready(function() {
    var image, iHeight, iWidth;
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            body = data[0];
            image = body.url;
            if (image) {
                iHeight = body.height;
                iWidth = body.width;
                var elem = document.getElementById('feedback-img');
                if (image.slice(-3) == "gif")
                    elem.setAttribute("src", "./../doggo.jpg");
                else elem.setAttribute("src", image);
                if (iHeight > iWidth)
                    elem.classList.add("potrait");
                else
                    elem.classList.add("landscape");
            } else {
                var elem = document.getElementById('feedback-img');
                elem.setAttribute("alt", "I can't find my doggo friends just yet! Please reload! Woof!")
            }
        })
        .catch(err => {
            console.error(err)
        });
    document.getElementById("submit").addEventListener("click", fetchRadio());
    document.getElementById("submit").addEventListener("click", fetchRadio2());

});

function fetchRadio() {
    var x = $("input[type='radio'][name='stress_level']:checked").val();
    var y = document.getElementById("stess-value");
    y.value = x;
}(jQuery);

function fetchRadio2() {
    var x = $("input[type='radio'][name='hstress_level']:checked").val();
    var y = document.getElementById("hibi-stess-value");
    y.value = x;
}(jQuery);

(function($) {
    $(".form-radio-tot .radio-item-tot").click(function() {
        $(this).parent().find(".radio-item-tot").removeClass("active");
        $(this).addClass("active");
    });

})(jQuery);

(function($) {
    $(".form-radio-hibi .radio-item-hibi").click(function() {
        $(this).parent().find(".radio-item-hibi").removeClass("hactive");
        $(this).addClass("hactive");
    });
})(jQuery);