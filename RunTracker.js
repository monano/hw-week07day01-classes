class RunTracker {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.runHistroy = [];
      
    }

    addRun(date, distance, timeTaken) {
        const run = {
            date: "",
            distance: "",
            timeTaken: ""
        }
        let r = run;
        r.date = date;
        r.distance = distance;
        r.timeTaken = timeTaken;
        this.runHistroy.push(r)
    }
    totalDistance() {
        return `${this.runHistroy.reduce((prev,curr)=>prev+curr.distance,0)} meters`
    }
    longestDistance() {
        return `${this.runHistroy.reduce((prev,curr)=> prev > curr.distance? prev:curr.distance,0)} meters`
    }
    averageSpeed() {
        let totalTime= this.runHistroy.reduce((prev,curr)=>prev+curr.timeTaken,0);
        let totalDistance= this.runHistroy.reduce((prev,curr)=>prev+curr.distance,0);
        return `${(totalTime/totalDistance).toFixed(1)} meters per second`
    }

}

let mona = new RunTracker("Mona","mona@gaihab.com");
mona.addRun("2019-08-05",30,25);
mona.addRun("2019-08-05",45,35);
mona.addRun("2019-08-05",20,15);
console.log(mona.totalDistance());
console.log(mona.longestDistance());
console.log(mona.averageSpeed());