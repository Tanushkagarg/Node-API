const express=require('express')
const mongoose=require('mongoose')
const app=express()

//routes
app.get('/', (req, res) => {
    res.send('Hello NODE API!')
  })

  app.listen(3000, () => {
    console.log(`ENode API is running on port 3000`)
  })
  mongoose.connect('mongodb+srv://tanushkagarg89:<password>@cluster0.osjnm3r.mongodb.net/NODE API?retryWrites=true&w=majority').then(()=>{
    console.log('connected to mongodb')
  }).catch((error)=>{
    console.log(error)
  })
  