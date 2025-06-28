// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, Destination } = initSchema(schema);

export {
  UserProfile,
  Destination
};