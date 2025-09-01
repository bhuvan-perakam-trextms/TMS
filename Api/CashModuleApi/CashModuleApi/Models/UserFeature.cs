namespace CashModuleApi.Models;

public class UserFeature
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public User? User { get; set; }
    public int FeatureId { get; set; }
    public Feature? Feature { get; set; }
    public DateTime AssignedAt { get; set; } = DateTime.UtcNow;
}