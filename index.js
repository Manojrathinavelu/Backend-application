import fs from 'fs';
// function filecreate() {
//     try {
//         fs.writeFileSync("./sample.txt", "Hello guys welcome to my channel");
//     } catch(err) {
//         console.log(err.message);
//     }
// }
// filecreate();

// function blogadd(){
//     const data = [
//         {
//             title:"BlogPost2",
//             active:true,
//             location:"chennai"
//         },
//         {
//             title:"BlogPost1",
//             active:false,
//             location:"chennai"

//         }
//     ]
//     try{
//         fs.writeFileSync("./blog.json",JSON.stringify(data,null,2));
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }
// blogadd()


// fs.readFile("./blog.json","utf-8",(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }
//     else {
//           console.log("readed successfully");
//           try{
//            const res= JSON.parse(data);
//           }
//           catch(err){
//             console.log(err.message)
//           }
//     // update(res);
// }
// })


fs.readFile("./blog.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Read successfully");
        try {
            const res = JSON.parse(data);
            console.log(res);
        } catch (err) {
            console.log("Error parsing JSON:", err.message);
        }
    }
});


function update(res){
    const insert={
        "location": "kanyakumari"
    }
    try{
        for(let i=0;i< res.length();i++){
            if(res[i].location === "chennai"){
                (res[i].location = insert[0].location);
                fs.writeFile("./blog.json",JSON.stringify(res,null,2));
            }
        }
    }
    catch(err){
        console.log(err.message);
    }
}
update()
