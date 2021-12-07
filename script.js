var positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
var employeeName = prompt(`Введіть  ${positions.length} імен через кому`); 
var getsNames = new Array(positions.length);
function getNames() {
    for (var i = 0; i < positions.length; i++) {
    getsNames = employeeName.split(',');
       
    }
    console.log(employeeName);
console.log(getsNames);
    
};
getNames();
var team = {};
function createTeam(){
function CreateEmployee(a,b,c) {
    
    this.name = a
    this.position = b
    this.salary = c
    this.tellAboutYourSelf = function () {
        console.log(`Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`) 
        }
        
            
}
    

for (var i = 0; i < positions.length; i++) {
       
    team['employee' + i] = new CreateEmployee(getsNames[i], positions[i], setSalary());
    team['employee' + i].tellAboutYourSelf();

    }
        
    
        
    
    console.log(team);
};
createTeam();




function setSalary() {
    for (var key in team){
        // if (typeof (team[key])==='object') {
        //     for (var i in team[key]) {
                        
         
    if (team[key].position.indexOf('Junior')) {
       alert(team[key].salary = Math.floor(Math.random() * 999) + 500);
    } else if (team[key].position.indexOf('Middle')) {
    team[key].salary = Math.floor(Math.random() * 1999) + 1500 ;

    } else if (team[key].position.indexOf('Senior')) {
    team[key].salary = Math.floor(Math.random() * 2999) + 2500 ;

    } else {
     team[key].salary = Math.floor(Math.random() * 4499) + 4000 ;   
    }
        
    
 }
};

setSalary();

function showTeam() {
    function ShowTeam() {
        this.showTeam = function () {
        for(var element in team){
            if (typeof (team[element]) === 'object') {
            console.log(` ${team[element].name} - ${team[element].position}. Зарплата - ${team[element].salary}$.`) 
    }
     }     
            
        }
    }
    
    team['showTeam'] = new ShowTeam();
    team['showTeam'].showTeam();
    console.log(team);
    
}
showTeam();