import { dbConfig} from "."

const config = {
    developement:{
    username:dbConfig.DB_USER,
    password:dbConfig.DB_PASSWORD,
    database:dbConfig.DB_NAME,
    host:dbConfig.DB_HOST,
    dialect:'mysql' as const
  }
}

export default config