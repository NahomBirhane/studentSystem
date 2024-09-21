let students: Student[] = [
  {
    id: 1,
    name: "Josh Smith",
    major: "MSCS",
    transcript: [
      { course: 203, grade: 90 },
      { course: 303, grade: 88 },
      { course: 335, grade: 80 },
      { course: 445, grade: 82 },
    ],
  },
  {
    id: 2,
    name: "Edward Folk",
    major: "MSCS",
    transcript: [
      { course: 201, grade: 89 },
      { course: 203, grade: 81 },
    ],
  },
  {
    id: 3,
    name: "Lily Lerman",
    major: "MSCS",
    transcript: [
      { course: 201, grade: 78 },
      { course: 301, grade: 80 },
      { course: 445, grade: 88 },
      { course: 477, grade: 80 },
    ],
  },
  {
    id: 4,
    name: "Emma Angla",
    major: "MSCS",
    transcript: [
      { course: 201, grade: 96 },
      { course: 301, grade: 90 },
      { course: 303, grade: 88 },
      { course: 445, grade: 87 },
      { course: 477, grade: 70 },
    ],
  },
  {
    id: 5,
    name: "Tom Jark",
    major: "MSD",
    transcript: [
      { course: 201, grade: 89 },
      { course: 301, grade: 71 },
      { course: 303, grade: 98 },
    ],
  },
];

interface Transcript {
  course: number;
  grade: number;
}

class Student {
  constructor(
    public id: number,
    public name: string,
    public major: string,
    public transcript: Transcript[]
  ) {}

  static deleteCourse(studentId: number, courseId: number) {
    const student = students.find((s) => s.id === studentId);
    if (student) {
      const courseIndexToDelete = student.transcript.findIndex(
        (c) => c.course === courseId
      );
      if (courseIndexToDelete > -1) {
        student.transcript.splice(courseIndexToDelete, 1);
      } else {
        throw new Error(`No course with Id: ${courseId}`);
      }
    } else {
      throw new Error(`No student with Id: ${studentId}`);
    }
    return student;
  }

    static getAverageForEachStudent(courseId?: number) {
      const filteredStudents = students.filter(student => 
        courseId ? student.transcript.some(transcript => transcript.course === courseId) : true
      );
  
      if (filteredStudents.length === 0) {
        throw new Error(`No student took course with Id: ${courseId}`);
      }
  
      return filteredStudents.map(student => {
        // Filter the transcript if courseId is provided, otherwise use full transcript
        const relevantTranscript = courseId 
          ? student.transcript.filter(transcript => transcript.course === courseId)
          : student.transcript;
  
        const totalGrades = relevantTranscript.reduce((total, transcript) => total + transcript.grade, 0);
        const averageGrade = totalGrades / relevantTranscript.length;
  
        return { name: student.name, average: parseFloat(averageGrade.toFixed(2)) }; // Return average with 2 decimal precision
      });
    }
}
export default Student;
