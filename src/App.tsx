import { FormEvent, useState } from "react"
import { AccountForm } from "./forms/AccountForm"
import { PerformanceForm } from "./forms/PerformanceForm"
import { IssuerForm } from "./forms/IssuerForm"
import { useMultistepForm } from "./useMultistepForm"
import { GovernanceForm } from "./forms/GovernanceForm"
import './App.css'

type FormData = {
  email: string
  password: string
  companyName: string
  registrationNumber: string
  companyCategory: string
  site: string
  sales1: string
  sales2: string
  sales3: string
  salesYear1: string
  salesYear2: string
  salesYear3: string
  deposit1: string
  deposit2: string
  deposit3: string
  deposit4: string
  month1: string
  month2: string
  month3: string
  month4: string
  auditAcctDate: string
  managementAcctDate: string
}

const INITIAL_DATA: FormData = {
  email: "",
  password: "",
  companyName: "",
  registrationNumber: "",
  companyCategory: "",
  site: "",
  sales1: "",
  sales2: "",
  sales3: "",
  salesYear1: "",
  salesYear2: "",
  salesYear3: "",
  deposit1: "",
  deposit2: "",
  deposit3: "",
  deposit4: "",
  month1: "",
  month2: "",
  month3: "",
  month4: "",
  auditAcctDate: "",
  managementAcctDate: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(350);
  const [loan, setLoan] = useState(50000);
  const [rating, setRating] = useState("Acceptable");
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {
        ...prev, ...fields
      }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, back, isLastStep, next } = useMultistepForm([
    <AccountForm {...data} updateFields={updateFields} />,
    <IssuerForm {...data} updateFields={updateFields} />,
    <PerformanceForm {...data} updateFields={updateFields} />,
    <GovernanceForm {...data} updateFields={updateFields} />,
  ])
  
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
    let loanvalue:number = (Number(INITIAL_DATA.deposit1) + Number(INITIAL_DATA.deposit2) + Number(INITIAL_DATA.deposit3) + Number(INITIAL_DATA.deposit4)) / 4;
    setLoan(loanvalue);
    setScore(350)
    setRating("Acceptable")
    setShowScore(true);
  }

  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial",
      maxWidth: "max-content",
    }}>
      {showScore ? (
				<div>
          <h4>Thank you for your application</h4>
					<p>Based on your response, your preliminary credit score is <span>{score}</span> which is <span>{rating}</span>.</p>
          <p>Congratulations, you are eligible for RM<span>{loan}</span> financing for 12 months! Please proceed with document submissions to finalise your loan offer.</p>
				</div>
			) : (
        <form onSubmit={onSubmit}>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>)}
            <button type="submit">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default App
