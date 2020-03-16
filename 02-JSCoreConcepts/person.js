class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }

    getFullName()
    {
        return this.name + " " + this.surname.toUpperCase();
    }

    getInitials()
    {
        return this.name.toUpperCase()[0] + "." + this.surname.toUpperCase()[0]+".";
    }
}

janNowak = new Person("Jan", "Nowak");
console.log(janNowak.getFullName());
console.log(janNowak.getInitials());

me = new Person("Radosław", "Kumorek");
console.log(me.getFullName());
console.log(me.getInitials());