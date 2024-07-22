using CashModuleApi.Domain;
using Npgsql;
namespace CashModuleApi.Repositories.BankAccounts
{
    public class BankAccountRepository : IBankAccountRepository
    {
        private readonly string _connectionString;

        public BankAccountRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void CreateOrUpdateBankAccount(BankAccount account)
        {
            using (var conn = new NpgsqlConnection(_connectionString))
            {
                conn.Open();
                string storedProcedure = "UpsertBankAccount";
                using (var cmd = new NpgsqlCommand(storedProcedure, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("Id", account.Id);
                    cmd.Parameters.AddWithValue("AccountName", account.AccountName);
                    cmd.Parameters.AddWithValue("Iban", account.IBAN);
                    cmd.Parameters.AddWithValue("AccountNumber", account.AccountNumber);
                    cmd.Parameters.AddWithValue("SwiftBic", account.SwiftBIC);
                    cmd.Parameters.AddWithValue("Currency", account.Currency);
                    cmd.Parameters.AddWithValue("Market", account.Market);
                    cmd.Parameters.AddWithValue("Entity", account.Entity);
                    cmd.Parameters.AddWithValue("Alias", account.Alias);
                    cmd.Parameters.AddWithValue("Metadata", account.Metadata);
                    cmd.Parameters.AddWithValue("Trexid", account.Trexid);
                    cmd.Parameters.AddWithValue("IsActive", account.IsActive);
                    cmd.Parameters.AddWithValue("ImageUrl", account.ImageUrl);  

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public IEnumerable<BankAccount> GetAllBankAccounts()
        {
            var bankAccounts = new List<BankAccount>();
            using (var conn = new NpgsqlConnection(_connectionString))
            {
                conn.Open();
                string selectQuery = "SELECT * FROM BankAccounts;";
                using (var cmd = new NpgsqlCommand(selectQuery, conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var account = new BankAccount(
                            id: reader.GetInt32(0),
                            accountName: reader.GetString(1),
                            iban: reader.GetString(2),
                            accountNumber: reader.GetString(3),
                            swiftBic: reader.GetString(4),
                            currency: reader.GetString(5),
                            market: reader.GetString(6),
                            entity: reader.GetString(7),
                            alias: reader.GetString(8),
                            metadata: reader.GetString(9),
                            trexid: reader.GetString(10),
                            isActive: reader.GetBoolean(11),
                            imageUrl: reader.GetString(12)  

                        );
                        bankAccounts.Add(account);
                    }
                }
            }
            return bankAccounts;
        }

        public BankAccount GetBankAccountById(int id)
        {
            var query = "SELECT Id, AccountName, IBAN, AccountNumber, SwiftBIC, Currency, Market, Entity, Alias, Metadata, Trexid, IsActive FROM BankAccounts WHERE Id = @Id";

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                connection.Open();
                using (var command = new NpgsqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Id", id);

                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new BankAccount(
                                id: reader.GetInt32(0),
                                accountName: reader.GetString(1),
                                iban: reader.GetString(2),
                                accountNumber: reader.GetString(3),
                                swiftBic: reader.GetString(4),
                                currency: reader.GetString(5),
                                market: reader.GetString(6),
                                entity: reader.GetString(7),
                                alias: reader.GetString(8),
                                metadata: reader.GetString(9),
                                trexid: reader.GetString(10),
                                isActive: reader.GetBoolean(11),
                                imageUrl: reader.GetString(12) 

                            );
                        }
                    }
                }
            }
            return null;
        }
    }
}
