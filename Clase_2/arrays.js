//array 1
let myarray = []
let myarray2 = new Array()
console.log(typeof(myarray))
console.log(typeof(myarray2))

myarray=[1,2,3,4,5]

myarray[7]=8
myarray.push("Dino")
console.log(myarray)    
//Set estructura de daos como el array
let myset = new Set()
myset=new Set(["1","2",5])
console.log(myset)
myset.add("elemento nuevo")
myset.delete("10")
console.log(myset)

//Map Estructura de datos como el array
let mymap = new Map()
mymap=new Map([["nombre","Dino"],
    ["apellido","Amieva"],
    ["edad",21]
])
mymap.set("alias","di")
console.log(mymap)
console.log(mymap.get("nombre"))
mymap.delete("apellido")
console.log(mymap)

//loops
for(let i=0;i<5;i++){
    console.log("Iteraccion "+i)
}   
for(let index=0; index<myarray.length;index++){
    console.log("Elemento del Array-> "+ myarray[index])
}
for(let valor of mymap){
    console.log("Valor del Map-> "+valor)
}
let i=0
while(i<5){
    console.log("Elemento del Array-> "+i)
    i++
}
i=11
do {
    console.log("Elemento del do while-> "+i)
    i++
}while(i<10)