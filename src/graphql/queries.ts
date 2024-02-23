/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNumberValue = /* GraphQL */ `query GetNumberValue($id: ID) {
  getNumberValue(id: $id) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNumberValueQueryVariables,
  APITypes.GetNumberValueQuery
>;
export const listNumberValues = /* GraphQL */ `query ListNumberValues(
  $filter: ModelNumberValueFilterInput
  $limit: Int
  $nextToken: String
) {
  listNumberValues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      value
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNumberValuesQueryVariables,
  APITypes.ListNumberValuesQuery
>;
