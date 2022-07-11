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


//? test_db
import {createConnection} from "typeorm";


async () => await createConnection({
    type: "postgres",
    port: 5433,
    host: process.env.NODE_ENV === "test" ? "localhost" : "localhost",
    username: "postgres",
    password: "root",
    database: process.env.NODE_ENV === "test" ? "test_db" : "rentx",
    synchronize: true,
});

export { createConnection }