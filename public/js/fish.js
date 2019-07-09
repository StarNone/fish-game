class Fish extends Sprite {
  constructor (type) {
    const data = __g_resources.fish['fish' + type]
    super({
      img: data.img,
      sx: data.frame.x,
      sy: data.frame.y,
      w: data.frame.w,
      h: data.frame.h
    })
  }
}