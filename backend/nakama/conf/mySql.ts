const mysql = require("mysql2");

// const connection = mysql.createConnection(process.env.DATABASE_URL);

const pool = mysql.createPool({
  url: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// console.log("Connected to PlanetScale!");

const executeQuery = (query: string) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err: any, results: any) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(results);
    });
  });
};

const executeQueryWithParams = (query: string, params: any[]) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err: any, results: any) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(results);
    });
  });
};

export { executeQuery, executeQueryWithParams };
