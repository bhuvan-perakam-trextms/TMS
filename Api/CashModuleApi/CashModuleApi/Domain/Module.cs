using System.ComponentModel.DataAnnotations;

namespace CashModuleApi.Domain;

public class Module
{
    public int Id { get; set; }

    [Required]
    [StringLength(50)]
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    public bool IsActive { get; set; }
}