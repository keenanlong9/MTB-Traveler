/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
      id
      owner
      name
      Location
      Language
      Currency
      profileImage
      Destinations
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
      id
      owner
      name
      Location
      Language
      Currency
      profileImage
      Destinations
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
      id
      owner
      name
      Location
      Language
      Currency
      profileImage
      Destinations
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateDestination = /* GraphQL */ `
  subscription OnCreateDestination(
    $filter: ModelSubscriptionDestinationFilterInput
    $owner: String
  ) {
    onCreateDestination(filter: $filter, owner: $owner) {
      id
      Location
      Language
      Currency
      Image
      Trails
      userProfileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateDestination = /* GraphQL */ `
  subscription OnUpdateDestination(
    $filter: ModelSubscriptionDestinationFilterInput
    $owner: String
  ) {
    onUpdateDestination(filter: $filter, owner: $owner) {
      id
      Location
      Language
      Currency
      Image
      Trails
      userProfileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteDestination = /* GraphQL */ `
  subscription OnDeleteDestination(
    $filter: ModelSubscriptionDestinationFilterInput
    $owner: String
  ) {
    onDeleteDestination(filter: $filter, owner: $owner) {
      id
      Location
      Language
      Currency
      Image
      Trails
      userProfileID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
