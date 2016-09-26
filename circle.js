var start_mouse = {x: 0, y: 0};
// ...
tmp_canvas.addEventListener('mousedown', function(e) {
    tmp_canvas.addEventListener('mousemove', onPaint, false);
 
    mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
    mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
 
    start_mouse.x = mouse.x;
    start_mouse.y = mouse.y;
 
    onPaint();
}, false);

var onPaint = function() {
 
    // Tmp canvas is always cleared up before drawing.
    tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
 
    tmp_ctx.beginPath();
    tmp_ctx.moveTo(start_mouse.x, start_mouse.y);
    tmp_ctx.lineTo(mouse.x, mouse.y);
    tmp_ctx.stroke();
    tmp_ctx.closePath();
 
};