using Npgsql;
using Dapper;
using MySql.Data.MySqlClient;
using CashModuleApi.Models;

namespace CashModuleApi.Repositories.Users;

public class UserRepository : IUserRepository
{
    private readonly string? _connectionString;

    public UserRepository(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<User?> GetByUsernameAsync(string username)
    {
        using var connection = new NpgsqlConnection(_connectionString);
        await connection.OpenAsync();

        using var command = new NpgsqlCommand(
            @"SELECT id, username, email, passwordhash, firstname, lastname, isactive, createdat, lastloginat 
              FROM users 
              WHERE username = @username",
            connection);

        command.Parameters.AddWithValue("username", username);

        using var reader = await command.ExecuteReaderAsync();
        if (!await reader.ReadAsync()) return null;

        return new User
        {
            Id = reader.GetInt32(0),
            Username = reader.GetString(1),
            Email = reader.GetString(2),
            PasswordHash = reader.GetString(3),
            FirstName = reader.IsDBNull(4) ? null : reader.GetString(4),
            LastName = reader.IsDBNull(5) ? null : reader.GetString(5),
            IsActive = reader.GetBoolean(6),
            CreatedAt = reader.GetDateTime(7),
            LastLoginAt = reader.IsDBNull(8) ? null : reader.GetDateTime(8)
        };
    }

    public async Task<User?> GetByIdAsync(int id)
    {
        using var connection = new MySqlConnection(_connectionString);
        await connection.OpenAsync();

        using var command = new MySqlCommand(
            @"SELECT id, username, email, passwordhash, firstname, lastname, isactive, createdat, lastloginat 
              FROM users 
              WHERE id = @id",
            connection);

        command.Parameters.AddWithValue("id", id);

        using var reader = await command.ExecuteReaderAsync();
        if (!await reader.ReadAsync()) return null;

        return new User
        {
            Id = reader.GetInt32(0),
            Username = reader.GetString(1),
            Email = reader.GetString(2),
            PasswordHash = reader.GetString(3),
            FirstName = reader.IsDBNull(4) ? null : reader.GetString(4),
            LastName = reader.IsDBNull(5) ? null : reader.GetString(5),
            IsActive = reader.GetBoolean(6),
            CreatedAt = reader.GetDateTime(7),
            LastLoginAt = reader.IsDBNull(8) ? null : reader.GetDateTime(8)
        };
    }

    public async Task UpdateAsync(User user)
    {
        using var connection = new MySqlConnection(_connectionString);
        await connection.OpenAsync();

        using var command = new MySqlCommand(
            @"UPDATE users 
              SET lastloginat = @lastLoginAt 
              WHERE id = @id",
            connection);

        command.Parameters.AddWithValue("lastLoginAt", (object?)user.LastLoginAt ?? DBNull.Value);
        command.Parameters.AddWithValue("id", user.Id);

        await command.ExecuteNonQueryAsync();
    }

    public async Task<List<Module>> GetUserModulesAsync(int userId)
    {
        using var connection = new MySqlConnection(_connectionString);
        await connection.OpenAsync();

        using var command = new MySqlCommand(
            @"SELECT m.id, m.name, m.description, m.isactive 
              FROM modules m 
              INNER JOIN usermodules um ON m.id = um.moduleid 
              WHERE um.userid = @userId AND m.isactive = true",
            connection);

        command.Parameters.AddWithValue("userId", userId);

        var modules = new List<Module>();
        using var reader = await command.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            modules.Add(new Module
            {
                Id = reader.GetInt32(0),
                Name = reader.GetString(1),
                Description = reader.IsDBNull(2) ? null : reader.GetString(2),
                IsActive = reader.GetBoolean(3)
            });
        }

        return modules;
    }

    public async Task<List<Feature>> GetUserFeaturesAsync(int userId)
    {
        using var connection = new MySqlConnection(_connectionString);
        await connection.OpenAsync();

        using var command = new MySqlCommand(
            @"SELECT f.id, f.name, f.description, f.moduleid, f.isactive 
              FROM features f 
              INNER JOIN userfeatures uf ON f.id = uf.featureid 
              WHERE uf.userid = @userId AND f.isactive = true",
            connection);

        command.Parameters.AddWithValue("userId", userId);

        var features = new List<Feature>();
        using var reader = await command.ExecuteReaderAsync();

        while (await reader.ReadAsync())
        {
            features.Add(new Feature
            {
                Id = reader.GetInt32(0),
                Name = reader.GetString(1),
                Description = reader.IsDBNull(2) ? null : reader.GetString(2),
                ModuleId = reader.GetInt32(3),
                IsActive = reader.GetBoolean(4)
            });
        }

        return features;
    }

    public async Task<User?> GetUserByUsernameAsync(string username)
    {
        using var connection = new MySqlConnection(_connectionString);
        const string sql = @"
            SELECT Id, Username, Password, Email, IsActive, CreatedAt, LastLoginAt
            FROM Users
            WHERE Username = @Username";

        return await connection.QueryFirstOrDefaultAsync<User?>(sql, new { Username = username });
    }

    public async Task UpdateUserAsync(User user)
    {
        using var connection = new MySqlConnection(_connectionString);
        const string sql = @"
            UPDATE Users
            SET LastLoginAt = @LastLoginAt
            WHERE Id = @Id";

        await connection.ExecuteAsync(sql, user);
    }
}