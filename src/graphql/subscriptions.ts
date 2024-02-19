/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateNumberValue = /* GraphQL */ `subscription OnCreateNumberValue(
  $filter: ModelSubscriptionNumberValueFilterInput
) {
  onCreateNumberValue(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNumberValueSubscriptionVariables,
  APITypes.OnCreateNumberValueSubscription
>;
export const onUpdateNumberValue = /* GraphQL */ `subscription OnUpdateNumberValue(
  $filter: ModelSubscriptionNumberValueFilterInput
) {
  onUpdateNumberValue(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNumberValueSubscriptionVariables,
  APITypes.OnUpdateNumberValueSubscription
>;
export const onDeleteNumberValue = /* GraphQL */ `subscription OnDeleteNumberValue(
  $filter: ModelSubscriptionNumberValueFilterInput
) {
  onDeleteNumberValue(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNumberValueSubscriptionVariables,
  APITypes.OnDeleteNumberValueSubscription
>;
