Blockly.JavaScript['move'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand(\"move=\" + ' + value_distance + ');\n';
  return code;
};

Blockly.JavaScript['draw'] = function(block) {
  var value_distance = Blockly.JavaScript.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand(\"draw=\" + ' + value_distance + ');\n';
  return code;
};

Blockly.JavaScript['turn'] = function(block) {
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand(\"turn=\" + ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['setcolor'] = function(block) {
  var value_color = Blockly.JavaScript.valueToCode(block, 'Color', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = ""; // "let color = " + value_color + ";\n";
  code += 'sendCommand(\"color.html=\" + ' + value_color + ');\n';
  return code;
};