console.log("various methoeds of arrays and string");
//creating an array
let ar=['volvo','BMW','Ford'];
console.log(ar);//returns the number of elements in an array
//splicing
let arr=["I","am","sick"];
delete arr[0];//remove I
console.log(arr);
// alert(arr[1]);//undefined
// alert(arr.length);//shows length of an array
arr.splice(0,1,'Lets','dance');//removes element from o index and adds lets dance to the array
console.log(arr);

//slice methoed
// syntax: arr.slice([start],[end]);
let arr1=['I','owe','You','nothing'];
console.log(arr1.slice(0,4));

//concat
console.log(arr1.concat(arr));//concatinates 2 arrays

//filter:Returns an array of matching elements
let users = [{id:1,name:"jhon"},{id:2,name:"pete"},{id:3,name:"mary"}];
let someusers=users.filter(item=>item.id<3);
console.log(someusers);

//map :arr.map method calls the function of each element of array and returns the array of results
let lengths=["blow","gallon","ballon"].map(item=>item.length);
console.log(lengths);

//String Methods
let str = "hello";
let str1 = "User";
console.log(str.concat(str1));
//let result=str.codePointBefore(1);//throwin error dont know reason
console.log(str.contains("hel"));




