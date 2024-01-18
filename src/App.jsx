import { useState, useEffect } from "react";
import JobInfo from './JobInfo'
import Btncontainer from './BtnContainer'
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  //current Item
  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    console.log(newJobs);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])
  if (isLoading) {
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">
    {/*button container*/}
    <Btncontainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    {/*job info*/}
    <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>
};
export default App;
