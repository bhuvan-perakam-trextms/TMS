using CashModuleApi.Domain;

namespace CashModuleApi.Services.AuthService
{
    public interface IAuthService
    {
        Task<LoginResponse> LoginAsync(LoginRequest request);
        string GenerateJwtToken(User user);
    }
}