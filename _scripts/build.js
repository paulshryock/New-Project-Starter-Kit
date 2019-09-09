const Eleventy = require('@11ty/eleventy')

(async function() {
  let inst = new Eleventy()
  await inst.init()
  await inst.write()
})()