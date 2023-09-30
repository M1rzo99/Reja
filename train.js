//  E-TASK: E-Task: Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin

//masalan: getReverse("hello") return qilsin "olleh"
const str = async (data)=> {
 try {
    if (typeof (data) !== "string") throw new Error("Data not string");
  else {
    const spl = data.split("").reverse().join("")
    return spl;
  }
 } catch (error) {
   throw error;
 }
}
str("Hello ")
  .then((data) => { console.log(data) })
.catch((error)=>{console.log(`Error: ${error}`)})



