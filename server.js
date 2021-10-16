const express=require('express')
const app =express()
const server=require('http').createServer(app)
const port = process.env.PORT || 3000
const path=require('path')
var session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 365 * 1000
      },
      saveUninitialized: true
}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// parse application/json
app.use(express.json())
app.use(express.static(path.join(__dirname+'/public')))

//database
const url = "mongodb+srv://r4ge:r4gesingh47@cluster0.htsg1.mongodb.net/";
var MongoClient = require('mongodb').MongoClient;

app.get('/',(req,res)=>{
    res.send('index.html');
});

app.get('/getpdata',(req,res)=>{
        var user=req.session.username;
        console.log(user);
        MongoClient.connect(url, function(err, db) {

            if(err)
                throw err;
            var dbo=db.db("checkup");
            var query={pid:user};
            dbo.collection("patient_details").find(query).toArray(function(err, result) {
                if (err) throw err;
                if(result.length>0)
                {
                    res.send(result);
                }
                else{
                    res.send({});
                }
                db.close();
              });
        });
});
app.get('/getddata',(req,res)=>{
    data={
            uid:req.session.username
         }
    res.send(data);
});
app.post('/pauth',(req,res)=>{
    var user=req.body.uid;
    var password=req.body.password;
    MongoClient.connect(url, function(err, db) {

        if(err)
            throw err;
        var dbo=db.db("checkup");
        var query={uid:user,password:password};
        dbo.collection("patients_user").find(query).toArray(function(err, result) {
            if (err) throw err;
            if(result.length>0)
            {
                req.session.loggedin=true;
                req.session.username=user;
                console.log(req.session.username);
                res.redirect('patient/patient.html');
            }
            else{
                res.send('Incorrect Username and/or Password');
            }
            db.close();
          });
    });
});

app.post('/dauth',(req,res)=>{
    var user=req.body.uid;
    var password=req.body.password;
    MongoClient.connect(url, function(err, db) {

        if(err)
            throw err;
        var dbo=db.db("checkup");
        var query={uid:user,password:password};
        dbo.collection("doctor_user").find(query).toArray(function(err, result) {
            if (err) throw err;
            if(result.length>0)
            {
                req.session.loggedin=true;
                req.session.username=user;
                console.log(req.session.username);
                res.redirect('doctor/doctor.html');
            }
            else{
                res.send('Incorrect Username and/or Password');
            }
            db.close();
          });
    });
});

//connection the databse
// const url = "mongodb+srv://r4ge:r4gesingh47@cluster0.htsg1.mongodb.net/";
// var MongoClient = require('mongodb').MongoClient;

// app.post('/auth',(req,res)=>{
//     var user=req.body.username;
//     var pass=req.body.password;
//     MongoClient.connect(url, function(err, db) {

//         if(err)
//             throw err;
//         var dbo=db.db("hackathon");
//         var query={username:user,password:pass};
//         dbo.collection("users").find(query).toArray(function(err, result) {
//             if (err) throw err;
//             if(result.length>0)
//             {
//                 req.session.loggedin=true;
//                 req.session.username=user;
//                 console.log(req.session.username);
//                 res.redirect('/');
//             }
//             else{
//                 res.send('Incorrect Username and/or Password');
//             }
//             db.close();
//           });
//     });
// });


// //Testing the server


// app.get('/check',(req,res)=>{
//     data={username:"false"}
//     if(req.session.loggedin)
//     {
//         data={
//             username:req.session.username
//         }
//         res.send(data);
//         //res.send(req.session.username);
//     }
//     else
//         res.send(data);
// })

// app.get('/getquestion',(req,res)=>{
//     MongoClient.connect(url, function(err, db) {

//         if(err)
//             throw err;
//         var dbo=db.db("hackathon");
    
//         dbo.collection("questions").find({}).toArray(function(err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//           });
//     });
// });

// app.get('/getarticlelist',(req,res)=>{
//     MongoClient.connect(url, function(err, db) {

//         if(err)
//             throw err;
//         var dbo=db.db("hackathon");
    
//         dbo.collection("articles_category").find({}).toArray(function(err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//           });
//     });
// });

// app.post('/getsinglearticle',(req,res)=>{
//     MongoClient.connect(url, function(err, db) {

//         if(err)
//             throw err;
//         var dbo=db.db("hackathon");
//         var query={article_title:req.body.article_title};
//         dbo.collection("articles_data").find(query).toArray(function(err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//           });
//     });
// });


server.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
});
