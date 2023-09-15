const Instructor = require("../models/instructorModel");

exports.getAllInstructors = async (req, res) => {
    await Instructor.findAll()
        .then((result) => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error occurred getting all instructors");
        })
}

exports.getSingleInstructor = async (req, res) => {
    const result = await Instructor.findByPk(req.params.id);
    if (result != null) {
        return res.json(result);
    }

    return res.status(404).send("Instructor not found");
}

exports.addNewInstructor = async (req, res) => {
    await Instructor.create({
        name: req.body.name
    });

    const result = await Instructor.findAll();
    res.status(201).json(result);
}

exports.editInstructor = async (req, res) => {
    const result = await Instructor.findByPk(req.params.id);

    if (result != null) {
        await Instructor.update({
            name: req.body.name
        }, {
            where: { id: req.params.id}
        });
        const allInstructors = await Instructor.findAll();
        return res.json(allInstructors)
    }

    return res.status(404).send("Instructor not found");
}

exports.deleteInstructor = async (req, res) => {
    const result = await Instructor.findByPk(req.params.id)

    if (result != null) {
        await Instructor.destroy({ where: {id: req.params.id}})
        const allInstructors = await Instructor.findAll();
        return res.json(allInstructors);
    }

    return res.status(404).send("Instructor not found");
}