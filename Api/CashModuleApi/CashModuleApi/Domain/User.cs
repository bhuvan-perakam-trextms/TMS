using System.ComponentModel.DataAnnotations;

namespace CashModuleApi.Domain;

public class User
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(50)]
    public string Username { get; set; }
    
    [Required]
    [EmailAddress]
    [StringLength(100)]
    public string Email { get; set; }
    
    [Required]
    public string PasswordHash { get; set; }
    
    [StringLength(50)]
    public string? FirstName { get; set; }
    
    [StringLength(50)]
    public string? LastName { get; set; }
    
    public bool IsActive { get; set; }
    
    public List<Module> UserModules { get; set; } = new();
    public List<Feature> UserFeatures { get; set; } = new();
} 