using CashModuleApi.Domain;
using CashModuleApi.Repositories.BankAccounts;
using CashModuleApi.Services.BankAccounts;

namespace CashModuleApi.Services
{
    public class BankAccountServices : IBankAccountService
    {
        private readonly IBankAccountRepository _repository;

        public BankAccountServices(IBankAccountRepository repository)
        {
            _repository = repository;
        }

        public BankAccount GetBankAccountById(int id)
        {
            return _repository.GetBankAccountById(id);
        }

        public void CreateOrUpdateBankAccount(BankAccount account)
        {
            _repository.CreateOrUpdateBankAccount(account);
        }

        public IEnumerable<BankAccount> GetAllBankAccounts()
        {
            return _repository.GetAllBankAccounts();
        }
    }
}