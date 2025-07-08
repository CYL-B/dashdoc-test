import type { Step } from "./types";
interface TimelineProps {
  steps: Step[];
}
const Timeline = ({steps}: TimelineProps) => {
  return (
    <div className="flex flex-col items-center p-4 gap-4">
     <h2 className="text-2xl font-bold mb-4 text-center">Timeline</h2>
    <ul className="timeline timeline-vertical justify-center">
      {steps.map((step, index) => (
        
        <li>
          <hr className="timeline-divider bg-amber-50" />
          <div className="timeline-start">Address {step.address}</div>
          <div className="timeline-middle">
            <span className="badge badge-neutral">{index + 1}</span>
          </div>
          <div className={`timeline-end timeline-box ${step.action === "pickup" ? "bg-accent-content" : "bg-accent"}`}>{step.action}</div>
          <hr />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Timeline;