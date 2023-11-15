// import logo from './logo.svg';
import './styles/main.scss'


//components
import FormHandler from './components/form'
import ContentHandler from './components/content'
import DayContentHanler from './components/dayContent'

function App() {
  return (
    <div className="App">
      <div className="page_wraper">
        <div className="container">
          <div className="content_wrapper">
            <FormHandler/>  
            <div id="content">
              <ContentHandler/>
            </div>
          </div> 
          <div id="day_content">
            <DayContentHanler/>
          </div>                     
          
            
        </div>
      </div>
    </div>
  );
}

export default App;
