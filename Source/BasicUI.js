//Panel Component
const var Glass = Content.getComponent("Glass");

//Label Compnent
const var Screen = Content.getComponent("Screen");

//Clear Button
const var Clear = Content.getComponent("Clear");

//Numbers Input
reg input = "" ;

//Equals button
const var Equals = Content.getComponent("Equals");



//UI/UX Design
Glass.setPaintRoutine(function(g)
{
	//Base
	g.setGradientFill([0x5CFFFFFF, 0, 0, 0x12FFFFFF, 230, 300]);
	 g.beginLayer(true);
	 g.gaussianBlur(40);
	 g.addNoise(0.025);
	 g.endLayer();
	 g.fillRoundedRectangle([0,0, 250, 300], 7);
	 
	 //Outline
	 g.setGradientFill([0xFFFFFFFF, 0, 0, 0x26FFFFFF, 230, 300]);
	 g.drawRoundedRectangle(this.getLocalBounds(0.65), 7, 0.65);
	 
	 
	
});


//Array Operations
const var buttOp= 
[
	Content.getComponent("Add"),
	Content.getComponent("Sub"),
	Content.getComponent("Mult"),
	Content.getComponent("Div")
]


//Array Numbers
const var buttNumb =
[
	Content.getComponent("Button0"),
	Content.getComponent("Button1"),
	Content.getComponent("Button2"),
	Content.getComponent("Button3"),
	Content.getComponent("Button4"),
	Content.getComponent("Button5"),
	Content.getComponent("Button6"),
	Content.getComponent("Button7"),
	Content.getComponent("Button8"),
	Content.getComponent("Button9")
	
]


//Clearing Label
inline function clearing(component, value)
{
	
	

	if(value)
		input = "";
		Screen.set("text", input);
		
}

Clear.setControlCallback(clearing);









//ShowNumbers Label
inline function numShow(component, value)
{
	
		local index = buttNumb.indexOf(component);
			
			if (value)
			{
				Synth.playNote(60 + index, 64);
			}
			
			if(value)
			
			  	input += index;
			  
				Screen.set("text", input);
				
			
			
}


for(i = 0; i < buttNumb.length; i++)
{	
	buttNumb[i].setControlCallback(numShow);
	
}






//Operational stuff
inline function operSurg(component, value)
{
		local index = buttOp.indexOf(component);

			if (value)
			{
				Synth.playNote(60 + index, 64);
			}
	if(value)
		input += buttOp[index].get("text");

}

for(i = 0; i < buttOp.length; i++)
{
	buttOp[i].setControlCallback(operSurg);
}


//Eval Sum
inline function Sum(component, value)
{
	if(value)
		Screen.set("text", eval(input));
}

Equals.setControlCallback(Sum);





