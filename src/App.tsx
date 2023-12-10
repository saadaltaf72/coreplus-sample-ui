import { useEffect, useState } from "react";
import "./app.css";
import { getAppointmentReport, getRemaining, getSupervisors } from "./ApiCalls";
import ReportUI from "./ReportUI";

function App() {

  const [supervisors, setSupervisors] = useState([])
  const [remaining, setRemaining] = useState([])
  const [formData, setFormData] = useState({ startDate: '', endDate: '', selectedPractitioner: null });
  const [summary, setSummary] = useState([])


  useEffect(() => {
    getSupervisors().then(setSupervisors);
    getRemaining().then(setRemaining);
    getSummaryData();

  }, [formData?.startDate, formData?.endDate, formData?.selectedPractitioner]);

  const handleOnChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    getSummaryData();
  };

  const getSummaryData = () => {

    getAppointmentReport(formData?.startDate, formData?.endDate).then((payload) => {
      setSummary(payload)
      console.log(payload)
    });

  }

  return (
    <div className="h-screen w-full appshell">
      <div className="header flex flex-row items-center p-2 bg-primary shadow-sm">
        <p className="font-bold text-lg">coreplus</p>
      </div>
      <div className="supervisors">
        <p className="underline">Supervisor practitioners</p>
        <div className="w-full ">
          {supervisors && supervisors.map((item) => (
            <p key={item.id} onClick={() => handleOnChange('selectedPractitioner', item.id)} className={"hover:bg-yellow-600 p-1 rounded cursor-pointer " + (formData?.selectedPractitioner === item.id ? " bg-yellow-700" : "")}>{item.name}</p>
          ))}
        </div>
      </div>
      <div className="praclist">
        <p className="underline">Remaining Practitioners</p>
        <div className="w-full ">
          {remaining && remaining.map((item) => (
            <p key={item.id} onClick={() => handleOnChange('selectedPractitioner', item.id)} className={"hover:bg-yellow-600 p-1 rounded cursor-pointer " + (formData?.selectedPractitioner === item.id ? " bg-yellow-700" : "")}>{item.name}</p>
          ))}
        </div>
      </div>
      <div className="pracinfo">
        <div className="w-full flex items-center justify-between">
          <p>
            Practitioner Report UI
          </p>
          <div className="flex items-center">
            <label className="mr-1">From</label>
            <input type="date" value={formData?.startDate} onChange={(e) => handleOnChange('startDate', e.target.value)} className="mx-1 w-32 rounded p-1" />
            <label className="ml-5 mr-1">To</label>
            <input type="date" value={formData?.endDate} onChange={(e) => handleOnChange('endDate', e.target.value)} className="ml-1 w-32 rounded p-1" />
          </div>



        </div>

        {summary.length > 0 ? <ReportUI summary={summary} /> : '~ No Data is available for the summary ~'}

      </div>
    </div>
  );
}

export default App;
