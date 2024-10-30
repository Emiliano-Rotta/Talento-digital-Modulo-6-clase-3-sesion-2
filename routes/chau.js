const chau = (req, res) =>{
    if(req.query.error === "true"){
        res.status(500).send('Error: Ha ocurrido un problema');
    }else{
        res.send('chau express')
    }
 
}

module.exports = chau