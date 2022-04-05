
console.log("RODANDO MEU SERVIDOR!");

const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var cadastros = {
    "clientes":[ 
         {
            "id": 18894527000,
            "nome": "Funtdabe",
            "endereco": "Praça Carlos Gomes 87",
            "email": "renataoliviaramos@cbb.com.br"
        },
        {
            "id": 57840695000,
            "nome": "Anthony Thales Fernandes",
            "endereco": "Praça Carlos Gomes 87",
            "email": "anthony-fernandes92@cdcd.com.br"
        },
        {
            "id": 85533671005,
            "nome": "Joaquim Yuri da Cunha",
            "endereco": "aqui pertinho",
            "email": "joaquimyuridacunha@emcinfo.com.br"
        },
        {
            "id": 54396659008,
            "nome": "Laura Tereza Santos",
            "endereco": "Rua Brisa do Mar",
            "email": "laura.tereza.santos@quimicaindaiatuba.com.br"
        },
        
            {
                "id": 31246821060,
            "nome": "Rayssa Luiza Farias",
            "endereco": "Rua José Maria Francisco Neto",
            "email": "rayssa-farias92@systrix.com.br"
        }
        

    ]
};

// Retornar os dados de um único cliente 
app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cadastros.clientes[index]);
})

//retornar todos os clientes
app.get('/clientes', (req, res) => {

    return res.json(cadastros);
})

// Cadastrar um novo cliente 
app.post('/clientes', (req, res) => {
    var id = req.body.id;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    var { cadastrados } = cadastros.clientes;

    clientes = cadastros.clientes;
    clientes.push({"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email,});

    return  res.json(clientes);
    
})

// Alterar os dados de um cliente
app.put('/clientes/:index', (req, res) => {
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    const clientes = cadastros.clientes;
    
     if(clientes.indexOf(index)){
    clientes.splice((index-1), 4,{"id: ":id,"nome ":nome, "endereco: ":endereco,"email: ":email})
    }
    return res.json(cadastros.clientes[index]);
})
//Deletar os dados de um cliente com base no seu id
app.delete('/clientes/:index', (req, res) => {
    const clientes = cadastros.clientes;
    const {index} = req.params;
    var id = index;
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var email = req.body.email;
    

    if(clientes.indexOf(index)){
        clientes.splice((index-1), 4)
        }
    return res.json({ message: " Os dados foram deletados"})

})



app.listen(port, () => {
    console.log(`🚀🚀🚀SERVIDOR INICIANDO, CONECTANDO A PORTA ${port}`)
})