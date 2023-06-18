const Institution = require('../models/Institution');


exports.getPrograms = async (req, res) => {
    const { id } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    return res.json(institution.branches);
};

exports.createProgram = async (req, res) => {
    const { id } = req.params;
    const program = req.body;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    institution.branches.push(program);
    await institution.save();
    return res.status(201).json(program);
};


exports.createProgramCourse = async (req, res) => {
    const { id, programId } = req.params;
    const course = req.body;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    program.courses.push(course);
    await institution.save();
    return res.status(201).json(course);
};



exports.getProgram = async (req, res) => {
    const { id, programId } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    return res.json(program);
};

exports.updateProgram = async (req, res) => {
    const { id, programId } = req.params;
    const newProgramData = req.body;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    Object.assign(program, newProgramData);
    await institution.save();
    return res.json(program); 
};

exports.deleteProgram = async (req, res) => {
    const { id, programId } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    program.remove();
    await institution.save();
    return res.json({ message: 'Program deleted' });
};

exports.getProgramCourses = async (req, res) => {
    const { id, programId } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    return res.json(program.courses);
};

exports.getProgramCourse = async (req, res) => {
    const { id, programId, courseId } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    const course = program.courses.id(courseId);
    if (!course) {
        return res.status(404).json({ error: 'The course could not be found.' });
    }
    return res.json(course);
};

exports.updateProgramCourse = async (req, res) => {
    const { id, programId, courseId } = req.params;
    const newCourseData = req.body;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    const course = program.courses.id(courseId);
    if (!course) {
        return res.status(404).json({ error: 'The course could not be found.' });
    }
    Object.assign(course, newCourseData);
    await institution.save();
    return res.json(course);
};

exports.deleteProgramCourse = async (req, res) => {
    const { id, programId, courseId } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
        return res.status(404).json({ error: 'The institution could not be found.' });
    }
    const program = institution.branches.id(programId);
    if (!program) {
        return res.status(404).json({ error: 'The program could not be found.' });
    }
    const course = program.courses.id(courseId);
    if (!course) {
        return res.status(404).json({ error: 'The course could not be found.' });
    }
    course.remove();
    await institution.save();
    return res.json({ message: 'Course deleted' });
};
 