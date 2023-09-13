//reading small files
//writing small files
//creating folders
//deleting folders

const fs = require('fs')

folder_name = './files/small_data'
if(!fs.existsSync(folder_name)){
    fs.mkdir(folder_name,(err)=>{
        if(err){
            console.log('An error occured')
        }else{
            console.log('Folder created')
            file_name = folder_name + '/blog2.txt'
        if(fs.existsSync(file_name)){
            fs.readFile(file_name,(err,data)=>{
            if(err){
                console.log('Check if the file exists')
            }
            else{
                console.log(data.toString())
            }
    })
}else{
    fs.writeFile(file_name,'Hey There',()=>{
        console.log(`File created at ${__dirname}`)

    })
}
        }
    })
}else{
    fs.rmdir(folder_name,(err)=>{
        if(err){
            console.log('File contains contents')
        }else{
            console.log('Folder Deleted')
        }
    })
}
