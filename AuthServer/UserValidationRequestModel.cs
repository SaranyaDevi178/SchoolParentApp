using AuthServer.Models;

namespace AuthServer
{
    public class UserValidationRequestModel
    {
        private readonly SchoolParentAppContext context = new SchoolParentAppContext();

        public string Email { get; set; }
        public string Password { get; set; }

        public bool IsValidate(string email, string password)
        {
            if (context.Parents.Any(x => x.Email == email && x.Password == AuthServer.EncryptDecrypt.EncodePasswordToBase64(password))) 
            // AuthServer.EncryptDecrypt.EncodePasswordToBase64(password)
            {
                return true;
            }
            else
                return false;
        }
    }
}

