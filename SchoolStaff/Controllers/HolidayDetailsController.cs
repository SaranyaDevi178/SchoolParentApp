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
    public class HolidayDetailsController : ControllerBase
    {
        private readonly SchoolParentAppContext _context;

        public HolidayDetailsController(SchoolParentAppContext context)
        {
            _context = context;
        }

        // GET: api/HolidayDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HolidayDetail>>> GetHolidayDetails()
        {
            return await _context.HolidayDetails.ToListAsync();
        }

        // GET: api/HolidayDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HolidayDetail>> GetHolidayDetail(int id)
        {
            var holidayDetail = await _context.HolidayDetails.FindAsync(id);

            if (holidayDetail == null)
            {
                return NotFound();
            }

            return holidayDetail;
        }

        // PUT: api/HolidayDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutHolidayDetail(int id, HolidayDetail holidayDetail)
        //{
        //    if (id != holidayDetail.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(holidayDetail).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!HolidayDetailExists(id))
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

        // POST: api/HolidayDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<HolidayDetail>> PostHolidayDetail(HolidayDetail holidayDetail)
        //{
        //    _context.HolidayDetails.Add(holidayDetail);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetHolidayDetail", new { id = holidayDetail.Id }, holidayDetail);
        //}

        //// DELETE: api/HolidayDetails/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteHolidayDetail(int id)
        //{
        //    var holidayDetail = await _context.HolidayDetails.FindAsync(id);
        //    if (holidayDetail == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.HolidayDetails.Remove(holidayDetail);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        private bool HolidayDetailExists(int id)
        {
            return _context.HolidayDetails.Any(e => e.Id == id);
        }
    }
}
