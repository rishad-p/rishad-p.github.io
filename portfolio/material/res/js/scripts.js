
var Drawer = hyDrawer.Drawer;
var ua = navigator.userAgent.toLowerCase();
var isSafari = ua.indexOf('safari') > 0 && ua.indexOf('chrome') < 0;
var isMobileSafari = isSafari && ua.indexOf('mobile') > 0;
window.drawer = new Drawer(window.drawerEl, {
    range: isMobileSafari ? [35, 150] : [0, 150],
    threshold: isSafari ? 0 : 10,
    preventDefault: true,
    mouseEvents: true,
});
window.menuEl.addEventListener('click', function (e) {
    e.preventDefault();
    window.drawer.toggle();
});
      
function load(){
    $('#prog').css('transition','500ms');
    $(".drawer-main-content").css('transition','500ms');
    setTimeout(function(){
        $('#load').css('transition','500ms');
        $('#load').css('background-color','transparent');
        $('#load').css('background-size','1000%');
        $('#load').css('opacity','0%');
        setTimeout(function(){
            $('#load').css('filter','blur(50px)');
            $('#load').hide('slow');
        },100);
    },1000);
    var thi = window.location.hash.slice(1);
    $.ajax(thi+".html").then(function(respons){
        if(thi=='home'){
            window.location="#home";
            $("title").html("Material");
            $('#head').html("");
        }
        else if(thi=='touch'){
            window.location="#get";
            $("title").html("Material | Get in touch");
            //$('#head').html("Get in touch&nbsp;");
        }
        else{
            window.location="#home";
            $("title").html("Material");
            $('#title').html(thi);
        }
        $(".drawer-main-content").empty();
        $(".drawer-main-content").append(respons);
        $(".drawer-main-content").css('opacity','100%');
        $("#prog").css('width','0vw');
    }).fail(function(err){
        $(".drawer-main-content").empty();
        $(".drawer-main-content").append('<h1>'+thi+'</h1><br>'+JSON.stringify(err));
        $(".drawer-main-content").css('opacity','100%');
        $("#prog").css('width','0vw');

        window.location="#"+thi;
        $("title").html("Material | "+thi);
        $('#title').html(thi);
    });
}

$('li').click(function(){
    window.drawer.toggle();
    $('#prog').css('transition','500ms');
    $('#prog').css('width','100vw');
    $(".drawer-main-content").css('transition','500ms');
    $(".drawer-main-content").css('opacity','0%');
    $('li').css('transition','500ms');
    $('li').removeClass('mdc-list-item--activated').addClass('inactive');
    $(this).removeClass('inactive').addClass('mdc-list-item--activated');

    var thi = $(this).attr('data');
    $.ajax(thi+".html").then(function(respons){
        if(thi=='home'){
            window.location="#home";
            $("title").html("Material");
            $('#title').html("Home");
        }
        else{
            window.location="#"+thi;
            $("title").html("Material | "+thi);
            $('#title').html(thi);
        }
        $(".drawer-main-content").empty();
        $(".drawer-main-content").append(respons);
        $(".drawer-main-content").css('opacity','100%');
        $("#prog").css('width','0vw');
    }).fail(function(err){
        $(".drawer-main-content").empty();
        $(".drawer-main-content").append('<h1>'+thi+'</h1><br>'+JSON.stringify(err));
        $(".drawer-main-content").css('opacity','100%');
        $("#prog").css('width','0vw');
        
        window.location="#"+thi;
        $("title").html("Material | "+thi);
        $('#title').html(thi);
    });

});

$('#logout').hide();
$('#screen').hide();
$('#more_horiz').click(function(){
    if($(this).attr('data')=='off'){
        $(this).attr('data','on');
        $(this).css('transform','scale(0)');
        setTimeout(function(){
            $('#more_horiz').html('&#xe14c;');
            $('#more_horiz').css('transform','scale(1)');
        },300);
        $('#logout').show('slow');
        $('#screen').show('slow');
    }
    else if($(this).attr('data')=='on'){
        $(this).attr('data','off');
        $(this).css('transform','scale(0)');
        setTimeout(function(){
            $('#more_horiz').html('&#xe5d3;');
            $('#more_horiz').css('transform','scale(1)');
        },300);
        $('#logout').hide('slow');
        $('#screen').hide('slow');
    }
});
$("#more-vert-btn").click(() =>{
    $("#menu-scrim").css("transform", "translateX(0vw) translateY(0vh)");
    $("#menu-scrim").css("opacity", "100%");
    $("#menu-list").css("width", "120px");
    $("#menu-list").css("height", "209px");
});
$("#menu-scrim").click(() =>{
    $("#menu-scrim").css("opacity", "0%");
    $("#menu-scrim").css("transform", "translateX(100vw) translateY(-100vh)");
    $("#menu-list").css("width", "0px");
    $("#menu-list").css("height", "0px");
});

$("#menu-scrim").on("touchstart", () =>{
    $("#menu-scrim").css("opacity", "0%");
    $("#menu-scrim").css("transform", "translateX(100vw) translateY(-100vh)");
    $("#menu-list").css("width", "0px");
    $("#menu-list").css("height", "0px");
});

function open_data_add_window(){
    $("#data_add_window").css("height", "100vh");
    $("#data_add_window").css("width", "100vw");
    $("#data_add_window").css("top", "0px");
    $("#data_add_window").css("left", "0px");
    $("#data_add_window").css("margin-left", "unset");
    $("#data_add_window").css("margin-top", "unset");
    $("#data_add_window").css("border-radius", "0px");
    $("#add-data-btn").attr("onclick", "close_data_add_window();");
    $("#add-data-btn").attr("class", "mdc-icon-button");
    $("#add-back-icon").html("arrow_back");
    $("#mdc-top-app-bar__section--align-start-add-data").attr("class", "mdc-top-app-bar__section mdc-top-app-bar__section--align-start");
}

function close_data_add_window(){
    $("#data_add_window").css("height", "56px");
    $("#data_add_window").css("width", "56px");
    $("#data_add_window").css("top", "100vh");
    $("#data_add_window").css("left", "100vw");
    $("#data_add_window").css("margin-left", "-71px");
    $("#data_add_window").css("margin-top", "-71px");
    $("#data_add_window").css("border-radius", "100px");
    $("#add-data-btn").attr("onclick", "open_data_add_window();");
    $("#add-data-btn").attr("class", "mdc-fab");
    $("#add-back-icon").html("add");
    $("#mdc-top-app-bar__section--align-start-add-data").attr("class", "");
}

$('#screen').click(function(){
    var elem = document.documentElement;
    if($(this).attr('data')=='off'){
        $(this).html('&#xe5d1;');
        $(this).attr('data','on');

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

    }
    else if($(this).attr('data')=='on'){
        $(this).html('&#xe5d0;');
        $(this).attr('data','off');
        
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
        
    }
});