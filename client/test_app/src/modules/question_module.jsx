import AnsweModule from "./answer_module";

const QuestionModule = {
    id: String,
    question: String,
    answer_a: AnsweModule,
    answer_b: AnsweModule,
    answer_c: AnsweModule,
    answer_d: AnsweModule,
    img: String,
    idAnswerSelected: String,
    idAnswerCorrect: String,
}

export default QuestionModule;