import { UserCandidate, UserSupervisor } from '@/models/User';
import { baseKyInstance } from '../baseKy';
import AuthApiType from './AuthApiType';
import {
  askForUserRole,
  getUserRoleFromCookies,
  setUserRoleToCookies,
} from './utils/askForUserRole';
import {
  deleteAuthTokenFromCookies,
  setAuthTokenToCookies,
} from './utils/authToken';

export default class AuthApi implements AuthApiType {
  async auth(): Promise<void> {
    const isMockAuth = import.meta.env.VITE_MOCK_AUTH;
    if (!isMockAuth || isMockAuth === 'false') {
      const data: { url: string } = await baseKyInstance
        .get('campus_auth')
        .json();
      document.location.replace(data.url);
      return;
    }

    if (isMockAuth === 'true') {
      const userRole = askForUserRole();
      if (!userRole) return;
      setUserRoleToCookies(userRole);

      const authToken = window.prompt('Введите токен пользователя');
      if (!authToken) return;
      setAuthTokenToCookies(authToken);
      document.location.reload();
    }
  }

  async logout(): Promise<void> {
    const isMockAuth = import.meta.env.VITE_MOCK_AUTH;
    if (!isMockAuth || isMockAuth === 'false') {
      await baseKyInstance.get('campus_out');
      return;
    }

    if (isMockAuth === 'true') {
      deleteAuthTokenFromCookies();
      setUserRoleToCookies(undefined);
      return;
    }
  }

  async getCandidateInfo(): Promise<UserCandidate> {
    const userInfo: UserCandidate = await baseKyInstance
      .get('api/candidate')
      .json();
    userInfo.is_student = true;
    userInfo.is_teacher = false;
    return userInfo;
  }

  async getSupervisorInfo(): Promise<UserSupervisor> {
    const userInfo: UserSupervisor = await baseKyInstance
      .get('api/supervisor')
      .json();
    userInfo.is_student = false;
    userInfo.is_teacher = true;
    userInfo.is_institute_director = userInfo.canReviewProjects;
    userInfo.is_head_project_education_center = userInfo.id === 27; // || userInfo.id === 2 // Для добавления функциональности Аршинскому
    return userInfo;
  }

  async getUserInfo(): Promise<UserCandidate | UserSupervisor | undefined> {
    const userRole = getUserRoleFromCookies();
    if (userRole === 'is_student') return this.getCandidateInfo();
    if (userRole === 'is_teacher') return this.getSupervisorInfo();
    return undefined;
  }
}
