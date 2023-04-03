function ChooseNumOfQuestionsSection({setNumOfQuestions,numOfQuestions}){
    return(
        <div className="selection_section_numOfQuestions_div">
            <label>Choose number of questions : </label>
            <div className="num">
                <div className={numOfQuestions=='3'?'active_choose_num_of_questions':"choose_num_of_questions"} onClick={()=>setNumOfQuestions('3')}>
                    <p>3</p>
                </div>
                <div className={numOfQuestions=='5'?'active_choose_num_of_questions':"choose_num_of_questions"} onClick={()=>setNumOfQuestions('5')}>
                    <p>5</p>
                </div>
                <div className={numOfQuestions=='10'?'active_choose_num_of_questions':"choose_num_of_questions"} onClick={()=>setNumOfQuestions('10')}>
                    <p>10</p>
                </div>
                <div className={numOfQuestions=='15'?'active_choose_num_of_questions':"choose_num_of_questions"} onClick={()=>setNumOfQuestions('15')}>
                    <p>15</p>
                </div>
                <div className={numOfQuestions=='20'?'active_choose_num_of_questions':"choose_num_of_questions"} onClick={()=>setNumOfQuestions('20')}>
                    <p>20</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseNumOfQuestionsSection