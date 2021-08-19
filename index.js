const express = require("express");
const cors = require("cors");
const sendMail = require('./mail')


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())


app.post('/email', (req, res)=>{

	const {subject, email, text} = req.body
	console.log(`Data:`, req.body);

	sendMail(email, subject, text, function(err, data){
		if(err){
			res.status(500).json({message: "Internal Error"})
		} else {
			res.send(true);
		}
	});
	
})


app.get('', (req, res) => {

	res.send(req.body);

})

app.listen(PORT, ()=> console.log(`Connected to port ${PORT}`));