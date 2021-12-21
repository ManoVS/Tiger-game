function bounceOff(){
  if(hunter.collide(edge2)){
     hunter.velocityX = -4
    }
  
  if(hunter.isTouching(edge1)){
     hunter.velocityX = 4;
     }
  
}
