const express = require('express')
const city = require ('../models/city')

const app = express ()

app.get('/api/city', async (req, res) => {

    const { uf, name, state, region } = req.query
    if (uf) {
        if (!isUpper(uf))  {
            return res.status(400).json({ "message": "invalid uf field, its value must be upper case" })
        }       
        
        if (uf.length !== 2) {
            return res.status(400).json({ "message": "the uf field must have only two letters" })
        }
    }

    const data = await city.fetch (uf,name,region,state) 

    if (data.length === 0) {
        return res.status(404).json({ "message": "no city was found with the given parameters" })
    }

    return res.status(200).json(data)
}) 

const isUpper = (str) => {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}


module.exports = app