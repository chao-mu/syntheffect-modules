#pragma include "../include/module.glsl"

// @name Simple Ramp
// @desc Simple range horizontally and vertically
// @author Danimalia Hackpoetica

DEFINE_OUTPUT_1(h, DESC("horizontal ramp"))
DEFINE_OUTPUT_2(v, DESC("vertical ramp"))

void main() {
    output_h(textureCoordinate.x / resolution.x);
    output_v(textureCoordinate.y / resolution.y);
}
