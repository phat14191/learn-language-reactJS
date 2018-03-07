let express = require("express");
let Word = require("../models/word");
let expressJwt = require("express-jwt");
let settings = require("../settings.js");

let auth = expressJwt({ secret: settings.secret });

const wordRouter = express.Router();
wordRouter.use(auth);

wordRouter.route("/")
    .get((req, res) => {
        Word.find({user: req.user._id}, (err, words) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(words);
        });
    })
    .post((req, res) => {
        let word = new Word(req.body);
        word.user = req.user._id;
        word.save((err, newWord) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newWord);
        })
    });

    wordRouter.route("/:wordId")
    .get((req, res) => {
        Word.findOne({ user: req.user._id, _id: req.params.wordId }, (err, word) => {
            if (err) return res.status(500).send(err);
            if (!word) return res.status(404).send("No word item found.");
            return res.status(200).send(word);
        });
    })
    .put((req, res) => {
        Word.findOneAndUpdate({user: req.user._id,_id: req.params.wordId}, req.body, { new: true }, (err, word) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(word);
        });
    })
    .delete((req, res) => {
        Word.findOneAndRemove({user: req.user._id,_id: req.params.wordId },
            (err, word) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(word);
            })
    });

module.exports = wordRouter;
