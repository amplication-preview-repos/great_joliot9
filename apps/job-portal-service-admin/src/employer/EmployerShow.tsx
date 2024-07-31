import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYER_TITLE_FIELD } from "./EmployerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmployerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="website" source="website" />
        <ReferenceManyField reference="Job" target="employerId" label="Jobs">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
