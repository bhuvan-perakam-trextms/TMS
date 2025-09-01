using CashModuleApi.Models;

namespace CashModuleApi.Repositories.Users
{
    public interface IUserRepository
    {
        Task<User?> GetByUsernameAsync(string username);
        Task<User?> GetByIdAsync(int id);
        Task UpdateAsync(User user);
        Task<List<Module>> GetUserModulesAsync(int userId);
        Task<List<Feature>> GetUserFeaturesAsync(int userId);
    }
}