import fs from 'node:fs/promises';
import mysql from 'mysql2/promise';
import { Umzug, JSONStorage, MigrationParams, Resolver } from 'umzug';

const main = async () => {
  const conn = await mysql.createConnection({
    host: '172.17.0.2',
    port: 3306,
    user: 'kazuhira',
    password: 'password',
    database: 'practice',
    multipleStatements: true, // マイグレーションファイル（SQL）に複数のSQLを含める場合
  });

  try {
    const resolver: Resolver<mysql.Connection> = (params: MigrationParams<mysql.Connection>) => ({
      name: params.name,
      up: async () => {
        log(`target migration file => ${params.path}`);

        const sql = (await fs.readFile(params.path!)).toString();
        return await params.context.query(sql);
      },
      down: async () => {
        // downは今回は除外
      },
    });

    const umzug = new Umzug({
      migrations: { glob: 'migrations/**/*.sql', resolve: resolver },
      context: conn,
      storage: new JSONStorage(), // デフォルトではumzug.jsonというファイルに保存
      logger: console,
    });

    // 適用済みのマイグレーションを表示
    const executedMetas = await umzug.executed();
    if (executedMetas.length > 0) {
      log('current executed migrations');
      for (const meta of executedMetas) {
        log(`executed, name = ${meta.name}, path = ${meta.path}`);
      }
    }

    // 未適用のマイグレーションを表示
    const pendingMetas = await umzug.pending();
    if (pendingMetas.length > 0) {
      log('current pending migrations');
      for (const meta of pendingMetas) {
        log(`pending, name = ${meta.name}, path = ${meta.path}`);
      }
    }

    log('start Umzug migration...');
    await umzug.up();
    log('end Umzug migration');
  } finally {
    await conn.end();
  }
};

main().catch((e) => console.error(e));

function log(message: string) {
  console.info(`[${new Date().toISOString()}] ${message}`); 
}















  

  
  
    
  
    
      
      
    
    
  
  
