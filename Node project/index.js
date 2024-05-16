const express = require('express');
const app = express();
const port = 3000 ;
const Question = require('./model.js')

app.use(express.json())

app.get('/',(req, res) => {
    res.send('hey')
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

app.post('/post',async (req, res) => {
    console.log("first", req.body.que_text)
try{
    let { que_text, option_a, option_b,option_c,
        option_d, correct_answer} = req.body

        let post = await Question.create({
            que_text,
            option_a,
            option_b, 
            option_c,
            option_d,
            correct_answer
        })
        // res.send(post)
        res.status(201).json(post)
} catch(error){
    console.log("error", error)
    // res.send("error from Question", error)
    res.status(500).send('internal server error')
}
})

app.get('/getposts', async (req, res) => {
    try {
        const posts = await Question.findAll();
        
        res.json(posts);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Internal server error');
    }
}); 
