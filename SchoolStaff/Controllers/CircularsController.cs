using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using SchoolStaff.Models;

namespace SchoolStaff.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CircularsController : ControllerBase
    {
        private readonly SchoolParentAppContext _context;

        public CircularsController(SchoolParentAppContext context)
        {
            _context = context;
        }

        // GET: api/Circulars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Circular>>> GetCirculars()
        {
            return await _context.Circulars.ToListAsync();
        }

        // GET: api/Circulars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Circular>> GetCircular(int id)
        {
            var circular = await _context.Circulars.FindAsync(id);

            if (circular == null)
            {
                return NotFound();
            }

            return circular;
        }

        // PUT: api/Circulars/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCircular(int id, Circular circular)
        {
            if (id != circular.Id)
            {
                return BadRequest();
            }

            _context.Entry(circular).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CircularExists(id))
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

        // POST: api/Circulars
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Circular>> PostCircular(Circular circular)
        {
            try
            {
                _context.Circulars.Add(circular);
                 await _context.Parents.ForEachAsync(c => c.CircularAcknowledgement = false);
                //ValidCustomers.ForEach(c => c.CreditLimit = 1000);
                 _context.SaveChanges();
                return CreatedAtAction("GetCircular", new { id = circular.Id }, circular);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        // DELETE: api/Circulars/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCircular(int id)
        {
            var circular = await _context.Circulars.FindAsync(id);
            if (circular == null)
            {
                return NotFound();
            }

            _context.Circulars.Remove(circular);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CircularExists(int id)
        {
            return _context.Circulars.Any(e => e.Id == id);
        }
    }
}
