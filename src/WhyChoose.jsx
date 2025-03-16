import { CheckCircle2 } from "lucide-react";
import codeImg from "./assets/src.jpg";
import { checklistItems } from "./constants";
import "./WhyChoose.css";

function Workflow() {
  return (
    <div className="workflow-container">
      <h2 className="workflow-heading">
        Why Choose
        <span className="gradient-text"> IPANAC?</span>
      </h2>
      
      <div className="flex-container">
        <div className="image-container">
          <img src={codeImg} alt="Code" />
        </div>
        
        <div className="checklist-container">
          {checklistItems.map((item, index) => (
            <div key={index} className="checklist-item">
              <div className="icon-wrapper">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="item-content-title">{item.title}</h5>
                <p className="item-content-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;