function addTwo(num: number): number {
    return num + 2
    // return "Hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (email: string, name: string, isPaid: boolean = false) => {}

addTwo(2)
getUpper("michał")
signUpUser("Michał", "michal@mail.com", false)
loginUser("h", "h@h.com")

// function getValue(myVal: number){
//     if(myVal > 5) {
//         return true
//     } 
//     return "200k"
// }

const getHello = (s: string):string => {
    return "aa"
}

const heros = ["thor", "spiderman", "ironman"]
const herosNum = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(error: string): void {
    console.log(error);

}

function handleError(error: string): never {
    throw new Error(error)

}

export {}