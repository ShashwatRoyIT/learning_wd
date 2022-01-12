let student={
    first_name:'Shashwat',
    last_name:'Roy',
    age:21,
    height:170,

    studentInfo: function(){
        return this.first_name+'\n'+this.last_name;

    }
};
//console.log(student.first_name);
//console.log(student.last_name);
//student.first_name='Ritik';
student.age++;
//console.log(student.first_name+'  '+student.age);
console.log(student.studentInfo());
