using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolStaff.Models;

namespace SchoolStaff.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize]
    public class ParentsController : ControllerBase
    {
        private readonly SchoolParentAppContext _context;

        public ParentsController(SchoolParentAppContext context)
        {
            _context = context;
        }

        // GET: api/Parents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Parent>>> GetParents()
        {
            return await _context.Parents.ToListAsync();
        }

        // GET: api/Parents/5
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

        // PUT: api/Parents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{Regid}")]
        public async Task<IActionResult> PutParent(string Regid, Parent parent)
        {
            if (Regid != parent.StudentRegisterNumber)
            {
                return BadRequest();
            }
            try
            {
                var StatusChecking = _context.Parents.FirstOrDefault(x => x.StudentRegisterNumber.Equals(Regid));
                if (StatusChecking != null)
                {
                    StatusChecking.ApplicationStatus = parent.ApplicationStatus;
                  
                    await _context.SaveChangesAsync();
                    //_context.Entry(parent).State = EntityState.Modified;
                    return Ok(StatusChecking);
                }
                return NotFound("Details not found");
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParentExists(Regid))
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

        // POST: api/Parents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Parent>> PostParent(Parent parent)
        //{
        //    _context.Parents.Add(parent);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetParent", new { id = parent.Id }, parent);
        //}

        //// DELETE: api/Parents/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteParent(int id)
        //{
        //    var parent = await _context.Parents.FindAsync(id);
        //    if (parent == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Parents.Remove(parent);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool ParentExists(string Regid)
        {
            return _context.Parents.Any(e => e.StudentRegisterNumber == Regid);
        }
    }
}
