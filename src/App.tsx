import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert,setalert] = useState(false);
  return (
    <div>
      {alert && <Alert onClose={() => setalert(false)}>My alert</Alert>}
      <Button color = "secondary" onClick={() => setalert(true)}>MY Button</Button>
    </div>
  );
}

export default App;
