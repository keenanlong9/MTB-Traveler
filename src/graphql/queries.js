/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      owner
      name
      Location
      Language
      Currency
      profileImage
      Destinations {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDestination = /* GraphQL */ `
  query GetDestination($id: ID!) {
    getDestination(id: $id) {
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
export const listDestinations = /* GraphQL */ `
  query ListDestinations(
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDestinations = /* GraphQL */ `
  query SyncDestinations(
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userProfilesByOwner = /* GraphQL */ `
  query UserProfilesByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const destinationsByUserProfileIDAndLocation = /* GraphQL */ `
  query DestinationsByUserProfileIDAndLocation(
    $userProfileID: ID!
    $Location: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    destinationsByUserProfileIDAndLocation(
      userProfileID: $userProfileID
      Location: $Location
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
