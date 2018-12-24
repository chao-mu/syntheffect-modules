#pragma include "../include/module.glsl"
#pragma include "../include/noise.glsl"

DEFINE_INPUT(seed, time, DESC("Seed to pass to functions"));

DEFINE_OUTPUT_1(rand, DESC("Random value between 0 and 1"))

void main() {
    float seed = input_seed();

    output_rand(rand(seed));
}
