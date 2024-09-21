import express, { Request, Response, NextFunction } from "express";
import Student from "../model/Student";

export const deleteStudentCourseByCourseId = (req: Request, res: Response) => {
  const { studentId, courseId } = req.params;
  const student = Student.deleteCourse(Number(studentId), Number(courseId));
  res.status(200).json({status: `success`, data: {student}});
};

export const getAverageForEachStudent = (req: Request, res: Response) => {
  try {
    const { course } = req.query; // Get the course from query string
    const averages = Student.getAverageForEachStudent(course ? Number(course) : undefined);
    res.status(200).json({ status: "success", data: averages });
  } catch (err:any) {
    res.status(404).json({ status: "error", message: err.message });
  }
};
