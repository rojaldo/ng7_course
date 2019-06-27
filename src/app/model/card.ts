export class Card {

    question = '';
    answers: string[] = [];
    correctAnswer = '';
    responded = false;
    rightAnswer =  false;
    respondedIndex = -1;

    constructor(json: any) {
        this.question = json.question;
        this.answers = json.incorrect_answers;
        this.correctAnswer = json.correct_answer;
        this.answers.push(this.correctAnswer);
    }
}
