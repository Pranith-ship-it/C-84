canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width=120;
car_1_height=70;
car_1_image="https://tse3.mm.bing.net/th?id=OIP.c31e3rJWzbdIzQm2kyRA3QHaE6&pid=Api&P=0&w=243&h=162";
car_1_x=10;
car_1_y=10;

car_2_width=120;
car_2_height=70;
car_2_image="https://tse2.mm.bing.net/th?id=OIP.RgP22fN5lWCAAZ_YQxsNbQHaHa&pid=Api&P=0&w=300&h=300";
car_2_x=10;
car_2_y=100;

background_image="https://tse3.mm.bing.net/th?id=OIP.ug0NDS3unScWgyVyNCHe-QHaEK&pid=Api&P=0&w=339&h=191";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car_1_imgTag = new Image(); //defining a variable with a new image
	car_1_imgTag.onload = uploadcar_1; // setting a function, onloading this variable
	car_1_imgTag.src = car_1_image;   // load image

    car_2_imgTag = new Image(); //defining a variable with a new image
	car_2_imgTag.onload = uploadcar_2; // setting a function, onloading this variable
	car_2_imgTag.src = car_2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar_1(){
    ctx.drawImage(car_1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);
}

function uploadcar_2(){
    ctx.drawImage(car_2_imgTag,car_2_x,car_2_y,car_2_width,car_2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car_1_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car_1_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car_1_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car_1_right();
			console.log("right arrow key");
		}
}

//function car_1_up()
{
	//if(car_1_y >=0)
	{
		//car_1_y = car_1_y - 10;
		//console.log("When up arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		// uploadBackground();
		// uploadcar_1();
        // uploadcar_2();
	}
}
//function car_1_down()
{
	//if(car_1_y <=500)
	{
		//car_1_y =car_1_y+ 10;
		//console.log("When down arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		//uploadBackground();
		// uploadcar_1();
       ///  uploadcar_2();
	}
}
//function left()
{
	//if(rover_x >= 0)
	{
		//rover_x =rover_x - 10;
		//console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		//uploadBackground();
		// uploadrover();
	}
}
//function right()
{
	//if(rover_x <= 700)
	{
		//rover_x =rover_x + 10;
		//console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		//uploadBackground();
		//uploadrover();
   }
}
	
  
