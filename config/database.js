//importar o mongoose
const mongoose = require('mongoose')
//script de conexao
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://TutuMbs:Fox1590051018@cluster0.mx6rm.mongodb.net/fiap')
}

//exportar as informações para acesso externo
module.exports = conn