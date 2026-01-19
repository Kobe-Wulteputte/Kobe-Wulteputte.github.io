import type User from '@/models/User'
import type { InjectionKey } from 'vue'

export const userKey = Symbol() as InjectionKey<User>
