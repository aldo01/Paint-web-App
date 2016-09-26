var canvas = document.querySelector("#c");
var ctx    = canvas.getContext("2d");

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
  if(dragging) {

  ctx.lineWidth = radius * 2;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2, false);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
  }
};

canvas.addEventListener('mousemove', putPoint, false);
canvas.addEventListener('mouseup', function(e) {
  dragging = false;
  ctx.beginPath();
}, false);
canvas.addEventListener('mousedown', function(e) {
  dragging = true;
  putPoint(e);
}, false);

var rect =document.querySelector("#rect");
	rect.addEventListener('click', function(e) {
  rectangle();
});

var circle1 =document.querySelector("#circle");
	circle1.addEventListener('click', function(e) {
    circle();
});

var clr =document.querySelector("#clear");
	clr.addEventListener('click', function(e) {
    clear();
});

function clear() {
  ctx.clearRect(0, 0,  window.innerWidth, window.innerHeight);
}

var line1 =document.querySelector("#Line");
	line1.addEventListener('click', function(e) {
    line();
});

var text1 =document.querySelector("#Text");
	text1.addEventListener('click', function(e) {
    text();
});



function text() {
    
      console.log("texyt");
    
    var textarea = document.createElement('textarea');
textarea.id = 'Text';
//sketch.appendChild(textarea);
    
     canvas.id = 'canvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	/*sketch.appendChild(canvas);*/

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	/* Mouse Capturing Work */
	canvas.addEventListener('mousemove', function(e) {
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	}, false);
	
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'blue';
	
	canvas.addEventListener('mousedown', function(e) {
		canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
		
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		
		onPaint();
	}, false);
	
	canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
		
		// Writing down to real canvas now
		ctx.drawImage(canvas, 0, 0);
		// Clearing tmp canvas
		//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
	}, false);
    
    
    var onPaint = function() {
     
    // Tmp canvas is always cleared up before drawing.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     
    var x = Math.min(mouse.x, start_mouse.x);
    var y = Math.min(mouse.y, start_mouse.y);
    var width = Math.abs(mouse.x - start_mouse.x);
    var height = Math.abs(mouse.y - start_mouse.y);
     
    textarea.style.left = x + 'px';
    textarea.style.top = y + 'px';
    textarea.style.width = width + 'px';
    textarea.style.height = height + 'px';
     
    textarea.style.display = 'block';
};
    
}



function rectangle() {
	console.log("inside rects");
	/*var canvas = document.querySelector('#paint');*/
	/*var ctx = canvas.getContext('2d');*/
	
	/*var sketch = document.querySelector('#sketch');
	var sketch_style = getComputedStyle(sketch);*/
	/*canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	*/
	
	// Creating a tmp canvas
	/*var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');*/
	canvas.id = 'canvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	/*sketch.appendChild(canvas);*/

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	/* Mouse Capturing Work */
	canvas.addEventListener('mousemove', function(e) {
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	}, false);
	
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'blue';
	
	canvas.addEventListener('mousedown', function(e) {
		canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
		
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		
		onPaint();
	}, false);
	
	canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
		
		// Writing down to real canvas now
		ctx.drawImage(canvas, 0, 0);
		// Clearing tmp canvas
		//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
	}, false);
	
	var onPaint = function() {
		
		// Tmp canvas is always cleared up before drawing.
		ctx.clearRect(0, 0,  window.innerWidth, window.innerHeight);
		
		var x = Math.min(mouse.x, start_mouse.x);
		var y = Math.min(mouse.y, start_mouse.y);
		var width = Math.abs(mouse.x - start_mouse.x);
		var height = Math.abs(mouse.y - start_mouse.y);
		ctx.strokeRect(x, y, width, height);
		
	};
   

}

function circle() {
    canvas.id = 'canvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	/*sketch.appendChild(canvas);*/

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	/* Mouse Capturing Work */
	canvas.addEventListener('mousemove', function(e) {
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	}, false);
	
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'blue';
	
	canvas.addEventListener('mousedown', function(e) {
		canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
		
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		
		onPaint();
	}, false);
	
	canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
		
		// Writing down to real canvas now
		ctx.drawImage(canvas, 0, 0);
		// Clearing tmp canvas
		//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
	}, false);

var onPaint = function() {
 
    // Tmp canvas is always cleared up before drawing.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    var x = (mouse.x + start_mouse.x) / 2;
    var y = (mouse.y + start_mouse.y) / 2;
 
    var radius = Math.max(
        Math.abs(mouse.x - start_mouse.x),
        Math.abs(mouse.y - start_mouse.y)
    ) / 2;
 
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    // tmp_ctx.arc(x, y, 5, 0, Math.PI*2, false);
   ctx.stroke();
    ctx.closePath();
 
};
    
    
}

function line() {
	
	 canvas.id = 'canvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	/*sketch.appendChild(canvas);*/

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	/* Mouse Capturing Work */
	canvas.addEventListener('mousemove', function(e) {
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	}, false);
	
	
	/* Drawing on Paint App */
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = 'blue';
	ctx.fillStyle = 'blue';
	
	canvas.addEventListener('mousedown', function(e) {
		canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
		
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		
		onPaint();
	}, false);
	
	canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
		
		// Writing down to real canvas now
		ctx.drawImage(canvas, 0, 0);
		// Clearing tmp canvas
		//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		
	}, false);
    
    var onPaint = function() {
 
    // Tmp canvas is always cleared up before drawing.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    ctx.beginPath();
    ctx.moveTo(start_mouse.x, start_mouse.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.closePath();
 
};
    
}


(function($) {
  var tool;
  var canvas = $('paint');
  var ctx = canvas.getContext('2d');
  
  var history = {
    redo_list: [],
    undo_list: [],
    saveState: function(canvas, list, keep_redo) {
      keep_redo = keep_redo || false;
      if(!keep_redo) {
        this.redo_list = [];
      }
      
      (list || this.undo_list).push(canvas.toDataURL());   
    },
    undo: function(canvas, ctx) {
      this.restoreState(canvas, ctx, this.undo_list, this.redo_list);
    },
    redo: function(canvas, ctx) {
      this.restoreState(canvas, ctx, this.redo_list, this.undo_list);
    },
    restoreState: function(canvas, ctx,  pop, push) {
      if(pop.length) {
        this.saveState(canvas, push, true);
        var restore_state = pop.pop();
        var img = new Element('img', {'src':restore_state});
        img.onload = function() {
          ctx.clearRect(0, 0, 600, 400);
          ctx.drawImage(img, 0, 0, 600, 400, 0, 0, 600, 400);  
        }
      }
    }
  }


