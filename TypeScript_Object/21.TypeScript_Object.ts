// Write a program that creates Objects containing these items.
// define datatype of person object.
interface person {
    age: number,
    name: string,
    gender: string,
    nationality: string,
    student: boolean
}
// object of person , object is like data about data yani k kisi cheez k bary mn information dena .
let person: person = {
    age: 22,
    name: 'Shoaib',
    gender: 'Male',
    nationality: 'Pakistan',
    student: true

}
// yha pr min ny person k object ko print kraya.
console.log(person);

// yaha pr car k object ki data type di h  jis sy humain pata chalta h k maker string h or model mn number h color mn bhi string value hai .
interface car {
    maker: string,
    model: number,
    color: string,
    automatic: boolean

}
// yaha pr main ny ik or object bnaya car ka . ye object bnany ka tarika hi.
let car: car = {
    maker: 'Honda',
    model: 12,
    color: 'Black',
    automatic: false
}
console.log(car);
