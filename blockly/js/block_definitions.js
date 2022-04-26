Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("Distance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move Turtle, no drawing");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw");
    this.appendValueInput("Distance")
        .setCheck("Number")
        .appendField("Distance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Move Turtle, drawing");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("Angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Turn Turtle angle");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SetColor");
    this.appendValueInput("Color")
        .setCheck(null)
        .appendField("Color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};