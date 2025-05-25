import { defineStore } from 'pinia';
import { isSupervisor } from '@/helpers/typeCheck';
import { Institute } from '@/models/Institute';
import { state } from './state';

export const useAuthStore = defineStore('auth', {
  state,
  getters: {
    isHeadOfProjectEducationCenter(): boolean {
      return Boolean(this.profileData?.is_head_project_education_center);
    },
    isInstDirector(): boolean {
      return Boolean(this.profileData?.is_institute_director);
    },
    isTeacher(): boolean {
      return Boolean(this.profileData?.is_teacher);
    },
    isStudent(): boolean {
      return Boolean(this.profileData?.is_student);
    },
    instituteProjectsQuota(): Institute | null {
      if (this.profileData && isSupervisor(this.profileData))
        return this.profileData.department.institute;
      return null;
    },
  },
});
