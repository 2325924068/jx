!function(a, b) {
	a.DeviceOrientationEvent && a.addEventListener("deviceorientation",
	function(a) {
		a.beta && a.gamma && (b.onmousemove = null);
		var d = (a.beta - 20) / 3,
		e = -a.gamma / 3;
		d = Math.min(d, 20),
		d = Math.max(d, -20),
		e = Math.min(e, 20),
		e = Math.max(e, -20),
		c(d, e)
	},
	!1);
	var c = function(a, b) {
		test.style.cssText = "-webkit-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);-ms-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);transform:rotateX(" + a + "deg) rotateY(" + b + "deg);"
	},
	d = b.documentElement;
	BODY = b.body,
	b.onmousemove = function(a) {
		var b = a.clientX - BODY.offsetWidth / 2;
		b /= 100;
		var e = a.clientY - d.clientHeight / 2;
		e /= 100,
		e = -e,
		c(e, b)
	};
	var e = [0, 700, 2e3, 3100, 3800];
	setTimeout(function() {
		a.onscroll = function() {
			for (var a, b = 0; b < e.length; b++) if (a = e[b], a > Math.max(d.scrollTop, BODY.scrollTop) + d.clientHeight / 2) return d.setAttribute("step", b)
		},
		a.onscroll()
	},
	1e3)
} (this, document);
