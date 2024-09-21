import Router from 'express';
import { deleteStudentCourseByCourseId, getAverageForEachStudent } from '../controller/studentController';

const router = Router();

router.delete('/:studentId/courses/:courseId', deleteStudentCourseByCourseId);
router.get('/getAverage', getAverageForEachStudent);

export default router;