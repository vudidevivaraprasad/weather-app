const express = require('express')
const path = require('path')
const weather = require('./weather_data')
const hbs = require('hbs')
const { time } = require('console')
const app = express()
const port = 8000

const viewsPath = path.join(__dirname,'../templates/views') // this for holding the path
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')  // SET is used for changing some settings in the express
app.set('views',viewsPath)


app.use(express.static(path.join(__dirname,'../public')))  // first the server will chack the static directory that is specified
hbs.registerPartials(partialsPath)
// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

app.get('',(req,res)=>{
    res.render('index',{
        title:'main page',
        name:'prasad'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about page',
        name:'prasad'
    })
})
app.get('/about/*',(req,res)=>{
    res.render('404',{
        title:'404 Page not found',
        name:'prasad',
        msg:'About article not found'
    })
})
app.get('/search',(req,res)=>{
    if(!req.query.location){
        return res.send({error:'there is no search found'})
    }
    weather(req.query.location,(err,data)=>{
        if(err){
            res.send({error:err})
        }
        else{
            res.send({
                city:data.name,
                country : data.sys.country,
                temperature: data.main.temp,
                weather:data.weather[0].description,
                date:new Date()
            })
        }
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page not found',
        name:'prasad'
    })
})
app.listen('8000',()=>{
    console.log('server is running');
})