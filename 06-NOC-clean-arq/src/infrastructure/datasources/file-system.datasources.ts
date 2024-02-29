import { LogDatasources } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


//TODO: A esta clase le vamos a agregar las reglas que ya defini
export class FileSystemDatasource implements LogDatasources{
  
  private logPath = 
  
  
  saveLog(log: LogEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }

}
  



