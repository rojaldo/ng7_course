export class Card {

    question = '';
    answers: string[] = [];
    correctAnswer = '';

    constructor(json: any) {
        this.question = json.question;
        this.answers = json.incorrect_answers;
        this.correctAnswer = json.correct_answer;
        this.answers.push(this.correctAnswer);
    }
}
