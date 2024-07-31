import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { JOB_TITLE_FIELD } from "./JobTitle";
import { EMPLOYER_TITLE_FIELD } from "../employer/EmployerTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="Employer"
          source="employer.id"
          reference="Employer"
        >
          <TextField source={EMPLOYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="salary" source="salary" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Application"
          target="jobId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="coverLetter" source="coverLetter" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Job" source="job.id" reference="Job">
              <TextField source={JOB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
