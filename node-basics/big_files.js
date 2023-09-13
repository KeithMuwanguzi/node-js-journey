//Reading and Writing to big Files is different
//This is coz we need Streams to access the data

const fs = require('fs')



// read_file_name = './files/big_data/blog4.txt'
// write_file_name = './files/big_data/blog5.txt'
// if(fs.existsSync(read_file_name)){
//     readStream = fs.createReadStream(read_file_name)
//     writeStream = fs.createWriteStream(write_file_name)
//     readStream.on('data',(chunk)=>{
//         console.log('\n---------------New-------------Chunk\n')
//         writeStream.write(chunk)
//     })
// }else{
//     console.log('File does not exist')
// }

read_file_name = './files/big_data/blog4.txt'
write_file_name = './files/big_data/blog5.txt'
if(fs.existsSync(read_file_name)){
    readStream = fs.createReadStream(read_file_name)
    writeStream = fs.createWriteStream(write_file_name)
    readStream.pipe(writeStream)
}else{
    console.log('File does not exist')
}