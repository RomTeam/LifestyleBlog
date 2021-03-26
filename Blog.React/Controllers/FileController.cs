using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.React.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]
        public IActionResult SigleUpload([FromForm] IFormFile file)
        {
            try
            {
                UploadFile(file);
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public IActionResult MultiUpload([FromForm] List<IFormFile> files)
        {
            try
            {
                foreach (var file in files)
                {
                    UploadFile(file);
                }
                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [NonAction]
        private void UploadFile(IFormFile file)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                file.CopyTo(stream);
            }
        }
    }
}
