import { useCallback, useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import Game from "./Pages/Game";

export const CATEGORIES = {
  Random: { ForUI: 'Random', ForAPI: 'random' },
  Arts: { ForUI: 'Arts & Literature', ForAPI: 'arts' },
  Film: { ForUI: 'Films & TV', ForAPI: 'films' },
  Food: { ForUI: 'Food & Drink', ForAPI: 'food' },
  General: { ForUI: 'General Knowladge', ForAPI: 'general' },
  Geography: { ForUI: 'Geography', ForAPI: 'geography' },
  History: { ForUI: 'History', ForAPI: 'history' },
  Music: { ForUI: 'Music', ForAPI: 'music' },
  Science: { ForUI: 'Science', ForAPI: 'science' },
  Society: { ForUI: 'Society & Culture', ForAPI: 'society' },
  Sport: { ForUI: 'Sport & Leisure', ForAPI: 'sport' },
};



function App() {
  const [category, setCategory] = useState(CATEGORIES.Random.ForAPI);
  const [numOfQuestions, setNumOfQuestions] = useState("3");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionsIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameStatus, setGameStatus] = useState(false)
  const [usersAnswerState, setUsersAnswerState] = useState(false)
  const [usersAnswer, setUsersAnswer] = useState()

  const getQuestions = useCallback(async () => {
    setIsLoading(true)
    const url =
      category === CATEGORIES.Random.ForAPI
        ? `https://the-trivia-api.com/api/questions?limit=${numOfQuestions}`
        : `https://the-trivia-api.com/api/questions?limit=${numOfQuestions}&categories=${category}`;
    const res = await axios.get(url);
    setQuestions(res.data);
    setIsLoading(false);
    setGameStatus(true)
  }, [category, numOfQuestions]);
  
  const handleEndOfGame = () => {
      setGameStatus(false)
      setNumOfQuestions('3')
      setCategory(CATEGORIES.Random.ForAPI)
      setIsLoading(false);
      setQuestions([]);
      setQuestionsIndex(0);
      setScore(0);
    }

  if(gameStatus){
    return(
      <div className="App">
        <Game
          question={questions[questionIndex]}
          isLoading={isLoading}
          answers={answers}
          setAnswers={setAnswers}
          questionIndex={questionIndex}
          setQuestionsIndex={setQuestionsIndex}
          setScore={setScore}
          score={score}
          numOfQuestions={numOfQuestions}
          handleEndOfGame={handleEndOfGame}
          setUsersAnswerState={setUsersAnswerState}
          usersAnswerState={usersAnswerState}
          usersAnswer={usersAnswer}
          setUsersAnswer={setUsersAnswer}
        />
      </div>
    )
  }else if(isLoading){
    return(
      <div className="App">
        <h1>Loading...</h1>

      </div>
    )
  }
  return (
    <div className="App">
      <Home
        setCategory={setCategory}
        setNumOfQuestions={setNumOfQuestions}
        getQuestions={getQuestions}
        category={category}
        numOfQuestions={numOfQuestions}
      />
    </div>
  );
}

export default App;

