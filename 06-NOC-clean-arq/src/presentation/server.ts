import { CheckServices } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-services";


export class Server {



  public static start() {

    CronService.createJob(
      '*/5 * * * * *',
      () => {
        const url = 'https://google.com';
        new CheckServices(
          () => console.log(`${url} is ok`),
          (error) => console.log(error),
        ).execute(url) //Hacemos fetch del endpoint
      }
    );

  };

};