const var laf = Engine.createGlobalScriptLookAndFeel();
laf.registerFunction("drawToggleButton", function(g, obj)
{
	 g.setFont("Montserrat", 17);
	 g.setColour(0x85FFFFFF);
	 g.drawText(obj.text, obj.area);
	 
	 if(obj.over)
	 {
	  	g.setColour(0xFFFFFFFF);
		g.drawText(obj.text, obj.area);
		g.setColour(0x25FFFFFF);
		g.drawRoundedRectangle([1, 1, 48, 48], 2.5, 1);
	 }
	 
	 if(obj.down)
	 {
		 g.setColour(0x50FFFFFF);
	     g.drawRoundedRectangle([1, 1, 48, 48], 2.5, 1);
	 }
	 
});