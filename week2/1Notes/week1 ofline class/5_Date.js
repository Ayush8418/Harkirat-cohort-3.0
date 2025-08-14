function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);
  console.log("Current Date:", currentDate.toString());

  // Getting various components of the date
  console.log("UTC Date:", currentDate.getUTCDate());
  console.log("ISO/Local Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

function getHoursAfter1978(){
    const x = new Date();
    const hours = x.getTime()/(100*60*60)
    console.log("hours passed Since 1978 is: ", hours);
}
getHoursAfter1978()


// get Time to execute x console.log()
function getExecutionTime(oprs){
    let myDate = new Date();
    const beforeTime = myDate.getTime();
    for(let i=0 ; i<oprs ; i++){
        console.log(i);
    }
    let myDate2 = new Date();
    const afterTime = myDate2.getTime();
    console.log("Total Time taken: ",afterTime-beforeTime);
    console.log("time per operation: ",(afterTime-beforeTime)/oprs);
}

// getExecutionTime(100000);
// getExecutionTime(100);