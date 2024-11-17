import { useState } from "react"
import HomeCategory from "../components/HomeCategory"
import HomeProducts from "../components/HomeProducts"

function Home () {
  const [categoryId, setcategoryId] = useState<number | string>("")

  return (
    <div className="'mt-[40px] pt-[40px] border-t-2 border-[#F6F6F6]'">
        
      <HomeCategory setCategoryId={setcategoryId}/>
      <div className='mt-8'>
                <h2 className='text-[32px] leading-[39px] font-bold'>Все пиццы</h2>
            </div>
      <HomeProducts categoryId={categoryId}/>
    </div>
  )
}

export default Home