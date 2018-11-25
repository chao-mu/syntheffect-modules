#pragma include "../include/module.glsl"

// @name Mirror Feedback
// @desc Feedback simulating holding a mirror up to the camera, sorta
// @author Danimalia Hackpoetica

DEFINE_INPUT(in1, 0., DESC("input channel 1"))
DEFINE_INPUT(in2, 0., DESC("input channel 2"))
DEFINE_INPUT(in3, 0., DESC("input channel 3"))

DEFINE_INPUT(rotate, 0., DESC("how much to rotate each reflection"))
DEFINE_INPUT(factor, 0.5, DESC("amount to zoom (lower value, more zoom frames)"))
DEFINE_INPUT(centerX, 0, DESC("center on x coordinate, -1 to 1"))
DEFINE_INPUT(centerY, 0, DESC("center on y coordinate, -1 to 1"))

DEFINE_INPUT_GROUP(rgb, in1, in2, in3)

DEFINE_OUTPUT_1(out1, DESC("output channel for in1"))
DEFINE_OUTPUT_2(out2, DESC("output channel for in2"))
DEFINE_OUTPUT_3(out3, DESC("output channel for in3"))

DEFINE_OUTPUT_GROUP(rgb, out1, out2, out3)

void main() {
    vec2 newCoords = get_uv_1to1() * (input_factor() + 1.)  + vec2(input_centerX(), input_centerY());
    if (newCoords.x < -1 ||  newCoords.x > 1 ||
            newCoords.y < -1 || newCoords.y > 1) {
        output_rgb(input_rgb());
    } else {
        output_rgb(last_output_rgb(from_uv_1to1(rotate(input_rotate()) * newCoords)));
    }
}
