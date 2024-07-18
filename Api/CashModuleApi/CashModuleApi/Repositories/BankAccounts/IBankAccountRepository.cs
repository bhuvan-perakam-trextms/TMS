using CashModuleApi.Domain;
namespace CashModuleApi.Repositories.BankAccounts
{
    public interface IBankAccountRepository
    {
        public void CreateOrUpdateBankAccount(BankAccount account);
        public List<BankAccount> GetAllBankAccounts();
        public BankAccount GetBankAccountById(int id);
    }
}
