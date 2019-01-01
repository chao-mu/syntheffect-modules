#pragma include "../include/module.glsl"

// @name Compositor
// @desc Mix two sets of 3 channels according to a key channel
// @author Danimalia Hackpoetica

DEFINE_INPUTS_RGB()

DEFINE_INPUT(key, 0., DESC("whether left or right texture is used"))
DEFINE_INPUT(keyThreshold, 0.5, DESC("the number dictating what 'key' value keys left/right"))
DEFINE_INPUT(keyNegate, 0., DESC("If above 0.5, negates the keying"))
DEFINE_INPUT(keyMixMode, 0., DESC("If above 0.5, mixes instead of keys"))

DEFINE_INPUTS_RGB_WITH(2)

DEFINE_OUTPUTS_RGB_123()

void main() {
    vec3 rgb_left = input_rgb();
    vec3 rgb_right = input_rgb2();

    float key = input_key();
    if (input_keyNegate() > 0.5) {
        key = 1.0 - key;
    }

    float key_thresh = input_keyThreshold();
    if (is_true(input_keyMixMode())) {
        rgb_left = mix(rgb_left, rgb_right, key);
    } else if (key > key_thresh) {
        rgb_left = rgb_right;
    }

    output_red(rgb_left.r);
    output_green(rgb_left.g);
    output_blue(rgb_left.b);
}
