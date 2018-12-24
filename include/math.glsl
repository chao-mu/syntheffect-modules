#define sin_01(x) (0.5 * (sin(x) + 1))
#define cos_01(x) (0.5 * (cos(x) + 1))

float map(float value, float min1, float max1, float min2, float max2) {
    return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
}
