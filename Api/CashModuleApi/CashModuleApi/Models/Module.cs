using System.ComponentModel.DataAnnotations;

namespace CashModuleApi.Models;

public class Module
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public bool IsActive { get; set; }
    public List<UserModule> UserModules { get; set; }
    public List<Feature> Features { get; set; }
}