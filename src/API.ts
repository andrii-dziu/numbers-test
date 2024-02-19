/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNumberValueInput = {
  id?: string | null,
  value: number,
};

export type ModelNumberValueConditionInput = {
  value?: ModelIntInput | null,
  and?: Array< ModelNumberValueConditionInput | null > | null,
  or?: Array< ModelNumberValueConditionInput | null > | null,
  not?: ModelNumberValueConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type NumberValue = {
  __typename: "NumberValue",
  id: string,
  value: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNumberValueInput = {
  id: string,
  value?: number | null,
};

export type DeleteNumberValueInput = {
  id: string,
};

export type ModelNumberValueFilterInput = {
  id?: ModelIDInput | null,
  value?: ModelIntInput | null,
  and?: Array< ModelNumberValueFilterInput | null > | null,
  or?: Array< ModelNumberValueFilterInput | null > | null,
  not?: ModelNumberValueFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelNumberValueConnection = {
  __typename: "ModelNumberValueConnection",
  items:  Array<NumberValue | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionNumberValueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  value?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionNumberValueFilterInput | null > | null,
  or?: Array< ModelSubscriptionNumberValueFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateNumberValueMutationVariables = {
  input: CreateNumberValueInput,
  condition?: ModelNumberValueConditionInput | null,
};

export type CreateNumberValueMutation = {
  createNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNumberValueMutationVariables = {
  input: UpdateNumberValueInput,
  condition?: ModelNumberValueConditionInput | null,
};

export type UpdateNumberValueMutation = {
  updateNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNumberValueMutationVariables = {
  input: DeleteNumberValueInput,
  condition?: ModelNumberValueConditionInput | null,
};

export type DeleteNumberValueMutation = {
  deleteNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNumberValueQueryVariables = {
  id: string,
};

export type GetNumberValueQuery = {
  getNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNumberValuesQueryVariables = {
  filter?: ModelNumberValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNumberValuesQuery = {
  listNumberValues?:  {
    __typename: "ModelNumberValueConnection",
    items:  Array< {
      __typename: "NumberValue",
      id: string,
      value: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNumberValueSubscriptionVariables = {
  filter?: ModelSubscriptionNumberValueFilterInput | null,
};

export type OnCreateNumberValueSubscription = {
  onCreateNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNumberValueSubscriptionVariables = {
  filter?: ModelSubscriptionNumberValueFilterInput | null,
};

export type OnUpdateNumberValueSubscription = {
  onUpdateNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNumberValueSubscriptionVariables = {
  filter?: ModelSubscriptionNumberValueFilterInput | null,
};

export type OnDeleteNumberValueSubscription = {
  onDeleteNumberValue?:  {
    __typename: "NumberValue",
    id: string,
    value: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
