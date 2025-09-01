namespace CashModuleApi.Domain
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<string> Modules { get; set; }
        public List<string> Features { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}