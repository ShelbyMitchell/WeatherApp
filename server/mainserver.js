const Koa = require('koa')
const app = new Koa()
const static_server = require('koa-static')
const Router = require('koa-router');
let router = new Router();

app.use(static_server("../webapp"))

let fetch = require('node-fetch')



//GET /weather/:location
router.get('/weather/:latitude,:longitude', async (context, next) => {
  let response = await fetch("https://api.darksky.net/forecast/aae973ce420ca79d08d847360351bb7a/42.3601,-71.0589")
  let content = await response.json()
  console.log(content.currently)
  context.response.body = content.currently

})

app.use(router.routes())
app.use(router.allowedMethods())

//app.use(context => {
//  context.response.status = 200
//  context.response.body = 'Hello Koa'
//})

app.listen(80)
