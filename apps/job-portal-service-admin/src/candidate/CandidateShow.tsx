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

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { JOB_TITLE_FIELD } from "../job/JobTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="resume" source="resume" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Application"
          target="candidateId"
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
