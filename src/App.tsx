import "./App.css";
import { useState } from "react";
import deliveryChecker from "./deliveryChecker";
import Editor from "./editor";
import Table from "./table";
import Timeline from "./timeline";
import type { Result } from "./types";

function App() {
  const [delivery, setDelivery] = useState<string>("");
  const [result, setResult] = useState<Result | null>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    //avec l'aide de l'IA
    try {
      const parsed = JSON.parse(delivery);
      const { deliveries, path } = parsed;
      const res = deliveryChecker(deliveries, path);
      setResult(() => {
        return res;
      });
      setError(null);
    } catch (e: unknown) {
      setError("Invalid JSON format");
      setResult(null);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold self-center">
          Delivery path generator tool
        </h1>
        {result && result.status === "success" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Table steps={result.steps} />
              <Timeline steps={result.steps} />
            </div>
          </div>
        )}
        {result && result.status === "error" && (
          <div className="alert alert-error">
            <p>{result.error_message}</p>
          </div>
        )}
        <Editor delivery={delivery} onDeliveryChange={setDelivery} />
        {error && <div className="alert alert-error">{error}</div>}
        <button className="btn btn-primary" onClick={handleSubmit}>
          Generate
        </button>
      </div>
    </main>
  );
}

export default App;
