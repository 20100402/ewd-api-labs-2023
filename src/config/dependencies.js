import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import AccountSchema from '../accounts/validators';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from '../accounts/security/JWTToken';

const buildDependencies = () => {
    const dependencies = {
        accountSchema: AccountSchema,
        authenticator: new Authenticator()
    };

    dependencies.accountSchema = AccountSchema;

    dependencies.tokenManager = new TokenManager();

    if (process.env.DATABASE_DIALECT === "in-memory") {
        dependencies.accountsRepository = new AccountsRepositoryInMemory();
    } else if (process.env.DATABASE_DIALECT === "mongo") {
        dependencies.accountsRepository = new AccountsRepositoryMongo();
    } else if (process.env.DATABASE_DIALECT === "mysql") {
        throw new Error('Add MySQL support');
    } else {
        throw new Error('Add DB Support to project');
    }
    return dependencies;
};

export default buildDependencies;
