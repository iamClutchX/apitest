const express = require('express');
const router = express.Router();
const ProgramController = require('../controllers/ProgramController');

router.get('/:id/programs', ProgramController.getPrograms);
router.post('/:id/programs', ProgramController.createProgram);
router.get('/:id/programs/:programId', ProgramController.getProgram);
router.put('/:id/programs/:programId', ProgramController.updateProgram);
router.delete('/:id/programs/:programId', ProgramController.deleteProgram);

router.get('/:id/programs/:programId/courses', ProgramController.getProgramCourses);
router.post('/:id/programs/:programId/courses', ProgramController.createProgramCourse);
router.get('/:id/programs/:programId/courses/:courseId', ProgramController.getProgramCourse);
router.put('/:id/programs/:programId/courses/:courseId', ProgramController.updateProgramCourse);
router.delete('/:id/programs/:programId/courses/:courseId', ProgramController.deleteProgramCourse);


module.exports = router;
