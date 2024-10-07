
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private database: SQLiteObject) {}

  addActivity(name: string, description: string) {
    return this.database.executeSql('INSERT INTO activities (name, description) VALUES (?, ?)', [name, description]);
  }

  logActivity(coupleActivityId: number, userId: number, action: string) {
    return this.database.executeSql('INSERT INTO activity_logs (couple_activity_id, user_id, action) VALUES (?, ?, ?)', [coupleActivityId, userId, action]);
  }

  getActivityLogs(coupleActivityId: number) {
    return this.database.executeSql('SELECT * FROM activity_logs WHERE couple_activity_id = ?', [coupleActivityId]);
  }
}
