import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
});

const User = models.User || model('Users', UserSchema);

export default User;
