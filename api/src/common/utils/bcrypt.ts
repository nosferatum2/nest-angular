import * as bcrypt from 'bcrypt';

const PASSWORD_SALT = 10;

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, PASSWORD_SALT);
}

export async function validatePassword(password: string, storedPasswordHash: string): Promise<boolean> {
  return await bcrypt.compare(password, storedPasswordHash);
}
