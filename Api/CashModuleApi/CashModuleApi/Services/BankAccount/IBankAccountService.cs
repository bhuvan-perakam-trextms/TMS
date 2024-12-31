using CashModuleApi.Domain;
namespace CashModuleApi.Services.BankAccounts
{
    public interface IBankAccountService
    {
        public BankAccount GetBankAccountById(int id);
        public void CreateOrUpdateBankAccount(BankAccount account);
        public IEnumerable<BankAccount> GetAllBankAccounts();
    }
}