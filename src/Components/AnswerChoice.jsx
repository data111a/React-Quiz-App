function AnswerChoice({ answer, handleSumbmit, usersAnswer, correctAnswer, usersAnswerState }) {
  let className = 'answer_div';
  
  if (usersAnswerState) {
    if (answer === correctAnswer) {
      className = 'correct_answer_div';
    } else if (usersAnswer === answer) {
      className = 'incorrect_answer_div';
    }
  }

  return (
      <div className={className} onClick={(e) => handleSumbmit(e)} href>
        <p>{answer}</p>
      </div>
  );
}
  
export default AnswerChoice;
  