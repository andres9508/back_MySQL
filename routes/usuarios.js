const Usuario = require('../models/Usuario');

const router = require('express').Router();

//obtener todos los usuarios
router.get("/", async(req, res)=>{
    const usuarios =await Usuario.findAll()
    res.json(usuarios)
})

//obtener un usuario
router.get("/:id", async(req, res)=>{
    const { id } =req.params;
    const usuario = await Usuario.findByPk(id)
    res.json(usuario)
})
//crear un usuario
router.post("/", async(req, res)=>{
    const { nombre , email } =req.body
    if (!nombre || !email) {
        return res.status(400).json({
            error:"uno o mas campos vacios"
        })
    }
    const usuario = await Usuario.create(req.body)

    res.json(usuario)
})

//actualizar datos
router.put("/:id",async(req,res)=>{
    await Usuario.update(req.body,{
        where : {id: req.params.id}
    })
    res.json({susses:"se ha modificado"})
})

//eliminar un usuario
router.delete("/:id",async(req,res)=>{
    await Usuario.destroy({
        where:{ id: req.params.id}
        
    })
    res.json({susses:"se ha borrado"})
})

module.exports=router;