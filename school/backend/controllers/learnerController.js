const Learner = require("../models/learnerModel");
const Instructor = require("../models/instructorModel");

exports.getAllLearners = async (req, res) => {
    await Learner.findAll()
        .then((result) => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error getting all learners");
        })
}

exports.getSingleLearner = async (req, res) => {
    const result = await Learner.findByPk(req.params.id, { include: Instructor });
    if (result != null) {
        return res.json(result)
    }

    return res.status(404).send("Learner not found");
}

exports.addNewLearner = async (req, res) => {
    await Learner.create({
        name: req.body.name,
        program: req.body.program,
        instructor_id: req.body.instructor_id
    });

    const result = await Learner.findAll();
    res.json(result);
}

exports.editLearnerName = async (req, res) => {
    const result = await Learner.findByPk(req.params.id);

    if (result != null) {
        await Learner.update({name: req.body.name}, {where: {id: req.params.id}})
        return res.json(result);
    }

    return res.status(404).send("Learner not found");
}

exports.deleteLearner = async (req, res) => {
    const result = await Learner.findByPk(req.params.id);

    if (result != null) {
        await Learner.destroy({where: {id: req.params.id}});
        const result = await Learner.findAll();
        res.json(result);
    }

    return res.status(404).send("Learner not found");
}
