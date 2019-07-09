class Sprite {
  constructor (option) {
    this.img = option.img
    this.sx = option.sx || 0
    this.sy = option.sy || 0
    this.w = option.w || 0
    this.h = option.h || 0
    this.x = option.x
    this.y = option.y
    this.p = option.p
  }

  draw (ctx) {
    let i = 0
    let num = 0
    let p = this.p
    let left = 0
    let l = 1
    let pi = Math.PI
    let cos = Math.cos(pi)
    let sin = Math.sin(pi)
    let swimy = this.y
    ctx.save()
    ctx.translate(0, this.y)
    const _this = this
    // function angle (d) {
    //   return d * Math.PI / 180
    // }
    function swim() {
      requestAnimationFrame(() => {
        i ++
        left += l
        ctx.clearRect(left, _this.y, _this.w, _this.h)
        ctx.drawImage(_this.img, _this.sx, num * _this.h, _this.w, _this.h, left, swimy, _this.w, _this.h)
        if (i == p) {
          num ++
          if (num == 3) num = 0
          i = 0
          if ( left == 800 - _this.w ) { // l == 1 && left == (800 - _this.w) || l == -1 && left == 0 
            // ctx.save()
            ctx.translate(left + _this.w, _this.y + _this.h)
            // ctx.rotate(angle(180))
            ctx.transform(cos, sin, -sin, cos, _this.w, _this.h)
            swimy == _this.y ? 0 : _this.y
            // ctx.restore()
            left = 0
          }
        }
        swim()
      })
    }
    requestAnimationFrame(swim)
    ctx.restore()
  }
}