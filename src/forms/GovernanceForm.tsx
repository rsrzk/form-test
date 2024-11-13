import { FormWrapper } from "../FormWrapper";

type GovernanceData = {
    auditAcctDate: string
    managementAcctDate: string
}

type GovernanceFormProps = GovernanceData & {

    updateFields: (fields: Partial<GovernanceData>) => void
}

export function GovernanceForm({ auditAcctDate, managementAcctDate, updateFields }: GovernanceFormProps) {
    return (
        <FormWrapper title="Governance Questions">
            <label>When was your latest audited accounts?</label>
            <div>
                <div>
                    <input type="radio" name="auditAcctDate" value="Dated less than 6 months ago" onChange={e => updateFields({ auditAcctDate: e.target.value})} checked={auditAcctDate === 'Dated less than 6 months ago'} />
                    <label htmlFor="Dated less than 6 months ago">Dated less than 6 months ago</label>
                </div>
                <div>
                    <input type="radio" name="auditAcctDate" value="Dated between 6-12 months ago" onChange={e => updateFields({ auditAcctDate: e.target.value})} checked={auditAcctDate === 'Dated between 6-12 months ago'} />
                    <label htmlFor="Dated between 6-12 months ago">Dated between 6-12 months ago</label>
                </div>
                <div>
                    <input type="radio" name="auditAcctDate" value="Dated more than 12 months ago" onChange={e => updateFields({ auditAcctDate: e.target.value})} checked={auditAcctDate === 'Dated more than 12 months ago'} />
                    <label htmlFor="Dated more than 12 months ago">Dated more than 12 months ago</label>
                </div>
            </div>
            
            <label>When was your latest management accounts</label>
            <div>
                <div>
                    <input type="radio" name="managementAcctDate" value="Up to date till the last completed month" onChange={e => updateFields({ managementAcctDate: e.target.value})} checked={managementAcctDate === 'Up to date till the last completed month'} />
                    <label htmlFor="Up to date till the last completed month">Up to date till the last completed month</label>
                </div>
                <div>
                    <input type="radio" name="managementAcctDate" value="Up to date till the last completed 2 months" onChange={e => updateFields({ managementAcctDate: e.target.value})} checked={managementAcctDate === 'Up to date till the last completed 2 months'} />
                    <label htmlFor="Up to date till the last completed 2 months">Up to date till the last completed 2 months</label>
                </div>
                <div>
                    <input type="radio" name="managementAcctDate" value="Up to date till the last completed 3 months or more" onChange={e => updateFields({ managementAcctDate: e.target.value})} checked={managementAcctDate === 'Up to date till the last completed 3 months or more'} />
                    <label htmlFor="Up to date till the last completed 3 months or more">Up to date till the last completed 3 months or more</label>
                </div>
            </div>
        </FormWrapper>
    )
}