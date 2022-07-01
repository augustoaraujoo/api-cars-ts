//resolver o type host = '?'
// seed e migrations --FUNCIONANDO--

// import { Connection, createConnection, getConnectionOptions } from "typeorm";

// export default async (host = "localhost"): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();

//   return createConnection(
//     Object.assign(defaultOptions, {
//       host,
//     })
//   );
// };

import {createConnection} from "typeorm";


async () => await createConnection({
    type: "postgres",
    port: 5433,
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "rentx",
     synchronize: true,
});

export { createConnection }