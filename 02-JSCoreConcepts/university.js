names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        var tempArray = [];
        this.names.forEach(item => {if(item[0] == letter) tempArray.push(item)});
        return new Students(tempArray);
    }

    sort() {
        var tempArray = [];
        tempArray =  Array.from(this.names);
        return new Students(tempArray.sort());
    }

    get() {
        return new Students(this.names);
    }

    getFirst(n) {
        var tempArray =  this.names.slice(0, n);
        return new Students(tempArray);
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



