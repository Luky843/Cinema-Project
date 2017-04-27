// JavaScript source code
charset = "utf-8";
$(document).ready(function(){

		var a={x:40.0, y:50.0};
		var b={x:200.0, y:150.0};
		var c={x:30, y:180};
		var cc = document.getElementById("canvas");
     
	function paintXY(){
		 var ctx = cc.getContext("2d");
		 ctx.moveTo(0, 300);
		 ctx.lineTo(600, 300);
		 ctx.moveTo(300, 0);
		 ctx.lineTo(300, 600);
		 ctx.stroke();
   }

   paintXY();

   $( "#btnLeft" ).click(function() {

   		var alfa=Math.atan(a.y/a.x) + (Math.PI/30.0);
   		if(a.x<0)
   			alfa=(Math.PI+alfa);
  
   		var d=Math.sqrt(a.x*a.x+a.y*a.y);
   		a.x=d*Math.cos(alfa);
   		a.y=d*Math.sin(alfa);
 		console.log('uhol = '+alfa);
 	    
 	    alfa=Math.atan(b.y/b.x) + (Math.PI/30.0);;
   		if(b.x<0)
   			alfa=(Math.PI+alfa);
   	    d=Math.sqrt(b.x*b.x+b.y*b.y);
   		b.x=d*Math.cos(alfa);
   		b.y=d*Math.sin(alfa);

		alfa=Math.atan(c.y/c.x) + (Math.PI/30.0);;
   		if(c.x<0)
   			alfa=(Math.PI+alfa);
   	    d=Math.sqrt(c.x*c.x+c.y*c.y);
   		c.x=d*Math.cos(alfa);
   		c.y=d*Math.sin(alfa);

   		Triangle();
   });
   
   $( "#btnRight" ).click(function() {

   		var alfa=Math.atan(a.y/a.x) + (Math.PI/30.0);
   		if(a.x>0)
   			alfa=(Math.PI+alfa);
  
   		var d=Math.sqrt(a.x/a.x+a.y/a.y);
   		a.x=d*Math.cos(alfa);
   		a.y=d*Math.sin(alfa);
 		console.log('uhol = '+alfa);
 	    
 	    alfa=Math.atan(b.y*b.x) + (Math.PI/30.0);;
   		if(b.x>0)
   			alfa=(Math.PI-alfa);
   	    d=Math.sqrt(b.x/b.x-b.y/b.y);
   		b.x=d*Math.cos(alfa);
   		b.y=d*Math.sin(alfa);

		alfa=Math.atan(c.y*c.x) + (Math.PI/30.0);;
   		if(c.x>0)
   			alfa=(Math.PI-alfa);
   	    d=Math.sqrt(c.x/c.x-c.y/c.y);
   		c.x=d*Math.cos(alfa);
   		c.y=d*Math.sin(alfa);

   		Triangle();
   });

   function Triangle(){
		var ctx = cc.getContext("2d");
   		ctx.clearRect(0,0,600,600);
   		ctx.beginPath();
   		paintXY();

   		ctx.moveTo(300+a.x, 300-a.y);
        ctx.lineTo(300+b.x, 300-b.y);
        ctx.lineTo(300+c.x, 300-c.y);
        ctx.lineTo(300+a.x, 300-a.y);
        ctx.stroke();
		ctx.fillStyle = "#FFCC00";
		ctx.fill();
   }
   
   function clearCanvas(context, canvas) {
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		var w = canvas.width;
		canvas.width = 1;
		canvas.width = w;
}
});

	function newLine() {
		//x line
		var x = document.getElementById('canvas');
		var ctx = x.getContext("2d");
		ctx.moveTo(0, 300);
		ctx.lineTo(600, 300);
		ctx.moveTo(300, 0);
		ctx.lineTo(300, 600);
		ctx.stroke();
}

function clearCanvas(context, canvas) {
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		var w = canvas.width;
		canvas.width = 1;
		canvas.width = w;
}