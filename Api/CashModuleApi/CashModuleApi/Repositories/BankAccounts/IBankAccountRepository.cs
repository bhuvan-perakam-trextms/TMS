using CashModuleApi.Models;
namespace CashModuleApi.Repositories.BankAccounts
{
    public interface IBankAccountRepository
    {
        public void CreateOrUpdateBankAccount(BankAccount account);
        IEnumerable<BankAccount> GetAllBankAccounts();
        public BankAccount GetBankAccountById(int id);
    }
}
