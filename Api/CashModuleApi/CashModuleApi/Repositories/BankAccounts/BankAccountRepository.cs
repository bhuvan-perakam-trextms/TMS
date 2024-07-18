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
                string storedProcedure = "upsert_bank_account";
                using (var cmd = new NpgsqlCommand(storedProcedure, conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("p_id", account.Id);
                    cmd.Parameters.AddWithValue("p_account_name", account.AccountName);
                    cmd.Parameters.AddWithValue("p_iban", account.IBAN);
                    cmd.Parameters.AddWithValue("p_account_number", account.AccountNumber);
                    cmd.Parameters.AddWithValue("p_swift_bic", account.SwiftBIC);
                    cmd.Parameters.AddWithValue("p_currency", account.Currency);
                    cmd.Parameters.AddWithValue("p_market", account.Market);
                    cmd.Parameters.AddWithValue("p_entity", account.Entity);
                    cmd.Parameters.AddWithValue("p_alias", account.Alias);
                    cmd.Parameters.AddWithValue("p_metadata", account.Metadata);
                    cmd.Parameters.AddWithValue("p_trexid", account.Trexid);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<BankAccount> GetAllBankAccounts()
        {
            var bankAccounts = new List<BankAccount>();
            using (var conn = new NpgsqlConnection(_connectionString))
            {
                conn.Open();
                string selectQuery = "SELECT * FROM bank_accounts;";
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
                            trexid: reader.GetString(10)
                        );
                        bankAccounts.Add(account);
                    }
                }
            }
            return bankAccounts;
        }

        public BankAccount GetBankAccountById(int id)
        {
            var query = "SELECT Id, AccountName, IBAN, AccountNumber, SwiftBIC, Currency, Market, Entity, Alias, Metadata, Trexid FROM BankAccounts WHERE Id = @Id";

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
                                trexid: reader.GetString(10)
                            );
                        }
                    }
                }
            }
            return null;
        }
    }
}
