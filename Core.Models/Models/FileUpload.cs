using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class FileUpload
    {
        public IFormFile[] ImageFiles { get; set; }
    }
}
