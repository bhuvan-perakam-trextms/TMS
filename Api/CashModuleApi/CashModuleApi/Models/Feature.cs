using System.ComponentModel.DataAnnotations;

namespace CashModuleApi.Models;

public class Feature
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public int ModuleId { get; set; }
    public bool IsActive { get; set; } = true;
    public Module? Module { get; set; }
    public List<UserFeature> UserFeatures { get; set; } = new();
}