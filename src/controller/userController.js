require('dotenv').config();

require("../model/databaseConnection")
const User = require("../model/user");
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
	try { 
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
          name: req.body.name,
          password:hashedPassword,
          email: req.body.email,
        });
        await user.save();
        return res.status(201).json(user); 
    
      } catch (error) {
          console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }

    
    exports.login = async (req, res) => {
      const errorMessage = req.flash('error'); // Retrieve flash error message
      
      // Check if there is an error message
      if (errorMessage.length > 0) {
        res.status(401).json({ message: errorMessage }); // Respond with the error message
      } else {
        res.status(200).json({ message: 'Login successful' }); // Respond with a success message
      }
      };
    
    exports.authenticatelogin = async (req, res, next) => {
      if (req.isAuthenticated()) {
        // Authentication successful, send a success message
        res.locals.message = "Login successful";
        return next();
        } else {
        // Authentication failed, send an error message
        const errorMessage = req.flash("error")[0]; // Retrieve the error message from flash
        res.status(401).json({ message: "Authentication failed", error: errorMessage });
        }
    };
  
    
   


      
    
    //   app.get('/search', (req, res) => {
    //     const { q } = req.query;
    //     if (!q) {
    //       res.status(400).json({ message: 'Query parameter "q" is required' });
    //     } else {
    //       const results = users.filter(
    //         (u) => u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase())
    //       );
    //       res.json(results);
    //     }
    //   });