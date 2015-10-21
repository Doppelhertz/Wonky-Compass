/**
 * Created by Lynz on 15-10-20.
 */
/**
 * Created by Lynz on 15-09-21.
 */



window.ondevicemotion = function(event){

    //console.log(event.accelerationIncludingGravity.x);

    //with gravity
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    //document.getElementById('x').innerHTML = x.toFixed(0);
    //document.getElementById('y').innerHTML = y.toFixed(0);
    //document.getElementById('z').innerHTML = z.toFixed(0);

    //without gravity
    //var x2 = event.acceleration.x;
    //var y2 = event.acceleration.y;
    //var z2 = event.acceleration.z;
    //document.getElementById('x2').innerHTML = x2.toFixed(0);
    //document.getElementById('y2').innerHTML = y2.toFixed(0);
    //document.getElementById('z2').innerHTML = z2.toFixed(0);

    //without gravity
    //var x3 = ((x - x2) + 10) * 50;
    //var y3 = Math.abs((((y - y2) + 10) * 50) - 1000);
    //var z3 = z - z2;
    //document.getElementById('x3').innerHTML = x3.toFixed(0);
    //document.getElementById('y3').innerHTML = y3.toFixed(0);
    //document.getElementById('z3').innerHTML = z3.toFixed(0);
    //
    //document.getElementsByClassName('red-box')[0].style.left = x3 + 'px';
    //document.getElementsByClassName('red-box')[0].style.top = y3 + 'px';

    document.getElementsByClassName('arrow')[0].style.transform = '' +
    'rotateX('+ x.toFixed(0)*36+'deg) rotateY('+y.toFixed(0)*36+'deg) rotateZ('+z.toFixed(0)*36+'deg)';
};

/** the above number indicates how many decimal places */