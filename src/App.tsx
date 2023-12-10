import { useEffect, useState } from "react";
import "./app.css";
import { getRemaining, getSupervisors } from "./ApiCalls";

function App() {

  const [supervisors, setSupervisors] = useState([])
  const [remaining, setRemaining] = useState([])

  useEffect(() => {
    getSupervisors().then((payload) => {
      setSupervisors(payload)
    });
    getRemaining().then((payload) => {
      setRemaining(payload)
    });

  }, [])

  return (
    <div className="h-screen w-full appshell">
      <div className="header flex flex-row items-center p-2 bg-primary shadow-sm">
        <p className="font-bold text-lg">coreplus</p>
      </div>
      <div className="supervisors">
        <p className="underline">Supervisor practitioners</p>
        <div className="w-full ">
          {supervisors && supervisors.map((item) => (
            <p className="hover:bg-yellow-700 p-1 rounded cursor-pointer">{item.name}</p>
          ))}
        </div>
      </div>
      <div className="praclist">
        <p className="underline">Remaining Practitioners</p>
        <div className="w-full ">
          {remaining && remaining.map((item) => (
            <p className="hover:bg-yellow-700 p-1 rounded cursor-pointer">{item.name}</p>
          ))}
        </div>
      </div>
      <div className="pracinfo">
        <div className="w-full flex items-center justify-between">
          <p>
            Practitioner Report UI
          </p>
          <input type="date"></input>
        </div>

      </div>
    </div>
  );
}

export default App;
