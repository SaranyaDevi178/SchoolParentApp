using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolParentApp.Models;


namespace SchoolParentApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
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
          //  var ValidCustomers = _context.Parents.ForEachAsync(x => x.Password = EncryptDecrypt.EncodePasswordToBase64(x.Password));
            //   parent.Password = EncryptDecrypt.EncodePasswordToBase64(parent.Password);
            return await _context.Parents.ToListAsync();
        }

        [HttpGet]
        [Route("GetDetail")]
        public async Task<ActionResult<IEnumerable<Parent>>> GetDetail()
        {
      //_context.Parents.ForEachAsync(x => x.Password = EncryptDecrypt.EncodePasswordToBase64(x.Password));
             // parent.Password = EncryptDecrypt.EncodePasswordToBase64(parent.Password);
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
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParent(int id, Parent parent)
        {
            if (id != parent.Id)
            {
                return BadRequest();
            }
        //    parent.Password = EncryptDecrypt.EncodePasswordToBase64(parent.Password);
            _context.Entry(parent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParentExists(id))
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

        [HttpPut]
        [Route("Update")]
        public async Task<IActionResult> updateParent(int id, Parent parent)
        {
            if (id != parent.Id)
            {
                return BadRequest();
            }
            
            _context.Entry(parent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParentExists(id))
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
        [HttpPost]
        public async Task<ActionResult<Parent>> PostParent(Parent parent)
        {
            try
            {
                parent.Password = EncryptDecrypt.EncodePasswordToBase64(parent.Password);
                _context.Parents.Add(parent);

                await _context.SaveChangesAsync();

                return CreatedAtAction("GetParent", new { id = parent.Id }, parent);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        // DELETE: api/Parents/5
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

        private bool ParentExists(int id)
        {
            return _context.Parents.Any(e => e.Id == id);
        }
    }

    internal class EncryptDecrypt
    {
        public static string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encData_byte = new byte[password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        }
        //this function Convert to Decord your Password
        public string DecodeFrom64(string encodedData)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            return result;
        }
    }
}


    

