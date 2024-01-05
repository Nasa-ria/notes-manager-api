require("dotenv").config();

require("../model/databaseConnection");

const Note = require("../model/note");
const User = require("../model/user");

exports.create = async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.id,
    });
    await note.save();
    return res.status(201).json(note);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    let id = req.params.id;
    const note = await Note.updateOne(
      { _id: id },
      {
        title: req.body.title,
        content: req.body.content,
      }
    );
    return res.status(201).json(note);
  } catch (error) {
    console.error(error);
  }
};

exports.note = async (req, res) => {
  try {
    let id = req.params.id;
    const note = await Note.findById(id);
    return res.status(201).json(note);
  } catch (error) {
    console.error(error);
  }
};

exports.notes = async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(201).json(notes);
  } catch (error) {
    console.error(error);
  }
};

exports.delete = async (req, res) => {
  try {
    let id = req.params.id;
    const note = await Note.deleteOne({ _id: id });
    res.locals.message = "note deleted";
  } catch (error) {
    console.error(error);
  }
};

exports.search = async (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({ message: 'Query parameter "q" is required' });
  } else {
    const results = await Note.filter((u) =>
      u.title.toLowerCase().includes(q.toLowerCase())
    );
    res.json(results);
  }
};


exports.shareNote = async (req, res) => {
  const { id } = req.params;
  const { userIdToShareWith } = req.body;

  // Check if the note exists
  const note = Note.find((note) => note.id === parseInt(id));
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  // Check if the user to share with exists
  const userToShareWith = User.find(
    (user) => user.email === userIdToShareWith
  );
  if (!userToShareWith) {
    return res.status(404).json({ message: "User to share with not found" });
  }

  // Add the user to share with to the note's sharedWith array
  if (!note.sharedWith.includes(userIdToShareWith)) {
    note.sharedWith.push(userIdToShareWith);
  }

  res.json({
    message: `Note ${id} shared with user ${userIdToShareWith} successfully`,
  });
};
