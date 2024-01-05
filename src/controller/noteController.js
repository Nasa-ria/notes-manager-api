require('dotenv').config();

require("../model/databaseConnection")

const Note = require("../model/note");


exports.create = async (req, res) => {
	try { 
       
        const note = new Note ({
          title: req.body.title,
          content:req.body.content,
          user_id:req.body.id,
        });
        await note.save();
        return res.status(201).json(note); 
    
      } catch (error) {
          console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }

      exports.update = async(req, res) => {
        try{
            let id = req.params.id
        const note = await Note.updateOne({_id:id},{
            title: req.body.title,
            content: req.body.content,
          });
          return res.status(201).json(note); 
        }catch(error){
            console.error(error);
        }
      };

      exports.note = async (req, res) => {
        try{
            let id = req.params.id;
            const note = await Note.findById(id);
            return res.status(201).json(note)
        }catch(error){
            console.error(error);
        }
        
    };
    
    exports.notes = async(req ,res) => {
        try{
            const notes = await Note.find({})
            return res.status(201).json(notes)
        }catch(error){
            console.error(error);
        }
      
    };


    exports.delete = async(req,res)=>{
        try{
            let id = req.params.id 
            const note =await Note.deleteOne({_id:id})
            res.locals.message= "note deleted"
        }catch(error){
            console.error(error);
        }
      
      };
      