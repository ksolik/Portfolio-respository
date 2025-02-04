const snoise4DImage = `
  vec4 snoise4DImage(vec2 uv, float scal, float gain, float ofst, vec4 move) {
    uv *= scal;
    float R = snoise(vec4(uv, 100., 200.)+move);
    float G = snoise(vec4(uv, 300., 400.)+move);
    float B = snoise(vec4(uv, 500., 600.)+move);
    vec3 color = ofst+gain*vec3(R, G, B);
    return vec4(color, 1.);
  }

  vec4 snoise4DImage(vec2 uv, float scal, float gain, float ofst, float expo, vec4 move) {
    uv *= scal;
    float R = snoise(vec4(uv, 100., 200.)+move);
    float G = snoise(vec4(uv, 300., 400.)+move);
    float B = snoise(vec4(uv, 500., 600.)+move);
    vec3 col;
    col.r = pow(abs(R), expo)*(step(0., R)*2.-1.);
    col.g = pow(abs(G), expo)*(step(0., G)*2.-1.);
    col.b = pow(abs(B), expo)*(step(0., B)*2.-1.);
    return vec4(ofst+gain*col, 1.);
  }
`;
