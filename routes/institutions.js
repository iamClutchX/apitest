const express = require('express');
const router = express.Router();

const InstitutionController = require('../controllers/institutionController');

router.get('/', InstitutionController.getInstitutions);
router.post('/', InstitutionController.createInstitution);
router.get('/:id', InstitutionController.getInstitution);
router.put('/:id', InstitutionController.updateInstitution);
router.delete('/:id', InstitutionController.deleteInstitution);

// router.get('/:id/programs', InstitutionController.getInstitutionPrograms);
// router.post('/:id/programs', InstitutionController.createInstitutionProgram);
// router.get('/:id/programs/:programId', InstitutionController.getInstitutionProgram);
// router.put('/:id/programs/:programId', InstitutionController.updateInstitutionProgram);
// router.delete('/:id/programs/:programId', InstitutionController.deleteInstitutionProgram);

// router.get('/:id/programs/:programId/courses', InstitutionController.getInstitutionProgramCourses);
// router.post('/:id/programs/:programId/courses', InstitutionController.createInstitutionProgramCourse);
// router.get('/:id/programs/:programId/courses/:courseId', InstitutionController.getInstitutionProgramCourse);
// router.put('/:id/programs/:programId/courses/:courseId', InstitutionController.updateInstitutionProgramCourse);
// router.delete('/:id/programs/:programId/courses/:courseId', InstitutionController.deleteInstitutionProgramCourse);

// router.get('/:id/programs/:programId/courses/:courseId/sections', InstitutionController.getInstitutionProgramCourseSections);
// router.post('/:id/programs/:programId/courses/:courseId/sections', InstitutionController.createInstitutionProgramCourseSection);
// router.get('/:id/programs/:programId/courses/:courseId/sections/:sectionId', InstitutionController.getInstitutionProgramCourseSection);
// router.put('/:id/programs/:programId/courses/:courseId/sections/:sectionId', InstitutionController.updateInstitutionProgramCourseSection);
// router.delete('/:id/programs/:programId/courses/:courseId/sections/:sectionId', InstitutionController.deleteInstitutionProgramCourseSection);




module.exports = router;
