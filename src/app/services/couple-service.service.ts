
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CoupleService {
  constructor(private database: SQLiteObject) {}

  createCouple(user1Id: number, user2Id: number) {
    return this.database.executeSql('INSERT INTO couples (user1_id, user2_id) VALUES (?, ?)', [user1Id, user2Id]);
  }

  unlinkCouple(coupleId: number) {
    return this.database.executeSql('DELETE FROM couples WHERE couple_id = ?', [coupleId]);
  }

  getCoupleActivityStatus(coupleId: number) {
    return this.database.executeSql(`
      SELECT activities.name AS activity_name, 
             couple_activities.status AS activity_status, 
             couple_activities.due_date AS due_date
      FROM couple_activities
      INNER JOIN activities ON couple_activities.activity_id = activities.activity_id
      WHERE couple_activities.couple_id = ?
    `, [coupleId]);
  }
}
