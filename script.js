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
function CreateEmployee(a,b) {
    
    this.name = a
    this.position = b
    this.salary = setSalary(b)
    this.tellAboutYourSelf = function () {
        alert(`Меня зовут ${this.name} и я - ${this.position}. Я зарабатываю ${this.salary}$.`) 
        }
   
   
            
}
    

for (var i = 0; i < positions.length; i++) {
       
    team['employee' + i] = new CreateEmployee(getsNames[i], positions[i]);
    team['employee' + i].tellAboutYourSelf();
    
    }
        
    
        
    
    console.log(team);
}; 
 function setSalary(position) {
    
        if(position === 'Junior developer'||position === 'Junior QA'){
            return Math.floor(Math.random() * (999-500+1)) + 500;
        }else if (position === 'Middle developer'|| position === 'Middle QA' ){
            return Math.floor(Math.random() * (1999-1500+1)) + 1500 ;
 
        }else if (position === 'Senior developer'||position === 'Senior QA'){
            return Math.floor(Math.random() * (2999-2500+1)) + 2500 ;
        }else{
            return Math.floor(Math.random() * (4499-4000+1)) + 4000;
        }
    
}
createTeam();




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
    
    
}
showTeam();