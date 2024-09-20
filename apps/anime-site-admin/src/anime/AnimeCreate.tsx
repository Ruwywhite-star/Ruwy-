import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const AnimeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="genre"
          label="genre"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="rating" source="rating" />
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
