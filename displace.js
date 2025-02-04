const displace = `
  vec2 displace(vec2 uv, vec2 duv, float off, float wei) {
    duv -= off;
    return uv - duv * wei;
  }

  vec4 displace(vec2 uv, sampler2D img, vec2 duv, float off, float wei) {
    duv -= off;
    return texture(img, uv - duv * wei);
  }
`;
