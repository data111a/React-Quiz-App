import { useEffect } from "react"
import shuffle from "../shuffle"
import AnswerChoice from "../Components/AnswerChoice"


function Game({usersAnswer,setUsersAnswer,question,isLoading,answers,setAnswers,ChangeQuestion,questionIndex,setQuestionsIndex,setScore,score,numOfQuestions,handleEndOfGame,setUsersAnswerState,usersAnswerState}){
    function handleSumbmit(e){
        setUsersAnswerState(true)
        setUsersAnswer(e.target.innerText)
        if(e.target.innerText == question?.correctAnswer){
            setScore(score + 1)
        }
    }
    function ChangeQuestion(){
        setQuestionsIndex(questionIndex+1)
        setUsersAnswerState(false)
    }
    if(question == null && !isLoading && (questionIndex == numOfQuestions)){
        return(
            <div className={score==numOfQuestions?'good_results_div':score<numOfQuestions&&score>numOfQuestions/2?'average_results_div':'results_div'}>
                <h1>you scored : {score} out of {numOfQuestions}</h1>
                <button onClick={handleEndOfGame}>Back to Home</button>
            </div>
            )
    }else if(question == null && !isLoading){
        return(
            <h1 className="error">ERROR 404</h1>
            )
        }

    useEffect(() => {
        setAnswers(shuffle([...[question?.correctAnswer],...question?.incorrectAnswers]))
    },[questionIndex])
    console.log(question?.correctAnswer);
    return(
        <div className="Game">
            <h1 className="question">Question : {question?.question}</h1>
            <div className={usersAnswerState?'submited_answers_div':'answers_div'}>
                {answers.map((answer)=>{
                    return(
                        <AnswerChoice answer={answer} handleSumbmit={handleSumbmit} question={question} usersAnswer={usersAnswer} correctAnswer={question?.correctAnswer} usersAnswerState={usersAnswerState}/>
                        )
                    })}
            </div>
            {usersAnswerState!=''&&<button onClick={ChangeQuestion} id="submit_btn" className={(usersAnswer==question?.correctAnswer)&&usersAnswerState?'correct_submit_btn':'submit_btn'}>Next Question</button>}
        </div>
    )
}

export default Game
