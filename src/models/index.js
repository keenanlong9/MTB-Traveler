// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Destination, UserProfileDestination } = initSchema(schema);

export {
  UserProfile,
  Destination,
  UserProfileDestination
};