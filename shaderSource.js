const vert = `#version 300 es
  in vec2 aPosition;
  in vec2 aTexCoord;
  
  uniform vec2 uRandomVec2;
  uniform float uTime;

  ${snoise4D}
  ${snoise4DImage}
  ${displace}

  vec4 noise(vec2 uv, float scal, float gain, float ofst, float expo, vec4 move) {
    vec4 noise;
    noise  =     1.*snoise4DImage((uv-vec2(421., 132))*1., scal, gain, ofst, move);
    noise +=     .5*snoise4DImage((uv-vec2(913., 687))*2., scal, gain, ofst, move);
    noise +=    .25*snoise4DImage((uv-vec2(834., 724))*4., scal, gain, ofst, move);
    noise +=   .125*snoise4DImage((uv-vec2(125., 209))*8., scal, gain, ofst, move);
    noise +=  .0625*snoise4DImage((uv-vec2(387., 99))*16., scal, gain, ofst, move);
    noise /= 1.9375;
    return noise;
  }

  out vec2 vTexCoord;
  out vec2 vCol;
  void main() {
    vTexCoord = aTexCoord;
    vec2 pos = aPosition;
    float circle = smoothstep(1., .0, length(0.-aPosition));
    vec2 n = noise(pos, 2., 5., .5, 1., vec4(vec2(0.), vec2(cos(uTime*.5), sin(uTime*.5))+uRandomVec2)).rg*circle;
    vec2 dpos = displace(pos, n, .5, .2*circle);
    vCol = n.rg*noise(pos*1000., 1., 1., .5, 1., vec4(0.)).r;
    gl_Position = vec4(dpos, 0., 1.);
    gl_PointSize = 1.;
  }
`;

const frag = `#version 300 es
  precision mediump float;

  in vec2 vTexCoord;
  in vec2 vCol;

  out vec4 fragColor;
  void main() {
    vec2 uv = vTexCoord;
    fragColor = vec4(vCol.rrr, 1.);
  }
`;
