import React from 'react';
import {Layer, Shape, Stage} from 'react-konva';

const Triangle = ({xIn, yIn}) => {
    return (
      <Shape sceneFunc={function (ctx) {
        var xConst = 250;
        var yConst = 250;
        var newX = 0;
        var newY = 0;
        if (xIn < yIn) {
          newX = (xIn / yIn) * xConst;
          newY = yConst;
        } else {
          newX = xConst;
          newY = (yIn / xIn) * yConst;
        }
        var width = 500;
        var height = 500;
        ctx.beginPath();
        ctx.moveTo(width/2,height/2);
        ctx.lineTo(0 + (width/2), newY + (height/2));
        ctx.stroke();
        ctx.lineTo(newX + (width/2), newY + (height/2));
        ctx.stroke();
        ctx.lineTo(width/2,height/2);
        ctx.stroke();
        ctx.closePath();
      }}
    />
  )
}

const RenderTriangle = ({xIn, yIn}) => {
  return (
    <Stage width={500} height={500}>
      <Layer>
        <Triangle xIn={xIn} yIn={yIn}/>
      </Layer>
    </Stage>
  )
}

export default RenderTriangle;
