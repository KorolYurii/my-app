// import logo from './logo.svg';
import './styles/reset.scss'
import './styles/main.scss'
import { useState } from 'react'

//components
import FormHandler from './components/form'
import GenerateCards from './components/contentCard'
import GenerateDaysCards from './components/dayContentCard'

export default function App(props) {
  const [resultData, setResultData] = useState(null);
  const [daysData, setDaysData] = useState(null);
 
  return (
    
    <div className="App">
      <div className="page_wraper">
        <div className="container">
          <div className="content_wrapper">
            <FormHandler 
              setResultData={(value) => setResultData(value)}
              setDaysData={(value) => setDaysData(value)}/>  
            <div id="content">
              <GenerateCards results={resultData}/>
            </div>
          </div> 
          <div id="day_content">
            
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
