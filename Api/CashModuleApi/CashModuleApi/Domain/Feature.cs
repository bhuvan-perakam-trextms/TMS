using System.ComponentModel.DataAnnotations;

namespace CashModuleApi.Domain;

public class Feature
{
    public int Id { get; set; }

    [Required]
    [StringLength(50)]
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    public int ModuleId { get; set; }
    public bool IsActive { get; set; } = true;
}