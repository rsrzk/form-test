import { FormWrapper } from "../FormWrapper";

type IssuerData = {
    companyName: string
    registrationNumber: string
    companyCategory: string
    site: string
}

type IssuerFormProps = IssuerData & {

    updateFields: (fields: Partial<IssuerData>) => void
}

export function IssuerForm({ companyName, registrationNumber, companyCategory, site, updateFields }: IssuerFormProps) {
    return (
        <FormWrapper title="Issuer Details">
            <label>Company Name</label>
            <input autoFocus required type="text" value={companyName} onChange={e => updateFields({ companyName: e.target.value})}/>
            <label>Company Registration Number</label>
            <input required type="text" value={registrationNumber} onChange={e => updateFields({ registrationNumber: e.target.value})} />
            <label>Company Category</label>
            <input required type="text" value={companyCategory} onChange={e => updateFields({ companyCategory: e.target.value})} />
            {/* Change to dropdown */}
            <label>Company websites and/or social media (add URL)</label>
            <input required type="text" value={site} onChange={e => updateFields({ site: e.target.value})} />
            {/* Create adding function */}
        </FormWrapper>
    )
}