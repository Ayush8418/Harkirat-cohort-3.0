const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

program
  .name('cli_todo')
  .description('CLI to some create/edit/delete todos in a file')
  .version('0.0.1');

program.command('update')
  .description('add a todo')
  .argument('<string>', 'file name')
  .option('-a, --add <string>', 'task to add')
  .option('-m, --mark <string>', 'index to mark')
  .option('-d, --delete <string>', 'index to delete')
  .action( async(str, options) => {
    try{
    if(options.add){
        console.log(options.add)
        console.log(str)
        fs.appendFile(str, options.add+"\n", (err)=>{
          console.log(err);
        });      
    }
    else if (options.delete) {
      fs.readFile(str, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const updatedData = data.replace(options.delete + "\n", "");
          fs.writeFile(str, updatedData, (err) => {
            if (err) console.log(err);
            else console.log("Task deleted!");
          });
        }
      });
    }
    else if(options.mark){
      fs.readFile(str, "utf8", (err, data)=>{
        if(err){
          console.log(err);
        }
        else{
          let ind = data.indexOf(options.mark);
          newData = data.substring(0,ind) + "(done)" + data.substring(ind, data.length);
          fs.writeFile(str, newData, (err) => {
            if (err) console.log(err);
            else console.log("Task marked!");
          });
        }
      })
    }
  }
  catch(err){
    console.log("task not appended");
    console.log(err);
  }
  });

program.parse();