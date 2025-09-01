namespace CashModuleApi.Models
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
        public bool IsActive { get; set; }
        public string ImageUrl { get; set; }

        public BankAccount(int id, string accountName, string iban, string accountNumber, string swiftBic, string currency, string market, string entity, string alias, string metadata, string trexid, bool isActive, string imageUrl)
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
            IsActive = isActive;
            ImageUrl = imageUrl;
        }

        public BankAccount() { }
    }
}
