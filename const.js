// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.

// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)

class Car{
    constructor(make,model,year,isAvailable){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=year
    }
toggleAvailability(){
    this.isAvailable=! this.isAvailable
}
    
}
const car=new Car('Prado','toyota',2023,true)
    console.log(car.isAvailable);
car.toggleAvailability()
console.log(car.isAvailable);

// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car
        this.renterName=renterName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate
    }
    calculateRentalDuration(){
     const rentalStartDate=new Date(this.rentalStartDate);
     const rentalEndDate=new Date (this.rentalEndDate);
     const diff=rentalEndDate-rentalStartDate
    
     console.log(diff); 
    }
   
}


// Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.
const rental=new Rental('Mercdes','Mercy','25.2.2023','26.2.2023')
const rentDuration=rental.calculateRentalDuration()
console.log({rental});

// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
//  Create a Question class with the following properties:
// text(string): The text of the question.
//  options(array): An array containing the multiple-choice options.
// correctAnswer(string): The correct answer to the question.
// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.

class Question{
    constructor(text,options,correctanswer,){
        this.text=text
        this.options=options
        this.correctanswer=correctanswer

    }
  checkAnswer(){
    if(answer){
        console.log(true);
    }
    else{
        console.log(false);
    }
  }  
}
class Quiz{
    constructor(addquestion,currentQuestionsIndex,questions,score){
        this.addquestion=addquestion
        this.currentQuestionsIndex=currentQuestionsIndex
        this.questions=questions
        this.score=score
    }
    addquestion(question){
        question=[]
this.questions.push(question);
    }
    nextQuestions(){
       this.currentQuestionsIndex++ 
    }
    submitAnswer(answer){
   let currentlyQuestion=this.questions[this.currentQuestionsIndex];
   if(currentlyQuestion.checkAnswer(answer)){
    this.score++
   }
   this.nextQuestions
    }
}
let quiz= new Quiz('what is your name?',12,'how many years are?',45)
console.log({quiz});

