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
export const getUserProfileDestination = /* GraphQL */ `
  query GetUserProfileDestination($id: ID!) {
    getUserProfileDestination(id: $id) {
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
export const listUserProfileDestinations = /* GraphQL */ `
  query ListUserProfileDestinations(
    $filter: ModelUserProfileDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfileDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileID
        destinationID
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
export const syncUserProfileDestinations = /* GraphQL */ `
  query SyncUserProfileDestinations(
    $filter: ModelUserProfileDestinationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfileDestinations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileID
        destinationID
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
export const userProfileDestinationsByUserProfileIDAndDestinationID = /* GraphQL */ `
  query UserProfileDestinationsByUserProfileIDAndDestinationID(
    $userProfileID: ID!
    $destinationID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfileDestinationsByUserProfileIDAndDestinationID(
      userProfileID: $userProfileID
      destinationID: $destinationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileID
        destinationID
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
export const userProfileDestinationsByDestinationIDAndUserProfileID = /* GraphQL */ `
  query UserProfileDestinationsByDestinationIDAndUserProfileID(
    $destinationID: ID!
    $userProfileID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileDestinationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfileDestinationsByDestinationIDAndUserProfileID(
      destinationID: $destinationID
      userProfileID: $userProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileID
        destinationID
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
export const getDestination = /* GraphQL */ `
  query GetDestination($id: ID!) {
    getDestination(id: $id) {
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
