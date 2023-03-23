import './App.css';
import {UploaderComponent} from '@syncfusion/ej2-react-inputs';
function App() {
  const path = {
    saveUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Save",
    removeUrl: "https://ej2.syncfusion.com/services/api/uploadbox/Remove",
    chunkSize: 102400
  }
  return (
    <div className="App">
      <UploaderComponent asyncSettings={path} 
        multiple={true}
        autoUpload={true}
        sequentialUpload={true}
        directoryUpload={false}
        allowedExtensions=".pdf"
        minFileSize={10000}
        maxFileSize={100000}>
      </UploaderComponent>
    </div>
  );
}

export default App;
