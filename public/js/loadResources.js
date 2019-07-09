function loadResource (path) {
  return new Promise((resolve, reject) => {
    $axios.get(path).then(res => {
      var imgs = res
      var count = 0
      var total = 0
      var imgObj = {}

      for (let key in imgs) {
        total ++
        var img = new Image()
        img.src = '/img/' + imgs[key].src
        img.onload = function () {
          count ++ 
          imgObj[key] = {
            img: this,
            frame: imgs[key].frame
          }
          if (total == count) {
            resolve(imgObj)
          }
        }
      }
    })
  })
}

async function loadResources () {
  const imgObj = {
    bottom: 'bottom.json',
    bullet: 'bullet.json',
    fish: 'fish.json',
    cannon: 'cannon.json'
  }

  var imgs = {}

  for (let key in imgObj) {
    const data = await loadResource(imgObj[key])
    imgs[key] = data
  }

  console.log(imgs)
  window.__g_resources = imgs
}