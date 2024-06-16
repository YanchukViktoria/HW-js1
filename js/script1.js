let user = {
    name: "Vikatoriia",
    age: 16,
    isStudent: true,
    myString: `"If u think that u can do something, u'r right; And if u thik u can't do something, u'r right too."`,
    myNumber: 816,
    myNull: null,
}

let countedNumber = user.myNumber += 10;

function chek() {
    let request = prompt(`Enter a name`);

    if (request === `Viktoria`) {
        
        function caveat() {
            let allertion = prompt(`Are you sure about the name? (yes/no)`)
        
            if (allertion === `yes`) {
                alert(`Name: ${user.name} \nAge: ${user.age} \nStudent?: ${user.isStudent} \nMy string: ${user.myString} \nNumber: ${user.myNumber} \nCounted number: ${countedNumber} \nNull: ${user.myNull}`);
            } else if (allertion === `no`){
                alert(`ok`);
            } else {
                alert(`I dont understand`);
            }
        }

        caveat()
        
    } else {
        alert(`Hello ${request}`);
    }
}

chek()

