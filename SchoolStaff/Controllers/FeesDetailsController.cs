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
    public class FeesDetailsController : ControllerBase
    {
        private readonly SchoolParentAppContext _context;

        public FeesDetailsController(SchoolParentAppContext context)
        {
            _context = context;
        }

        // GET: api/FeesDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FeesDetail>>> GetFeesDetails()
        {
            return await _context.FeesDetails.ToListAsync();
        }

        // GET: api/FeesDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FeesDetail>> GetFeesDetail(int id)
        {
            var feesDetail = await _context.FeesDetails.FindAsync(id);

            if (feesDetail == null)
            {
                return NotFound();
            }

            return feesDetail;
        }

        // PUT: api/FeesDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutFeesDetail(int id, FeesDetail feesDetail)
        //{
        //    if (id != feesDetail.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(feesDetail).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FeesDetailExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/FeesDetails
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<FeesDetail>> PostFeesDetail(FeesDetail feesDetail)
        //{
        //    _context.FeesDetails.Add(feesDetail);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetFeesDetail", new { id = feesDetail.Id }, feesDetail);
        //}

        //// DELETE: api/FeesDetails/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteFeesDetail(int id)
        //{
        //    var feesDetail = await _context.FeesDetails.FindAsync(id);
        //    if (feesDetail == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.FeesDetails.Remove(feesDetail);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool FeesDetailExists(int id)
        {
            return _context.FeesDetails.Any(e => e.Id == id);
        }
    }
}
