import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { EmployerTitle } from "../employer/EmployerTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applications"
          reference="Application"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApplicationTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="employer.id"
          reference="Employer"
          label="Employer"
        >
          <SelectInput optionText={EmployerTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <NumberInput label="salary" source="salary" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
