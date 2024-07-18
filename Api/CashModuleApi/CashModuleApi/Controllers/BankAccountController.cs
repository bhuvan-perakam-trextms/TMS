using Microsoft.AspNetCore.Mvc;
using CashModuleApi.Domain;
using CashModuleApi.Services.BankAccounts;

namespace CashModuleApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankAccountController : ControllerBase
    {
        private readonly IBankAccountService Service;

        public BankAccountController(IBankAccountService service)
        {
            Service = service;
        }

        [HttpGet]
        public IActionResult GetAllBankAccounts()
        {
            try
            {
                var accounts = Service.GetAllBankAccounts();
                return Ok(accounts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetBankAccountById(int id)
        {
            try
            {
                var account = Service.GetBankAccountById(id);

                if (account == null)
                {
                    return NotFound($"Bank account with ID {id} not found");
                }

                return Ok(account);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

 /*       // POST: api/BankAccount
        [HttpPost]
        public IActionResult UpsertBankAccount([FromBody] BankAccount account)
        {
            try
            {
                if (account == null)
                    return BadRequest("Bank account object is null");

                Service.CreateOrUpdateBankAccount(account);
                return CreatedAtAction(nameof(GetBankAccountById), new { id = account.Id }, account);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }*/

        [HttpPut("{id}")]
        public IActionResult UpsertBankAccount(int id, [FromBody] BankAccount account)
        {
            try
            {
                if (account == null || account.Id != id)
                    return BadRequest("Invalid bank account object");

                var existingAccount = Service.GetBankAccountById(id);
                if (existingAccount == null)
                {
                    return NotFound($"Bank account with ID {id} not found");
                }

                Service.CreateOrUpdateBankAccount(account);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
