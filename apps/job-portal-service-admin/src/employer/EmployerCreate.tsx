import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";
import { UserTitle } from "../user/UserTitle";

export const EmployerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="companyName" source="companyName" />
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Create>
  );
};
