// Director interface with methods that return a string
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface with methods returning strings
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Director class that implements DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class that implements TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workDirectorTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}

export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

type Subjects = "Math" | "History";

export function teachClass(todayClass:Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    }
}
