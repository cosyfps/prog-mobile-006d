
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private databaseObj: SQLiteObject;

  private tableUsers = `
    CREATE TABLE IF NOT EXISTS users(
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(50),
      email VARCHAR(100) UNIQUE,
      password_hash VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      role VARCHAR(20),
      status VARCHAR(20) DEFAULT 'active'
    );
  `;

  private tableCouples = `
    CREATE TABLE IF NOT EXISTS couples(
      couple_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user1_id INTEGER,
      user2_id INTEGER,
      couple_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      anniversary_date DATE,
      couple_nickname VARCHAR(50),
      FOREIGN KEY (user1_id) REFERENCES users(user_id),
      FOREIGN KEY (user2_id) REFERENCES users(user_id)
    );
  `;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDatabase();
    });
  }

  async createDatabase() {
    try {
      this.databaseObj = await this.sqlite.create({
        name: 'evergreen_db.db',
        location: 'default'
      });
      await this.createTables();
      console.log('Base de datos y tablas creadas con éxito');
    } catch (error) {
      console.error('Error al crear la base de datos:', error);
    }
  }

  private async createTables() {
    try {
      await this.databaseObj.executeSql(this.tableUsers, []);
      await this.databaseObj.executeSql(this.tableCouples, []);
    } catch (error) {
      console.error('Error al crear tablas:', error);
    }
  }
}
