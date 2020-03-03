using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Interfaces;
using Core.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.React.Controllers
{
    [Route("api/controller/action")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategory<Category> _category;
        public CategoryController(ICategory<Category> category)
        {
            _category = category;
        }

        public List<Category> GetAll()
        {
            Category category = new Category()
            {
                Name = "test",
                IsShow = true,
                CreatedBy = 1,
                Parent = 1,
                Type = "header",
                Url = "abc.kdfjd",
                IsDelete = true,
                Order = 1,
                ID = 1
            };
            _category.AddUpdate(category);
            return new List<Category>();
        }
    }
}