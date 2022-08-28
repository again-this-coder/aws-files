class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITdepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

const accounting = new ITdepartment('d1', ['Max']);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();