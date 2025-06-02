$(document).ready(function () {
    // disableToggle : disabled 클래스를 Toggle 함.
    function disableToggle(tag) {
        if (tag.hasClass("disabled")) {
            tag.removeClass("disabled");
        }
        else {
            tag.addClass("disabled");
        }
    }
    // tag가 disabled 클래스를 가지지 않은 경우 해당 클래스 부여
    function disable(tag) {
        if (tag.hasClass("disabled")) {
        }
        else {
            tag.addClass("disabled");
        }
    }
    // tag가 disabled 클래스를 가진 경우 해당 클래스 삭제
    function enable(tag) {
        if (tag.hasClass("disabled")) {
            tag.removeClass("disabled");
        }
    }
    disable($("#myinfo"));
    disable($(".mainPanel:nth-child(n+3)"));

    var topHeight = $("#myinfo").height() + 30;

    $("#top").css({ height: topHeight + "px" });
    $("#myname")
        .css({ width: ($("#innerText").width() + 10) + "px" })
        .css({ top: (($("#top").height() / 2) - ($("#myname").height() / 2)) + "px", left: 30 + "px" });
    $("#buttonContainer").css({ top: (($("#top").height() / 2) - ($("#buttonContainer").height() / 2)) + "px", right: 30 + "px" });

    $("#mainButton").click(function () {
        disableToggle($("#main"));
        disableToggle($("#myinfo"));
        disableToggle($("#myname"));
        disable($("#career"));
        disable($("#pics"));
    });
    $("#careerButton").click(function () {
        disableToggle($("#career"));
        disable($("#myname"));
        enable($("#myinfo"));
        disable($("#pics"));
        disable($("#main"));
    });
    $("#picsButton").click(function () {
        disableToggle($("#pics"));
        disable($("#myname"));
        enable($("#myinfo"));
        disable($("#career"));
        disable($("#main"));
    });
    $(".button").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    $("a.titleText").hover(function () {
        $(this).addClass("highlight");
    }, function () {
        $(this).removeClass("highlight");
    });

    $("#main").css({ height: ($("#mypic2").height() + 60) + "px" });
    $("#mypic2").css({ top: "30px", left: "30px" });
    $("#mainName").css({ position: "absolute", top: "30px", left: ($("#mypic2").width() + 40) + "px", marginRight: "30px" });
    $("#mainText").css({ position: "absolute", top: ($("#mainName").height() + 30) + "px", left: ($("#mypic2").width() + 40) + "px", marginRight: "30px" });

    $("#career").css({ padding: "30px 60px" });
    $(".careerImage").css({ width: "500px", height: "375px", margin: "10px 0px" });

});