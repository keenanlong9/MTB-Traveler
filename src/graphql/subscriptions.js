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
      Wishlist {
        nextToken
        startedAt
        __typename
      }
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
      Wishlist {
        nextToken
        startedAt
        __typename
      }
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
      Wishlist {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUserProfileDestination = /* GraphQL */ `
  subscription OnCreateUserProfileDestination(
    $filter: ModelSubscriptionUserProfileDestinationFilterInput
    $owner: String
  ) {
    onCreateUserProfileDestination(filter: $filter, owner: $owner) {
      id
      userProfileID
      destinationID
      userProfile {
        id
        owner
        name
        Location
        Language
        Currency
        profileImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      destination {
        id
        Location
        Language
        Currency
        Image
        Trails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const onUpdateUserProfileDestination = /* GraphQL */ `
  subscription OnUpdateUserProfileDestination(
    $filter: ModelSubscriptionUserProfileDestinationFilterInput
    $owner: String
  ) {
    onUpdateUserProfileDestination(filter: $filter, owner: $owner) {
      id
      userProfileID
      destinationID
      userProfile {
        id
        owner
        name
        Location
        Language
        Currency
        profileImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      destination {
        id
        Location
        Language
        Currency
        Image
        Trails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
export const onDeleteUserProfileDestination = /* GraphQL */ `
  subscription OnDeleteUserProfileDestination(
    $filter: ModelSubscriptionUserProfileDestinationFilterInput
    $owner: String
  ) {
    onDeleteUserProfileDestination(filter: $filter, owner: $owner) {
      id
      userProfileID
      destinationID
      userProfile {
        id
        owner
        name
        Location
        Language
        Currency
        profileImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      destination {
        id
        Location
        Language
        Currency
        Image
        Trails
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
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
      wishlistedBy {
        nextToken
        startedAt
        __typename
      }
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
      wishlistedBy {
        nextToken
        startedAt
        __typename
      }
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
      wishlistedBy {
        nextToken
        startedAt
        __typename
      }
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
