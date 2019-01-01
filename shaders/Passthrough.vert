#version 330

uniform mat4 modelViewProjectionMatrix;

uniform float syncH = 0;
uniform float syncV = 0;
uniform float time;
uniform vec2 resolution;

in vec4 position;
in vec2 texcoord;

out vec2 textureCoordinates;

out vec2 leftTextureCoordinate;
out vec2 rightTextureCoordinate;

out vec2 topTextureCoordinate;
out vec2 topLeftTextureCoordinate;
out vec2 topRightTextureCoordinate;

out vec2 bottomTextureCoordinate;
out vec2 bottomLeftTextureCoordinate;
out vec2 bottomRightTextureCoordinate;

uniform int scale = 1;

void main(){
    gl_Position = modelViewProjectionMatrix * position;

    textureCoordinates = texcoord; 
    /*vec2(
        mod(texcoord.x - time * syncH, resolution.x) + 1,
        mod(texcoord.y - time * syncV, resolution.y) + 1
    );*/

    leftTextureCoordinate = textureCoordinates.xy + vec2(-scale, 0);
    rightTextureCoordinate = textureCoordinates.xy + vec2(scale, 0);

    topTextureCoordinate = textureCoordinates.xy + vec2(0, scale);
    topLeftTextureCoordinate = textureCoordinates.xy + vec2(-scale, scale);
    topRightTextureCoordinate = textureCoordinates.xy + vec2(scale, scale);

    bottomTextureCoordinate = textureCoordinates.xy + vec2(0, -scale);
    bottomLeftTextureCoordinate = textureCoordinates.xy + vec2(-scale, -scale);
    bottomRightTextureCoordinate = textureCoordinates.xy + vec2(scale, -scale);
}
