import { useState } from "react";
import Scanner from "../components/barcodescanner";

const ScanView = props => {

    const [ItemFound, showFoundItem] = useState("");
  
  const onDetected = result => {
    if (result == "4007817119181")
    {
      showFoundItem("pack of pencils");
    }
    else if(result == "5060751215486")
    {
      showFoundItem("energy drink");
    }
    else
    {
      showFoundItem("barcode id: " + result + " not found")
    }
    
  }; 

  return (
    <div className="bg-bert-dark-grey h-screen">
      <div className="flex justify-center items-center">
        <Scanner onDetected={onDetected}/>
      </div>
      <div className="flex justify-center text-2xl text-bert-light-blue">
        Scan a barcode
      </div>
      <div className="text-bert-light-blue justify-center flex pt-10 text-xl">
        {ItemFound}
      </div>
    </div>
  );
};

export default ScanView;
