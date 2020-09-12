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


// function submitForm() {
//     var formName = document.getElementById('name');
//     var formTeam = document.getElementById('team');
//     var formStress = document.getElementById('form-radio');
//     var formOther = document.getElementById('other');

//     var formData = {
//         name: formName.value,
//         team: formTeam.value,
//         stress: formStress.find("active").value,
//         other: formOther.value
//     }

//     var jsonFormData = JSON.stringify(formData);
//     console.log(jsonFormData)
// }

(function($) {
    "use strict";
    $(".form-radio .radio-item").click(function() {
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
})(jQuery);