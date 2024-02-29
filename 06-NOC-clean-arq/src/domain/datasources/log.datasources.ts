import { LogEntity, LogSeverityLevel } from '../entities/log.entity';


export abstract class LogDatasources {

  abstract saveLog(log:LogEntity):Promise<void>;
  abstract getLog(severityLevel:LogSeverityLevel):Promise<LogEntity[]>;
  
};


