module.exports = (app)=>{
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados= req.body
        //exibindo no terminal 
       // console.log(dados)
       //conectar com database 
       const conexao = require('../config/database')()
       const atividades = require('../models/atividades')
       var salvar = await new atividades({
           data:dados.data,
           tipo:dados.tipo,
           entrega:dados.entrega,
           instrucoes:dados.orientacao,
           usuario:dados.id
       }).save()

       var buscar = await atividades.find({
           usuario:dados.id
       })
       res.render('atividades.ejs',{nome:dados.nome,id:dados.id,dados:buscar})
       console.log(buscar)
    })
}