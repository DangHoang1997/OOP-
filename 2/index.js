import { question } from "./data.js";

class Question {
  constructor(id, questionType, content, answers) {
    this.id = id;
    this.questionType = questionType;
    this.content = content;
    this.answers = answers;
    this.userAnser = null;
  }

  checkAnswer() {}
}

class SingleChoice extends Question {
  constructor(id, content, answers) {
    super(id, 1, content, answers);
  }
}

class FillInBlank extends Question {
  constructor(id, content, answers) {
    super(id, 2, content, answers);
  }
}

let dataQuestions = question.map((item) => {
    let { id, questionType, content, answers } = item;
    return questionType ===1 ?new SingleChoice(id,content,answers): new FillInBlank(id,content,answers)
  });

  console.log("dataQuestions",dataQuestions);
  
