var ClickedButton = null;

$(document).on('click', '.light-button', function(e) {
    e.preventDefault();
    var CurrentLightId = $(this)
    DoClick()
    if (CurrentLightId.data('state') == 'off') {
        if (CurrentLightId.data('lightid') == 'orange') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-2");
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Oranje', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Orange', State: true}));
        } else if (CurrentLightId.data('lightid') == 'green') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-3");
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Groen', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Green', State: true}));
        } else if (CurrentLightId.data('lightid') == 'stop') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-4"); 
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Stop', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Stop', State: true}));
        } else if (CurrentLightId.data('lightid') == 'volg') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-4"); 
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Volg', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Follow', State: true}));
        } else if (CurrentLightId.data('lightid') == 'siren') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-1");
            $.post(`https://pepe-els/SetSirens`, JSON.stringify({Bool: true}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Siren', State: true}));
        } else if (CurrentLightId.data('lightid') == 'blue/blue') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-1");
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Blauw', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Blue', State: true}));
        } else if (CurrentLightId.data('lightid') == 'pit') {
            $(this).data('state', 'on')
            $(this).addClass("clicked-light-1");
            $.post(`https://pepe-els/SetLights`, JSON.stringify({Type: 'Pit', State: 0}));
            $.post(`https://pepe-els/RegisterButton`, JSON.stringify({Type: 'Pit', State: true}));
        }
    } else {
        if (CurrentLightId.data('lightid') == 'orange') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-2");
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Oranje', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Orange', State: false}));
        } else if (CurrentLightId.data('lightid') == 'green') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-3");
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Groen', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Green', State: false}));
        } else if (CurrentLightId.data('lightid') == 'stop') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-4"); 
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Stop', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Stop', State: false}));
        } else if (CurrentLightId.data('lightid') == 'volg') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-4"); 
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Volg', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Follow', State: false}));
        } else if (CurrentLightId.data('lightid') == 'siren') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-1");           
            $.post(`http://pepe-els/SetSirens`, JSON.stringify({Bool: false}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Siren', State: false}));
        } else if (CurrentLightId.data('lightid') == 'blue/blue') {
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-1");
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Blauw', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Blue', State: false}));
        } else if (CurrentLightId.data('lightid') == 'pit') { 
            $(this).data('state', 'off')
            $(this).removeClass("clicked-light-1");
            $.post(`http://pepe-els/SetLights`, JSON.stringify({Type: 'Pit', State: 1}));
            $.post(`http://pepe-els/RegisterButton`, JSON.stringify({Type: 'Pit', State: false}));
        }
    }
});

SetupButtonData = function(data) {
    for (const [key, value] of Object.entries(data.buttondata)) {
        if (value == true) {
            if (key == 'Blue') {
                $("#button-1").addClass("clicked-light-1");
                $("#button-1").data('state', 'on')
            } else if (key == 'Orange') {
                $("#button-2").addClass("clicked-light-2");
                $("#button-2").data('state', 'on')
            } else if (key == 'Green') {
                $("#button-3").addClass("clicked-light-3");
                $("#button-3").data('state', 'on')
            } else if (key == 'Stop') {
                $("#button-4").addClass("clicked-light-4");
                $("#button-4").data('state', 'on')
            } else if (key == 'Follow') {
                $("#button-5").addClass("clicked-light-4");
                $("#button-5").data('state', 'on')
            } else if (key == 'Siren') {
                $("#button-6").addClass("clicked-light-1");
                $("#button-6").data('state', 'on')
            } else if (key == 'Pit') {
                $("#button-7").addClass("clicked-light-1");
                $("#button-7").data('state', 'on')
            }
        }
    }
}

ResetAll = function() {
 $('.light-button').removeClass("clicked-light-1");
 $('.light-button').removeClass("clicked-light-2");
 $('.light-button').removeClass("clicked-light-3");
 $('.light-button').removeClass("clicked-light-4");
 $('.light-button').data('state', 'off')
 $('#button-7').fadeOut(150)
 $(".light-containter").css({"width": "55vh", "left": "63vh"})
}

DoClick = function() {
    $.post(`http://pepe-els/Click`, JSON.stringify({}));
}

CloseLightControl = function() {
    $('.light-containter').animate({bottom: "-10vh"}, 250, function() {
        ResetAll()
        $('.light-containter').css("display", "none");
    })
}

OpenLightControl = function(data) {
    console.log(data)
    if (data.isunmarked) {
      $(".light-containter").css({"width": "64vh", "left": "60vh"})
      $('#button-7').fadeIn(50)
    }
    $('.light-containter').css("display", "block");
    $('.light-containter').animate({bottom: "1vh"}, 250)
}

window.addEventListener('message', function(event) {
    switch(event.data.action) {
        case "open":
            SetupButtonData(event.data)
            OpenLightControl(event.data);
            break;
        case "close":
            CloseLightControl(event.data);
            break;
        case "setup":
            SetupButtonData(event.data);
            break;
    }
});

window.onload = function(e) {
  $('#button-7').fadeOut(750)
  $(".light-containter").css({"width": "55vh"})
}