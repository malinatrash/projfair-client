import { deepClone } from '@/helpers/object';
import { formatProjectDate } from '@/helpers/project';
import { delayRes } from '@/helpers/promise';
import { isSupervisor } from '@/helpers/typeCheck';
import {
  Participation,
  ParticipationPriority,
  ParticipationState,
  ParticipationWithProject,
} from '@/models/Participation';
import { Project } from '@/models/Project';
import { ProjectStateID } from '@/models/ProjectState';
import { archiveProjectIdList } from '@/models/mock/candidate';
import { participationList } from '@/models/mock/participation';
import { projectListResponse } from '@/models/mock/project';
import { AUTH_REQUIRED } from '@/values/error-messages';
import { authApi } from '../AuthApi';
import { getAuthTokenFromCookies } from '../AuthApi/utils/authToken';
import CandidateApi from './CandidateApi';
import CandidateApiType, {
  CreateProjectParticipationData,
} from './CandidateApiType';
import { filterValidParticipations } from './utils/participations';

export default class CandidateApiMock implements CandidateApiType {
  async getActiveProject(): Promise<Project | undefined> {
    const project = projectListResponse.data.find(
      (project) => project.id === ProjectStateID.ActiveState,
    );
    if (!project) return delayRes(project, 300);

    return delayRes(deepClone(formatProjectDate(project)), 300);
  }

  async getArchiveProjectList(): Promise<Project[]> {
    return delayRes(
      deepClone(
        projectListResponse.data
          .filter((project) => archiveProjectIdList.includes(project.id))
          .map(formatProjectDate),
      ),
      300,
    );
  }

  async getParticipationsTime(): Promise<[string, string]> {
    return Promise.all([
      delayRes(new Date(Date.now() - 10000).toISOString(), 1000),
      delayRes(new Date(Date.now() + 100000000).toISOString(), 1000),
    ]);
  }

  async getParticipationList(): Promise<ParticipationWithProject[]> {
    const authToken = getAuthTokenFromCookies();
    if (!authToken) throw new Error(AUTH_REQUIRED);

    const participationsWithProjects = await this.getParticipationsWithProjects(
      filterValidParticipations(participationList),
    );

    return delayRes(deepClone(participationsWithProjects), 300);
  }

  async deleteParticipation(id: number): Promise<void> {
    const authToken = getAuthTokenFromCookies();
    if (!authToken) throw new Error(AUTH_REQUIRED);

    const idx = participationList.findIndex(
      (participation) => participation.id === id,
    );
    participationList.splice(idx, 1);
    return delayRes(undefined, 300);
  }

  async updateParticipation(
    participationId: number,
    priority: ParticipationPriority,
  ): Promise<void> {
    const authToken = getAuthTokenFromCookies();
    if (!authToken) throw new Error(AUTH_REQUIRED);

    const participation = participationList.find(
      (participation) => participation.id === participationId,
    );
    if (!participation) throw new Error('Заявка не найдена');
    participation.priority = priority;
    return delayRes(undefined, 300);
  }

  async createProjectParticipation({
    priority,
    projectId,
  }: CreateProjectParticipationData): Promise<void> {
    // проверки на стороне клиента
    const authToken = getAuthTokenFromCookies();
    if (!authToken) throw new Error(AUTH_REQUIRED);
    if (priority < 1) throw new Error('Приоритет должен быть > 0');
    if (priority > 3) throw new Error('Приоритет должен быть > 0 < 4');

    // проверки на стороне бекенда
    const project = projectListResponse.data.find(
      (project) => project.id === projectId,
    );
    if (!project) throw new Error('Project not found');
    for (const participation of participationList) {
      if (participation.priority === priority)
        throw new Error('Такой приоритет уже выбран');
    }

    const candidate = await authApi.getUserInfo();
    if (!candidate) return;
    if (isSupervisor(candidate)) return;
    participationList.push({
      id: Math.floor(Math.random() * 100),
      candidate,
      priority,
      project_id: project.id,
      state: { id: ParticipationState.Active, state: 'активный' },
      created_at: new Date(Date.now()).toISOString(),
      updated_at: new Date(Date.now()).toISOString(),
      rating: Math.floor(Math.random() * 5),
      review: 'test message',
    });
    return delayRes(undefined, 300);
  }

  async getParticipationsWithProjects(
    participations: Participation[],
  ): Promise<ParticipationWithProject[]> {
    return new CandidateApi().getParticipationsWithProjects(participations);
  }

  async updateParticipationList(
    participations: Participation[],
  ): Promise<void[]> {
    return Promise.all(
      participations.map((participation) =>
        this.updateParticipation(participation.id, participation.priority),
      ),
    );
  }
}
