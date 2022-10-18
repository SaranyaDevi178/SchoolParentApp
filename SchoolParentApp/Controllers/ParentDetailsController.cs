using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolParentApp.Models;

namespace SchoolParentApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentDetailsController : ControllerBase
    {
        private readonly SchoolParentAppContext _context;

        public ParentDetailsController(SchoolParentAppContext context)
        {
            _context = context;
        }

        // GET: api/ParentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Parent>>> GetParents()
        {
            return await _context.Parents.ToListAsync();
        }

        // GET: api/ParentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Parent>> GetParent(int id)
        {
            var parent = await _context.Parents.FindAsync(id);

            if (parent == null)
            {
                return NotFound();
            }

            return parent;
        }

        // PUT: api/ParentDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{email}")]
        public async Task<IActionResult> PutParent(string email , Parent parent)
        {
            if (email != parent.Email)
            {
                return BadRequest();
            }
            parent.Password = EncryptDecrypt.EncodePasswordToBase64(parent.Password);
            _context.Entry(parent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Exists(email))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ParentDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Parent>> PostParent(Parent parent)
        {
            _context.Parents.Add(parent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParent", new { id = parent.Id }, parent);
        }

        // DELETE: api/ParentDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParent(int id)
        {
            var parent = await _context.Parents.FindAsync(id);
            if (parent == null)
            {
                return NotFound();
            }

            _context.Parents.Remove(parent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParentExists(int id)
        {
            return _context.Parents.Any(e => e.Id == id);
        }
        private bool Exists(string email)
        {
            return _context.Parents.Any(e => e.Email == email);
        }
    }
}
