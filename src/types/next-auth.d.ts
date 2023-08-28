import { User } from '@/model/user';

declare module 'next-auth' {
  //자체 User 모델로 타입 재정의
  interface Session {
    user: User;
  }
}
