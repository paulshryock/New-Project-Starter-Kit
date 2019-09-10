const Eleventy = require('@11ty/eleventy')

(async function () {
  const inst = new Eleventy()
  await inst.init()
  await inst.write()
})()
