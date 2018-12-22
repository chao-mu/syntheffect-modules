float[8] get_moore_neighbors(float[9] n) {
    float[8] moore;
    moore[0] = n[0];
    moore[1] = n[1];
    moore[2] = n[2];
    moore[3] = n[3];
    moore[4] = n[5];
    moore[5] = n[6];
    moore[6] = n[7];
    moore[7] = n[8];

    return moore;
}
