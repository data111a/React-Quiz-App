import { CATEGORIES } from "../App"

function ChooseCategorySection({setCategory,category}){
    const entries = Object.entries(CATEGORIES)
    return(
    <>
        <label>Choose category : </label>
        <div className="selection_section_category_div">
            {entries.map(([Category, Value],index)=>{
                return(
                    <div onClick={() => setCategory(Value.ForAPI)} className={category==Value.ForAPI?'active_category_div':'category_div'}>
                        <p>{Value.ForUI}</p>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default ChooseCategorySection