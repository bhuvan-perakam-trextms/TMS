using CashModuleApi.Repositories.BankAccounts;
using CashModuleApi.Services;
using CashModuleApi.Services.BankAccounts;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddSingleton<IBankAccountRepository>(provider => new BankAccountRepository(connectionString));
builder.Services.AddSingleton<IBankAccountService, BankAccountServices>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
