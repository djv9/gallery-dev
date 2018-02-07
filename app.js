const express = require('express')
var fs = require('fs');
// var bodyParser = require('body-parser');
var multer = require('multer'); 

const app = express();
app.all('/', (req, res) => {
    res.send('Hello world test!')
})
app.listen(3000, () => {
    console.log('app listening on port 3000.')
})
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/db1')
const index = require('./views/index')
const gallery = require('./views/gallery')

const cors = require('cors')
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST'],
    alloweHeaders: ['Content-Type', 'Authorization']
}));

// app.all('/index', (req, res) =>{
//   index(req, res)
// })
app.all('/gallery/download/form', (req, res) => {
    var query = req.query;
    res.download('./imgs/6.jpeg', 'img6.jpeg', function(err){
        if (err) {
        }
    });
})

app.all('/gallery/download/ajax', (req, res) => {
    var query = req.query;
    // res.attachment('./imgs/6.jpeg');
    let filePath = './imgs/7.jpeg';
    if (!fs.existsSync(filePath)) {
		res.statusCode = 404;
		res.end('404');
		return;
	}
    
    var readStream = fs.createReadStream(filePath);  
    
    readStream.on('open', function () {   
      readStream.pipe(res);  
    });  
})

// var urlencodeParser = bodyParser.urlencoded({ extended: true });
var upload = multer({ dest: 'uploads/' }); // for parsing multipart/form-data
app.all('/gallery/upload/*', upload.array('fileInput'), (req, res) => {  
    // for parsing application/x-www-form-urlencoded
    if(undefined == req.files[0]){
        res.json(['failed', {msg:"没有选择要上传的文件！"}]);
        return -1;
    }

    var des_file = "./imgs/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
                res.json({msg:err});
            }else{
                response = {
                    msg:'上传成功', 
                    filename:req.files[0].originalname,
                };
                console.log( response );
                res.json(response);
            }
        });
    });
})

// app.all('/gallery/upload/ajax', (req, res) => {
//     var query = req.query;
//     console.log(query);
//     res.send({data: 'success'});    
// })