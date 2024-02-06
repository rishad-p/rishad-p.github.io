document.addEventListener("contextmenu",function(e){e.preventDefault();},false);document.addEventListener("keydown",function(e){if(e.ctrlKey&&e.shiftKey&&e.keyCode==73){disabledEvent(e);}if(e.ctrlKey&&e.shiftKey&&e.keyCode==74){disabledEvent(e);}if(e.keyCode==83&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)){disabledEvent(e);}if(e.ctrlKey&&e.keyCode==85){disabledEvent(e);}if(event.keyCode==123){disabledEvent(e);}},false);function disabledEvent(e){if(e.stopPropagation){e.stopPropagation();}else if(window.event){window.event.cancelBubble=true;}e.preventDefault();return false;}

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
    $('#prog').css('width','0vw');
    $(".drawer-main-content").css('transition','500ms');
    $(".drawer-main-content").css('opacity','100%');

            var str = window.location.hash.slice(1);
            if(str=='studio'){
                var thi='stud';
            }
            else if(str=='graphics'){
                var thi='graph';
            }
            else if(str=='branding'){
                var thi='brand';
            }
            else if(str=='get'){
                var thi='touch';
            }
            else{
                var thi='home';
            }
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
            //$('#head').html("");
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
            // $('#head').html("");
        }
        else{
            window.location="#"+thi;
            $("title").html("Material | "+thi);
            // $('#head').html("");
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
    });

});

$('#logout').hide();
$('#screen').hide();
$('#more').click(function(){
    if($(this).attr('data')=='off'){
        $(this).attr('data','on');
        $(this).css('transform','scale(0)');
        setTimeout(function(){
            $('#more').html('&#xe14c;');
            $('#more').css('transform','scale(1)');
        },300);
        $('#logout').show('slow');
        $('#screen').show('slow');
    }
    else if($(this).attr('data')=='on'){
        $(this).attr('data','off');
        $(this).css('transform','scale(0)');
        setTimeout(function(){
            $('#more').html('&#xe5d3;');
            $('#more').css('transform','scale(1)');
        },300);
        $('#logout').hide('slow');
        $('#screen').hide('slow');
    }
});
$('#screen').click(function(){
    if($(this).attr('data')=='off'){
        $(this).html('&#xe5d1;');
        $(this).attr('data','on');
    }
    else if($(this).attr('data')=='on'){
        $(this).html('&#xe5d0;');
        $(this).attr('data','off');
    }
});

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}