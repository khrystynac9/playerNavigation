document.getElementById('player').style.top = '300px';
document.getElementById('player').style.left = '300px';


document.body.onkeydown = function (e) {
    var el = document.getElementById('player');

    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_SPACE = 32;
    var KEYCODE_ENTER = 13;
    var limit = el.getBoundingClientRect();

    if (limit.x > 0 && limit.x < 800 && limit.y > 0 && limit.y < 800) {
        switch (e.keyCode) {
            case KEYCODE_LEFT:
                el.style.left = (parseInt(el.style.left) - 10) + 'px';
                break;
            case KEYCODE_RIGHT:
                el.style.left = (parseInt(el.style.left) + 10) + 'px';
                break;
            case KEYCODE_UP:
                el.style.top = (parseInt(el.style.top) - 10) + 'px';
                break;
            case KEYCODE_DOWN:
                el.style.top = (parseInt(el.style.top) + 10) + 'px';
                break;
            case KEYCODE_SPACE:
                var image = document.createElement("img");
                image.setAttribute("src", "fire3.png");
                image.setAttribute("class", "myimage");
                var parent = document.getElementById("player");
                parent.appendChild(image);
                parent.style.backgroundColor = "rgb(255, 255, 255)";
                setTimeout(function(){
                    parent.removeChild(image);
                    parent.style.backgroundColor = "rgb(245, 37, 37)";
                }, 500)
                break; 
            case KEYCODE_ENTER:  
                var bomb = document.createElement("img");
                bomb.setAttribute("src", "image5.gif");
                bomb.setAttribute("style", "width: 60px; height: 60px");
                bomb.setAttribute("class", "myimage");
                bomb.setAttribute("id", "myBomb");
                var parent = document.getElementById("player");
                parent.appendChild(bomb);
                var bombPosition = document.getElementById("myBomb");
                bombPosition.style.left = 0;
                var bombDistance = 0;
                var timer = setInterval(function() {
                    bombDistance+= 50;
                    bombPosition.style.left = bombDistance + "px";
                }, 200);
                setTimeout(function() {
                    clearInterval(timer);
                    parent.removeChild(bomb);
                }, 1000);
                break; 
        }
    } else {
        alert("ви вийшли за межі дозволеного");
        el.style.left = "300px";
        el.style.top = "300px"
    }

    // if (limit.x > 0 && limit.x < 600 && limit.y > 0 && limit.y < 600) {
    //     if (e.keyCode == KEYCODE_LEFT) {
    //         el.style.left = (parseInt(el.style.left) - 10) + 'px';
    //     }
    //     else if (e.keyCode == KEYCODE_RIGHT) {
    //         el.style.left = (parseInt(el.style.left) + 10) + 'px';
    //     } else {
    //             if (e.keyCode == KEYCODE_UP) {
    //                 el.style.top = (parseInt(el.style.top) - 10) + 'px';
    //             } else if (e.keyCode == KEYCODE_DOWN) {
    //                 el.style.top = (parseInt(el.style.top) + 10) + 'px';
    //             }
    //         }
    // } else {
    //         alert("написніть клавіші для руху");
    //         el.style.left = "300px";
    //         el.style.top = "300px"
    // }


}