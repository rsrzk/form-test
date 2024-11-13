import { FormWrapper } from "../FormWrapper";

type PerformanceData = {
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
}

type PerformanceFormProps = PerformanceData & {

    updateFields: (fields: Partial<PerformanceData>) => void
}

export function PerformanceForm( { sales1, sales2, sales3, salesYear1, salesYear2, salesYear3, deposit1, deposit2, deposit3, deposit4, month1, month2, month3, month4, updateFields }:  PerformanceFormProps ) {
    return (
        <FormWrapper title="Performance">
            <label style={{
                marginTop: "2rem",
            }}
            >
                What were your annual sales for the last 3 years?
            </label>
            <br/>
            <p>Year 1</p>
            <p>Value</p>
            <input required min={1} type="number" value={salesYear1} onChange={e => updateFields({ salesYear1: e.target.value})} />
            <input required min={1} type="number" value={sales1} onChange={e => updateFields({ sales1: e.target.value})} />
            <p>Year 2</p>
            <p>Value</p>
            <input required min={1} type="number" value={salesYear2} onChange={e => updateFields({ salesYear2: e.target.value})} />
            <input required min={1} type="number" value={sales2} onChange={e => updateFields({ sales2: e.target.value})} />
            <p>Year 3</p>
            <p>Value</p>
            <input required min={1} type="number" value={salesYear3} onChange={e => updateFields({ salesYear3: e.target.value})} />
            <input required min={1} type="number" value={sales3} onChange={e => updateFields({ sales3: e.target.value})} />
            
            <label style={{
                marginTop: "3rem",
            }}
            >
                What were your bank deposits balance for the last 4 months?
            </label>
            <br/>
            <p>Month 1</p>
            <p>Value</p>
            <input required min={1} type="number" value={month1} onChange={e => updateFields({ month1: e.target.value})} />
            <input required min={1} type="number" value={deposit1} onChange={e => updateFields({ deposit1: e.target.value})} />
            <p>Month 2</p>
            <p>Value</p>
            <input required min={1} type="number" value={month2} onChange={e => updateFields({ month2: e.target.value})} />
            <input required min={1} type="number" value={deposit2} onChange={e => updateFields({ deposit2: e.target.value})} />
            <p>Month 3</p>
            <p>Value</p>
            <input required min={1} type="number" value={month3} onChange={e => updateFields({ month3: e.target.value})} />
            <input required min={1} type="number" value={deposit3} onChange={e => updateFields({ deposit3: e.target.value})} />
            <p>Month 4</p>
            <p>Value</p>
            <input required min={1} type="number" value={month4} onChange={e => updateFields({ month4: e.target.value})} />
            <input required min={1} type="number" value={deposit4} onChange={e => updateFields({ deposit4: e.target.value})} />
            <br/>
        </FormWrapper>
    )
}