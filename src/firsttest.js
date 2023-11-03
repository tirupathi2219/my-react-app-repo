const getFullname = (fname, lname) => {
    return `${fname}${lname}`
}
actualFulName = getFullname('tirupathirao','kottisa')
const expected = "tirupathirao kottisa"

if(!actualFulName === expected){
    throw new Error(`${actualFulName} is not equals to ${expected}`)
}