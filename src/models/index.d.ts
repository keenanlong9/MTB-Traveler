import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly name?: string | null;
  readonly Location?: string | null;
  readonly Language?: string | null;
  readonly Currency?: string | null;
  readonly profileImage?: string | null;
  readonly Wishlist?: (UserProfileDestination | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly name?: string | null;
  readonly Location?: string | null;
  readonly Language?: string | null;
  readonly Currency?: string | null;
  readonly profileImage?: string | null;
  readonly Wishlist: AsyncCollection<UserProfileDestination>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Destination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Location?: string | null;
  readonly Language?: string | null;
  readonly Currency?: string | null;
  readonly Image?: string | null;
  readonly Trails?: (string | null)[] | null;
  readonly wishlistedBy?: (UserProfileDestination | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Destination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Location?: string | null;
  readonly Language?: string | null;
  readonly Currency?: string | null;
  readonly Image?: string | null;
  readonly Trails?: (string | null)[] | null;
  readonly wishlistedBy: AsyncCollection<UserProfileDestination>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Destination = LazyLoading extends LazyLoadingDisabled ? EagerDestination : LazyDestination

export declare const Destination: (new (init: ModelInit<Destination>) => Destination) & {
  copyOf(source: Destination, mutator: (draft: MutableModel<Destination>) => MutableModel<Destination> | void): Destination;
}

type EagerUserProfileDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfileDestination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly destinationID: string;
  readonly userProfile?: UserProfile | null;
  readonly destination?: Destination | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfileDestination = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfileDestination, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileID: string;
  readonly destinationID: string;
  readonly userProfile: AsyncItem<UserProfile | undefined>;
  readonly destination: AsyncItem<Destination | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfileDestination = LazyLoading extends LazyLoadingDisabled ? EagerUserProfileDestination : LazyUserProfileDestination

export declare const UserProfileDestination: (new (init: ModelInit<UserProfileDestination>) => UserProfileDestination) & {
  copyOf(source: UserProfileDestination, mutator: (draft: MutableModel<UserProfileDestination>) => MutableModel<UserProfileDestination> | void): UserProfileDestination;
}