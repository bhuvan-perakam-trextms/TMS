namespace CashModuleApi.Models;

public class UserModule
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }
    public int ModuleId { get; set; }
    public Module? Module { get; set; }
    public DateTime AssignedAt { get; set; } = DateTime.UtcNow;
}