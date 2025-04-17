// switch syntax : 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ++++++++++++++++++++++++++++++++++++++++++++

const month = 3 //in place of 3, if there would have been "jan", then later would be case "jan": 

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("not matched month");
        
        break;
}