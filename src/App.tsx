import "./styles.css";
import useCycleLoadingMessage from "./hooks/useCycleLoadingMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useEffect, useState } from "react";
export default function App() {
  const [loadingCondition, setLoadingCondition] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadingCondition(false), 10000);
  }, []);
  const message = useCycleLoadingMessage(loadingCondition);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        {loadingCondition ? (
          <>
            <CircularProgress />
            <h2>{message} </h2>{" "}
          </>
        ) : (
          <h1>Data the user wanted to see :)</h1>
        )}
      </div>
    </div>
  );
}
