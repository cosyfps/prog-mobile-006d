import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {
  public database!: SQLiteObject;

  // Tabla 'users': Almacena información sobre los usuarios.
  private tableUsers: string = `
    CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;

  // Tabla 'tasks': Permite a los usuarios añadir y gestionar una lista de tareas personalizada.
  private tableTasks: string = `
    CREATE TABLE IF NOT EXISTS tasks(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER REFERENCES users(id),
      title VARCHAR(100) NOT NULL,
      description TEXT,
      status INTEGER DEFAULT 0,
      due_date DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category VARCHAR(50)
    );
  `;

  // Tabla 'categories': Permite a los usuarios crear y gestionar categorías para sus tareas.
  private tableCategories: string = `
    CREATE TABLE IF NOT EXISTS categories(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(50) NOT NULL,
      user_id INTEGER REFERENCES users(id)
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
        name: 'beloved.db',
        location: 'default'
      });

      this.database = db;
      await this.createTables();
      this.dbReady.next(true); // Indica que la base de datos está lista para usar.
    } catch (error) {
      this.showAlert('Error', 'Error opening the database: ' + error);
    }
  }

  // Método para crear todas las tablas en la base de datos
  private async createTables() {
    try {
      await this.database.executeSql(this.tableUsers, []);
      await this.database.executeSql(this.tableTasks, []);
      await this.database.executeSql(this.tableCategories, []);
    } catch (error) {
      this.showAlert('Error', 'Error creating tables: ' + error);
    }
  }

  // CRUD functions for users table
  addUser(username: string, email: string, password: string) {
    return this.database.executeSql('INSERT INTO users(id, username, email, password) VALUES (NULL, ?, ?, ?)', [username, email, password]).then(res => {
      this.showAlert('Insert', 'User Registered');
    }).catch(e => {
      this.showAlert('Insert', 'Error: ' + JSON.stringify(e));
    });
  }

  updateUser(userId: string, username: string, email: string, password: string) {
    return this.database.executeSql('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, userId]).then(res => {
      this.showAlert('Update', 'User Updated');
    }).catch(e => {
      this.showAlert('Update', 'Error: ' + JSON.stringify(e));
    });
  }

  deleteUser(userId: string) {
    return this.database.executeSql('DELETE FROM users WHERE id = ?', [userId]).then(res => {
      this.showAlert('Delete', 'User Deleted');
    }).catch(e => {
      this.showAlert('Delete', 'Error: ' + JSON.stringify(e));
    });
  }

  getUsers(): Promise<any[]> {
    return this.database.executeSql('SELECT * FROM users', []).then(res => {
      let items: any[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push(res.rows.item(i));
        }
      }
      return items;
    }).catch(e => {
      this.showAlert('Error', 'Error retrieving users: ' + JSON.stringify(e));
      return [];
    });
  }

  // CRUD functions for tasks table
  addTask(userId: string, title: string, description: string, category: string) {
    return this.database.executeSql('INSERT INTO tasks(id, user_id, title, description, category) VALUES (NULL, ?, ?, ?, ?)', [userId, title, description, category]).then(res => {
      this.showAlert('Insert', 'Task added to the to-do list');
    }).catch(e => {
      this.showAlert('Insert', 'Error: ' + JSON.stringify(e));
    });
  }

  updateTask(taskId: string, title: string, description: string, status: number, dueDate: string, category: string) {
    return this.database.executeSql('UPDATE tasks SET title = ?, description = ?, status = ?, due_date = ?, updated_at = CURRENT_TIMESTAMP, category = ? WHERE id = ?', [title, description, status, dueDate, category, taskId]).then(res => {
      this.showAlert('Update', 'Task updated');
    }).catch(e => {
      this.showAlert('Update', 'Error: ' + JSON.stringify(e));
    });
  }

  deleteTask(taskId: string) {
    return this.database.executeSql('DELETE FROM tasks WHERE id = ?', [taskId]).then(res => {
      this.showAlert('Delete', 'Task removed from the to-do list');
    }).catch(e => {
      this.showAlert('Delete', 'Error: ' + JSON.stringify(e));
    });
  }

  getTasks(userId: string): Promise<any[]> {
    return this.database.executeSql('SELECT * FROM tasks WHERE user_id = ?', [userId]).then(res => {
      let items: any[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push(res.rows.item(i));
        }
      }
      return items;
    }).catch(e => {
      this.showAlert('Error', 'Error retrieving the to-do list: ' + JSON.stringify(e));
      return [];
    });
  }

  // CRUD functions for categories table
  addCategory(name: string, userId: string) {
    return this.database.executeSql('INSERT INTO categories(id, name, user_id) VALUES (NULL, ?, ?)', [name, userId]).then(res => {
      this.showAlert('Insert', 'Category added');
    }).catch(e => {
      this.showAlert('Insert', 'Error: ' + JSON.stringify(e));
    });
  }

  updateCategory(categoryId: string, name: string) {
    return this.database.executeSql('UPDATE categories SET name = ? WHERE id = ?', [name, categoryId]).then(res => {
      this.showAlert('Update', 'Category updated');
    }).catch(e => {
      this.showAlert('Update', 'Error: ' + JSON.stringify(e));
    });
  }

  deleteCategory(categoryId: string) {
    return this.database.executeSql('DELETE FROM categories WHERE id = ?', [categoryId]).then(res => {
      this.showAlert('Delete', 'Category deleted');
    }).catch(e => {
      this.showAlert('Delete', 'Error: ' + JSON.stringify(e));
    });
  }

  getCategories(userId: string): Promise<any[]> {
    return this.database.executeSql('SELECT * FROM categories WHERE user_id = ?', [userId]).then(res => {
      let items: any[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push(res.rows.item(i));
        }
      }
      return items;
    }).catch(e => {
      this.showAlert('Error', 'Error retrieving categories: ' + JSON.stringify(e));
      return [];
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