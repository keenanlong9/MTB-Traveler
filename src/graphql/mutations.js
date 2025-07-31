/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createDestination = /* GraphQL */ `
  mutation CreateDestination(
    $input: CreateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    createDestination(input: $input, condition: $condition) {
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
export const updateDestination = /* GraphQL */ `
  mutation UpdateDestination(
    $input: UpdateDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    updateDestination(input: $input, condition: $condition) {
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
export const deleteDestination = /* GraphQL */ `
  mutation DeleteDestination(
    $input: DeleteDestinationInput!
    $condition: ModelDestinationConditionInput
  ) {
    deleteDestination(input: $input, condition: $condition) {
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
export const createUserProfileDestination = /* GraphQL */ `
  mutation CreateUserProfileDestination(
    $input: CreateUserProfileDestinationInput!
    $condition: ModelUserProfileDestinationConditionInput
  ) {
    createUserProfileDestination(input: $input, condition: $condition) {
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
export const updateUserProfileDestination = /* GraphQL */ `
  mutation UpdateUserProfileDestination(
    $input: UpdateUserProfileDestinationInput!
    $condition: ModelUserProfileDestinationConditionInput
  ) {
    updateUserProfileDestination(input: $input, condition: $condition) {
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
export const deleteUserProfileDestination = /* GraphQL */ `
  mutation DeleteUserProfileDestination(
    $input: DeleteUserProfileDestinationInput!
    $condition: ModelUserProfileDestinationConditionInput
  ) {
    deleteUserProfileDestination(input: $input, condition: $condition) {
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
