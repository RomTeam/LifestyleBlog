using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public ICategory _category;
        public CategoryController(ICategory category)
        {
            var categories = _category.categories();
            _category = category;
        }
        public IActionResult GetCategory()
        {
            
            return null;
        }
    }
}