//Adding an activity
let activities = [];
let dateToday = new Date().toLocaleDateString("en-US");
function addActivity( activity, duration){
    activities.push({
        date: dateToday,
        activity: activity,
        durationInMin: duration
    });
}
addActivity('Youtube', 9);
addActivity('Facebook', 40);
console.log(activities);

//Show my status
//limitOfUsageVariable to set limit of usage of smartphone.
const limitOfUsage = 120;
function showStatus(){
    let noOfActivities = activities.length;
    let totalUsage = 0;
    for( let i = 0; i < noOfActivities; i++ ){
    //checking if activity is from today. 
        if( activities[i].date === dateToday ){
            totalUsage += activities[i].durationInMin;
        }
    }
    //Using if else to check limit of usage:    
    if( noOfActivities === 0 ){
        return "Add some activities before calling showStatus.";
    } else if( totalUsage < limitOfUsage ){
        return "You have added "+ noOfActivities + " activities. Which amount to " + totalUsage + " minutes of usage.";
    } else if( totalUsage === limitOfUsage ) {
        return "You have reached your limit of " + limitOfUsage + " mins. No more smartphone for you!";
    } else {
        return "You have used your phone " + (totalUsage - limitOfUsage) + " mins more than your limit. So no more phone now!";
    }
}
console.log( showStatus() );

/*Extra feature: 
    improved addActivity, now it takes todays date. line:3
    Improve the showStatus to show the number of actitivies for that specific day. line:23
    function for calculating the activity a user has spent the most time on. line:45
*/
function mostSpentTimeOn(){
    //WORK STILL IN PROGRESS! :D
}