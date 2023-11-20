// import logo from './logo.svg';
import './styles/reset.scss'
import './styles/main.scss'
import { useState } from 'react'


//components
import Error from './components/errorData'
import FormHandler from './components/form'
import GenerateCards from './components/contentCard'
import GenerateDaysCards from './components/dayContentCard'
import CityName from './components/cityName'

export default function App() {
  const [resultData, setResultData] = useState(null);
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
              setDaysData={(value) => setDaysData(value)}
              setLocation={(value) => setLocation(value)}
              setErrorData={(value) => setErrorData(value)}
              /> 
              
            <div id="content">
              <GenerateCards results={resultData}/> 
              <Error resultData={errorData}/>
            </div>
          </div> 
          <div id="day_content">
            <CityName resultData={location}/> 
            <ul className="day_list">
              <GenerateDaysCards resultData={daysData}/>
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
