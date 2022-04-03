import ky from 'ky';
import { Candidate } from '@/models/Candidate';
import { AuthToken } from '@/models/CampusAuth';
import ICampusAuthApi from './ICampusAuthApi';
import { Participation } from '@/models/Participation';
import campusAuthApiMock from './CampusAuthApiMock';

export class CampusAuthApi extends ICampusAuthApi {
  private ky = ky.create({
    prefixUrl: import.meta.env.VITE_CAMPUS_AUTH_API_URL,
    retry: { limit: 5 },
  });

  async auth(): Promise<AuthToken> {
    const authToken: AuthToken = await this.ky.get('campus_auth').json();
    this.setToken(authToken.token);
    return authToken;
  }

  async getCandidateInfo(): Promise<Candidate> {
    return this.ky
      .get('api/candidate', { headers: { 'x-api-key': this.getToken() } })
      .json();
  }

  async getCandidateParticipationsList(): Promise<Participation[]> {
    return campusAuthApiMock.getCandidateParticipationsList();
  }
}

export default new CampusAuthApi();
