namespace CashModuleApi.Domain
{
    public record BankAccount
    {
        public int Id { get; set; }
        public string AccountName { get; set; }
        public string IBAN { get; set; }
        public string AccountNumber { get; set; }
        public string SwiftBIC { get; set; }
        public string Currency { get; set; }
        public string Market { get; set; }
        public string Entity { get; set; }
        public string Alias { get; set; }
        public string Metadata { get; set; }
        public string Trexid { get; set; }

        public BankAccount(int id, string accountName, string iban, string accountNumber, string swiftBic, string currency, string market, string entity, string alias, string metadata, string trexid)
        {
            Id = id;
            AccountName = accountName;
            IBAN = iban;
            AccountNumber = accountNumber;
            SwiftBIC = swiftBic;
            Currency = currency;
            Market = market;
            Entity = entity;
            Alias = alias;
            Metadata = metadata;
            Trexid = trexid;
        }

        public BankAccount() { }
    }
}
