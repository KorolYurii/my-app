// import logo from './logo.svg';
import './styles/reset.scss'
import './styles/main.scss'
import { useState } from 'react'



//components
import Error from './components/errorData'
import FormHandler from './components/form'
import CityName from './components/cityName'
import GenerateCards from './components/contentCard'
import GenerateDaysCards from './components/daysContentCard'
import GenerateHoursCards from './components/hoursContentCard'


export default function App() {
  const [resultData, setResultData] = useState(null);
  const [hoursData, setHoursData] = useState(null);
  const [daysData, setDaysData] = useState(null);
  const [location, setLocation] = useState(null)
  const [errorData, setErrorData] = useState(null)

  return (
    
    <div className="App">
      <div className="page_wraper">
        <div className="container">
          <div className="content_wrapper">
            <FormHandler 
              setResultData={(value) => setResultData(value)}
              setHoursData={(value) => setHoursData(value)}
              setErrorData={(value) => setErrorData(value)}
              setDaysData={(value) => setDaysData(value)}
              setLocation={(value) => setLocation(value)}              
              /> 
              
            <div id="content">
              <Error resultData={errorData}/>
              <GenerateCards results={resultData}/> 
            </div>
            
          </div> 
          <ul className="day_list">
            <GenerateDaysCards results={daysData}/>
          </ul>
          <div id="day_content">
            <CityName resultData={location}/> 
            <ul className="hours_list">
              <GenerateHoursCards resultData={hoursData}/>
            </ul>            
          </div>                     
          
            
        </div>
      </div>
    </div>
  );
  
}
// const root = ReactDOM.createRoot(document.getElementById('day_content'));
//  root.render(React.createElement())
// //export default App;
// <ul className="day_list">
{/* <GenerateDaysCards results={daysData}/>
</ul> */}