import ScanView from "./views/scanview";
function App() {

 const onDetected = result => {
    console.log("Im in");
    alert(result) ;
  }; 
  
  return (
    <div>
      <ScanView />
    </div>
  );
}

export default App;
