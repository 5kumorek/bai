title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

/*nie stosując formatowania, czyli zwykle wypisanie */
console.log("nie stosując formatowania, czyli zwykle wypisanie")
console.log(title)
console.log(name)
console.log(surname)
console.log(street)
console.log(city)
console.log(zip)
console.log(country)

/*stosując formatowania*/
/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
console.log("\nstosując formatowania")
console.log(title + " " + name + " " + surname)
console.log("ul. " + street)
console.log(zip + " " + "city")
console.log(country.toUpperCase())

