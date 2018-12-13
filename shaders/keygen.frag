#pragma include "../include/module.glsl"

#define EPSILON 0.000001

// @name Key Generator
// @desc Generate a key for use with a compositor based on inputs and comparisons. All three channels must match
// @author Danimalia Hackpoetica

DEFINE_INPUT(in1, 0, DESC("first channel"))
DEFINE_INPUT(in2, 0, DESC("second channel"))
DEFINE_INPUT(in3, 0, DESC("third channel"))

DEFINE_INPUT_GROUP(ins, in1, in2, in3)

DEFINE_INPUT(t1, 0, DESC("first channel's target value"))
DEFINE_INPUT(t2, 0, DESC("second channel's target value"))
DEFINE_INPUT(t3, 0, DESC("third channel's target value"))

DEFINE_INPUT_GROUP(targets, t1, t2, t3)

DEFINE_INPUT(a1, 0, DESC("first channel's comparison allowance"))
DEFINE_INPUT(a2, 0, DESC("second channel's comparison allowance"))
DEFINE_INPUT(a3, 0, DESC("third channel's comparison allowance"))

DEFINE_INPUT_GROUP(allowances, a1, a2, a3)

DEFINE_OUTPUT_1(key, DESC("whether or not difference of targets and inputs is less than allowance"))

void main() {
    vec3 diff = abs(input_ins() - input_targets());
    vec3 allowances = input_allowances();

    if (diff.x > allowances.x + EPSILON || diff.y > allowances.y + EPSILON || diff.z > allowances.z + EPSILON) {
        output_key(0);
    } else {
        output_key(1);
    }
}
