const choiseButton = $('#choise-button');

// Functions
function open() {
    choiseButton.fadeOut("slow", function () {
        $("#container").fadeIn();
        TweenMax.from("#container", .4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to("#container", .4, { scale: 1, ease: Sine.easeInOut });
    });

    $('html').append('<style>html:before{filter: blur(5px); transform: scale(1.5);}</style>');
}

function close() {
    TweenMax.from("#container", .4, { scale: 1, ease: Sine.easeInOut });
    TweenMax.to("#container", .4, { left: "0px", scale: 0, ease: Sine.easeInOut });
    $("#container, #forgotten-container").fadeOut(800, function () {
        $("#choise-button").fadeIn(800);
    });
    $('html').append('<style>html:before{filter: blur(0);transform: scale(1.2);}</style>');
    $('.check').css('display', 'none');
    $('.continue').css('display', 'block');
    $('.password').css('display', 'none');
    $('.username').css('display', 'block');
    $('.login-img').css('background-image', 'url("assets/img/user-default.svg")');
    $('.login-username').css('display', 'none');
}

// Key Event
$("html").keydown(function (e) {
    if (e.keyCode == 13 && choiseButton.css("display") == "block") {
        open();
    }
});

$("html").keydown(function (e) {
    if (e.keyCode == 27 && choiseButton.css("display") == "none") {
        close();
    }
});

// Click Event
choiseButton.click(function () {
    open();
});

$(".close-btn").click(function () {
    close();
});

// Form Input Click Event
$('.continue').click(function () {
    $('.check').css('display', 'block');
    $('.continue').css('display', 'none');
    $('.password').css('display', 'block');
    $('.username').css('display', 'none');
    $('.login-img').css('background-image', 'url("assets/img/user-img.jpg")');
    $('.login-username').css('display', 'block');
});

$('.check').click(function () {
    $('.model').css('visibility', 'visible');
    $('.model').css('left', '50%');
});

// Model Button Event
$('.close-model').click(function () {
    $('.model').css('visibility', 'hidden');
    $('.model').css('left', '-100%');
});