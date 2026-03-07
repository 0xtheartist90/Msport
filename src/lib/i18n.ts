import 'server-only';

import { cookies } from 'next/headers';
import { LANGUAGE_COOKIE, resolveLanguage } from '@/lib/language';

export async function getServerLanguage() {
  const cookieStore = await cookies();

  return resolveLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
}
