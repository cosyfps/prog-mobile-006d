import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class servicebd {
  public database!: SQLiteObject;

  // Tabla 'users': Almacena información sobre los usuarios, como su ID, nombre, email, contraseña, rol y estado.
  private tableUsers: string = `
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


  // Tabla 'couples': Registra las relaciones entre usuarios formando una pareja.
  private tableCouples: string = `
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

  // Tabla 'activities': Define las actividades disponibles para las parejas.
  private tableActivities: string = `
    CREATE TABLE IF NOT EXISTS activities(
      activity_id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(100),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Tabla 'couple_activities': Relaciona actividades con parejas específicas y su estado.
  private tableCoupleActivities: string = `
    CREATE TABLE IF NOT EXISTS couple_activities(
      couple_activity_id INTEGER PRIMARY KEY AUTOINCREMENT,
      couple_id INTEGER,
      activity_id INTEGER,
      assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      due_date DATE,
      status VARCHAR(20),
      FOREIGN KEY (couple_id) REFERENCES couples(couple_id),
      FOREIGN KEY (activity_id) REFERENCES activities(activity_id)
    );
  `;

  // Tabla 'activity_logs': Registra todas las acciones realizadas por las parejas en relación con las actividades.
  private tableActivityLogs: string = `
    CREATE TABLE IF NOT EXISTS activity_logs(
      log_id INTEGER PRIMARY KEY AUTOINCREMENT,
      couple_activity_id INTEGER,
      user_id INTEGER,
      action VARCHAR(50),
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (couple_activity_id) REFERENCES couple_activities(couple_activity_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `;

  // Tabla 'plans': Define los planes de suscripción disponibles en la aplicación (ejemplo: plan premium).
  private tablePlans: string = `
    CREATE TABLE IF NOT EXISTS plans(
      plan_id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50),
      price DECIMAL(10, 2),
      features TEXT,
      access_level INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Tabla 'subscriptions': Registra las suscripciones de los usuarios a los diferentes planes.
  private tableSubscriptions: string = `
    CREATE TABLE IF NOT EXISTS subscriptions(
      subscription_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      plan_id INTEGER,
      start_date DATE,
      end_date DATE,
      auto_renew BOOLEAN,
      is_active BOOLEAN,
      cancelled_at TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(user_id),
      FOREIGN KEY (plan_id) REFERENCES plans(plan_id)
    );
  `;

  // Tabla 'wishlist': Permite a los usuarios añadir y gestionar una lista de deseos personalizada.
  private tableWishlist: string = `
    CREATE TABLE IF NOT EXISTS wishlist(
      item_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      item_name VARCHAR(100),
      added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `;

  // Tabla 'connection_requests': Gestiona las solicitudes de conexión entre usuarios.
  private tableConnectionRequests: string = `
    CREATE TABLE IF NOT EXISTS connection_requests(
      request_id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id INTEGER,
      receiver_id INTEGER,
      status VARCHAR(20) DEFAULT 'pending',
      request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (sender_id) REFERENCES users(user_id),
      FOREIGN KEY (receiver_id) REFERENCES users(user_id)
    );
  `;

  // Tabla 'notifications': Almacena notificaciones que se envían a los usuarios.
  private tableNotifications: string = `
    CREATE TABLE IF NOT EXISTS notifications(
      notification_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      message TEXT,
      status VARCHAR(20) DEFAULT 'unread',
      sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `;

  public dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private alertController: AlertController
  ) {
    // Espera a que la plataforma esté lista antes de inicializar la base de datos.
    this.platform.ready().then(() => {
      this.initializeDatabase();
    });
  }

  // Inicializa la base de datos y crea las tablas necesarias para la aplicación.
  async initializeDatabase() {
    try {
      const db = await this.sqlite.create({
        name: 'evergreen_db.db',
        location: 'default'
      });

      this.database = db;
      await this.createTables();
      this.dbReady.next(true); // Indica que la base de datos está lista para usar.
    } catch (error) {
      this.showAlert('Error', 'Error al abrir la base de datos: ' + error);
    }
  }

  // Método para crear todas las tablas en la base de datos
  private async createTables() {
    try {
      await this.database.executeSql(this.tableUsers, []);
      await this.database.executeSql(this.tableCouples, []);
      await this.database.executeSql(this.tableActivities, []);
      await this.database.executeSql(this.tableCoupleActivities, []);
      await this.database.executeSql(this.tableActivityLogs, []);
      await this.database.executeSql(this.tablePlans, []);
      await this.database.executeSql(this.tableSubscriptions, []);
      await this.database.executeSql(this.tableWishlist, []);
      await this.database.executeSql(this.tableConnectionRequests, []);
      await this.database.executeSql(this.tableNotifications, []);
    } catch (error) {
      this.showAlert('Error', 'Error al crear tablas: ' + error);
    }
  }

  // Registra un log para una actividad realizada por una pareja.
  logActivity(coupleActivityId: number, userId: number, action: string) {
    return this.database.executeSql('INSERT INTO activity_logs (couple_activity_id, user_id, action) VALUES (?, ?, ?)', [coupleActivityId, userId, action])
      .then(res => {
        console.log("Activity logged successfully."); // Mensaje de éxito al registrar el log.
      })
      .catch(e => {
        this.showAlert('Error', 'Failed to log activity: ' + JSON.stringify(e));
      });
  }

  // Recupera todos los logs de una actividad específica de una pareja.
  getActivityLogs(coupleActivityId: number) {
    return this.database.executeSql('SELECT * FROM activity_logs WHERE couple_activity_id = ?', [coupleActivityId])
      .then(res => {
        let logs = [];
        for (let i = 0; i < res.rows.length; i++) {
          logs.push(res.rows.item(i)); // Agrega cada log a la lista.
        }
        return logs; // Devuelve la lista completa de logs.
      })
      .catch(e => {
        this.showAlert('Error', 'Failed to retrieve activity logs: ' + JSON.stringify(e));
      });
  }

  // Recupera el historial completo de actividades para una pareja.
  getFullActivityHistory(coupleId: number) {
    return this.database.executeSql(`
      SELECT activities.name AS activity_name, 
             couple_activities.assigned_at AS start_date, 
             couple_activities.due_date AS due_date,
             activity_logs.action AS last_action, 
             activity_logs.timestamp AS action_date 
      FROM activity_logs 
      INNER JOIN couple_activities ON activity_logs.couple_activity_id = couple_activities.couple_activity_id
      INNER JOIN activities ON couple_activities.activity_id = activities.activity_id
      WHERE couple_activities.couple_id = ?
      ORDER BY activity_logs.timestamp DESC
    `, [coupleId])
    .then(res => {
      let activityHistory = [];
      for (let i = 0; i < res.rows.length; i++) {
        activityHistory.push(res.rows.item(i)); // Guarda cada entrada del historial.
      }
      return activityHistory; // Devuelve el historial completo.
    })
    .catch(e => {
      this.showAlert('Error', 'Failed to retrieve activity history: ' + JSON.stringify(e));
    });
  }

  // Muestra una alerta en la interfaz del usuario para mensajes de error o confirmación.
  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
