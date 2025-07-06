import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly Destinations?: (Destination | null)[] | null;
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
  readonly Destinations: AsyncCollection<Destination>;
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
  readonly userProfileID?: string | null;
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
  readonly userProfileID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Destination = LazyLoading extends LazyLoadingDisabled ? EagerDestination : LazyDestination

export declare const Destination: (new (init: ModelInit<Destination>) => Destination) & {
  copyOf(source: Destination, mutator: (draft: MutableModel<Destination>) => MutableModel<Destination> | void): Destination;
}