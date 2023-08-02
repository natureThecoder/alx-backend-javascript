// Teachers BluePrint
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

// interface that inherits all the Teacher properties
interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return firstName[0] + ". " + lastName; 
}
// interface for the printTeacher method
interface printTeacherFunction {
  (param1: string, param2: string): string;
}


//interface for the student class
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
      return this.firstName;
    }
}

const nature = new StudentClass("Osinachi", "Basil");

console.log(nature.workOnHomework());
console.log(nature.displayName());
