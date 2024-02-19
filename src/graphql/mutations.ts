/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNumberValue = /* GraphQL */ `mutation CreateNumberValue(
  $input: CreateNumberValueInput!
  $condition: ModelNumberValueConditionInput
) {
  createNumberValue(input: $input, condition: $condition) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNumberValueMutationVariables,
  APITypes.CreateNumberValueMutation
>;
export const updateNumberValue = /* GraphQL */ `mutation UpdateNumberValue(
  $input: UpdateNumberValueInput!
  $condition: ModelNumberValueConditionInput
) {
  updateNumberValue(input: $input, condition: $condition) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNumberValueMutationVariables,
  APITypes.UpdateNumberValueMutation
>;
export const deleteNumberValue = /* GraphQL */ `mutation DeleteNumberValue(
  $input: DeleteNumberValueInput!
  $condition: ModelNumberValueConditionInput
) {
  deleteNumberValue(input: $input, condition: $condition) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNumberValueMutationVariables,
  APITypes.DeleteNumberValueMutation
>;
