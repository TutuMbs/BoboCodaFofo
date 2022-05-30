//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://TutuMbs:fox1590051018@cluster0.mx6rm.mongodb.net/DBFP')
}

//exportar as infomações para acesso externo
module.exports = conn 