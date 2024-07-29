import React, { createContext, useState, useContext, ReactNode } from "react";

interface Student {
  name: string;
  RegisterNo: string;
  English: string;
  Science: string;
  Math: string;
  mark: string;
}

interface StudentsContextType {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const StudentsContext = createContext<StudentsContextType | undefined>(
  undefined
);

export const StudentsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem("studentsTable");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudents = () => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error("useStudents must be used within a StudentsProvider");
  }
  return context;
};
