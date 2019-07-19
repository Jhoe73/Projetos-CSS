var offset = 0, startX;
var cube = document.querySelector('.cube'), 
		drag = false, x0, y0, 
		s = document.createElement('style');

document.body.appendChild(s);

addEventListener('mousedown', function(e) {	
	if(e.target.classList.contains('cube__face')) {
		x0 = e.clientX;
		y0 = e.clientY;
		drag = true;
	}
}, false);

addEventListener('mouseup', function(e) {
	if(drag) drag = false;
}, false);

addEventListener('mousemove', function(e) {
	var x, y, dx, dy, d, t, i, j, a;
		
	if(drag) {
		x = e.clientX;
		y = e.clientY;
		dx = x - x0;
		dy = y - y0;
		x0 = x;
		y0 = y;
		d = Math.hypot(dx, dy);
		t = getComputedStyle(cube).transform;
		t = t.replace('none', '');
		i = (-dy/d).toFixed(5);
		j = (dx/d).toFixed(5);
		a = (.5*d).toFixed(5);
		t = 'rotate3d(' + [i, j, 0, a] + 'deg)' + t;
		s.textContent = '.cube{transform:' + t + '}';
	}
}, false);