// Task 1

/*
დაწერე ფუნქცია, რომელიც მიიღებს სამ
პარამეტრს (string, valueToReplace,
valueToReplaceWith), ჩაანაცვლებს
"valueToReplace"-ს "valueToReplaceWith"
მნიშვნელობით და დააბრუნებს ახალ stringს
არ გამოიყენო string.replace() ფუნქცია
*/

const customReplace = (string, valueToReplace,
    valueToReplaceWith) => {
        let result = '';
        let currentIndex = 0;
        const length = string.length;

        while (currentIndex < length) {
            const index = string.indexOf(valueToReplace, currentIndex);

            if (index === -1) {
                result += string.substring(currentIndex);
                break;
            }

            result += string.substring(currentIndex, index);
          
            result += valueToReplaceWith;
            
            currentIndex = index + valueToReplace.length;
        }

        return result;
    }
console.log(customReplace("The only way to do great work is to love what you do.", "do", "pursue"));


// Task 2

/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს string ტიპის მნიშვნელობას
(წინადადებას), მასში ყოველ სიტყვას
გადაწერს დიდი ასოთი და დააბრუნებს
ახალ წინადადებას
*/

const capitalizeWords = (sentence) => {
    const words = sentence.split(" ");

    const capitalizedWords = words.map(word => word.toUpperCase());

    const capitalizedSentence = capitalizedWords.join(" ");

    return capitalizedSentence;
}

console.log(capitalizeWords("hello my name is giorgi and i am software engineer"));


// Task 3

/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს მომხმარებლების მასივს და
დააბრუნებს დალაგებულ მასივს
მომხმარებლების ასაკის ზრდადობის
მიხედვით
მაგალითად, ჩავთვალოთ, რომ გვაქვს
[{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
20}]. ფუნქციამ უნდა დააბრუნოს [{name:
‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
შეგიძლია გამოიყენო sort() ფუნქცია
*/

const sortByAge = (users) => {
    users.sort((a, b) => a.age - b.age);

    return users;
}

const users = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
    { name: 'Levani', age:33 },
    { name: 'Giorgi', age:18 }
]

const sortedUsers = sortByAge(users);
console.log(sortedUsers);