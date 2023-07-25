import AptitudeTest from "../../Aptitude/aptitudeTest"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getJobApplicationById } from "../../../utils/backend/requests";
const TakeAptitudeTest = () => {
    const { id } = useParams();
    const [test, setTest] = useState([]); 
    useEffect(() => {  
        const getAptitudeTest = async () => {
          try{
            const res = await getJobApplicationById(id);
            const { aptitudeTest } = res; 
            if (!aptitudeTest) return console.log("No aptitude test found");
            setTest(aptitudeTest)
          }catch(err){
            console.log(err)
          }
        }
        getAptitudeTest();
    }, [])
  return (
    <AptitudeTest questions={test} />
  )
}

export default TakeAptitudeTest