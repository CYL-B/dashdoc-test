import type { Step } from "./types";

interface TableProps {
  steps: Step[];
}
const Table = ({steps}: TableProps) => {
  
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Delivery Steps</h2>
      <table className="table bg-base-100">
        {/* head */}
        <thead>
          <tr>
            <th>Step</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {steps.map((step, index) => { return(
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{step.address}</td>
                <td className={step.action === "pickup" ? "bg-accent-content" : "bg-accent"}>{step.action}</td>
              </tr>)}
            )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
