import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth/useAuth";
import getRecommendWords from "../../services/recommend/getRecommendWords";
import InputForm from "../InputForm/InputForm";
import CustomSelect from "../CustomSelect/CustomSelect";
import TableRecommend from "../TableRecommend/TableRecommend";
import { BsArrowRight } from "react-icons/bs";


const RecommendWords = () => {

  const user = useAuth();
const [dataWords, setdataWords] = useState();
  
useEffect(() => {
  getRecommendWords(user.userId).then(red =>
setdataWords(red))

}, [user]);

if(dataWords){
  return (
   <div  >
 <div className=' flex flex-col gap-1.5 '><InputForm />
      <CustomSelect
        variant="dark"
      />
      <p
        className=" mt-5 text-[rgba(18,20,23,0.5)]
    font-macpaw
    text-[14px]
    font-medium
    leading-[17px]
    tracking-[0%]
    text-left
  "
      >
        To study:<span className=" text-black font-bold pl-0.5 ">{20}</span>
      </p>
      <div className=" flex gap-7 ">

        <button
          className="  font-macpaw
            font-medium
            text-[16px] flex items-center"
        >
          Train oneself{" "}
          <BsArrowRight size={24} className="pl-2 text-buttonColor" />
        </button>
      </div>
       <TableRecommend
          dataWord={dataWords}
          user={user?.userId}
        />
</div>
   </div>
  )
}else{
  <div></div>
}

}

export default RecommendWords