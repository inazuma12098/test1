// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 160
  });
  
  var layer = new Konva.Layer();
  
  var rect1 = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
  });
  
  var rect2 = new Konva.Rect({
    x: 170,
    y: 20,
    width: 100,
    height: 50,
    fill: 'red',
    shadowBlur: 10,
    cornerRadius: 10
  });
  
  var rect3 = new Konva.Rect({
    x: 320,
    y: 20,
    width: 100,
    height: 100,
    fill: 'blue',
    cornerRadius: [0, 10, 20, 30]
  });
  
  // add the shapes to the layer
  layer.add(rect1);
  layer.add(rect2);
  layer.add(rect3);
  
  stage.add(layer);
  layer.draw();