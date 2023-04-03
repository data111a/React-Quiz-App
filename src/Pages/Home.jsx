import { useEffect } from "react"
import { CATEGORIES } from "../App"
import ChooseCategorySection from "../Components/ChooseCategorySection"
import ChooseNumOfQuestionsSection from "../Components/ChooseNumOfQuestionsSection"



function Home({setCategory, setNumOfQuestions,getQuestions,category,numOfQuestions}){
    return(
        <div className="selection_section_div">
            <ChooseCategorySection setCategory={setCategory} category={category}/>
            <ChooseNumOfQuestionsSection setNumOfQuestions={setNumOfQuestions} numOfQuestions={numOfQuestions}/>
            <button className="stat_game_btn" onClick={getQuestions}>Start game</button>
        </div>
    )
}

export default Home