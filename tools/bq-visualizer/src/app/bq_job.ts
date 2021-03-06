/** the detail of a BQ Job as retrieved from the JOBS REST API */
import {Job} from './rest_interfaces';

export class BqJob {
  kind: string;
  id: string;
  state: string;
  statementType: string;
  projectId: string;
  startTime: Date;
  endTime: Date;
  jobId: string;
  location: string;
  shortenedJobId: string;

  constructor(data: Job) {
    this.kind = data.kind;
    this.id = data.id;
    if (data.errorResult) {
      this.state = 'ERROR';
    } else {
      this.state = data.state;
    }
    this.startTime = this.dateFromTimeString(data.statistics.startTime);
    this.endTime = this.dateFromTimeString(data.statistics.endTime);
    this.projectId = data.jobReference.projectId;
    this.jobId = data.jobReference.jobId;
    this.location = data.jobReference.location;
    if (data.configuration && data.configuration.query) {
      this.shortenedJobId = data.configuration.query.query;
    } else {
      this.shortenedJobId = data.jobReference.jobId;
    }
  }

  private dateFromTimeString(timeString: String): Date {
    const aNumber = Number(timeString);
    if (isNaN(aNumber)) {
      console.log('can\'t parse timeString :' + timeString);
      return undefined;
    }
    return new Date(aNumber);
  }
}
