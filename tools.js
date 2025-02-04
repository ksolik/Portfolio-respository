// floor
const floor = (_value) => {
    return Math.floor(_value);
  };
  
  // random in range _min to _max
  const random = (_min = 0, _max = 1) => {
    return Math.random() * (_max - _min) + _min;
  };
  
  // draw _drawCanvas to _toCanvas
  const drawImage = (_drawCanvas, _toCanvas) => {
    const ctx = _toCanvas.getContext("2d");
    ctx.drawImage(_drawCanvas, 0, 0);
  };
  
  // resize canvas and gl viewport
  const resizeCanvas = (_canvas, _gl, _width, _height) => {
    _canvas.width = _width;
    _canvas.height = _height;
    _gl.viewport(0, 0, _canvas.width, _canvas.height);
  };
  
  // set vertex shader and fragment shader
  const setShader = (_gl, _program, _vert, _frag) => {
    const vertexShader = _gl.createShader(_gl.VERTEX_SHADER);
    _gl.shaderSource(vertexShader, _vert);
    _gl.compileShader(vertexShader);
    _gl.attachShader(_program, vertexShader);
  
    const fragmentShader = _gl.createShader(_gl.FRAGMENT_SHADER);
    _gl.shaderSource(fragmentShader, _frag);
    _gl.compileShader(fragmentShader);
    _gl.attachShader(_program, fragmentShader);
  };
  
  // set vec2 attribute
  const setAttributeVec2 = (_gl, _program, _name, _data) => {
    const bufferData = new Float32Array(_data);
    const location = _gl.getAttribLocation(_program, _name);
    const buffer = _gl.createBuffer();
    _gl.bindBuffer(_gl.ARRAY_BUFFER, buffer);
    _gl.bufferData(_gl.ARRAY_BUFFER, bufferData, _gl.STATIC_DRAW);
    _gl.vertexAttribPointer(location, 2, _gl.FLOAT, false, 0, 0);
    _gl.enableVertexAttribArray(location);
  };
  