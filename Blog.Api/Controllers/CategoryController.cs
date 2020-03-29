using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Interfaces;
using Core.Domain.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Common;
using Core.Domain.Models;

namespace Blog.Api.Controllers
{
    [Route("api/controller/action")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public ICategory<Category> _category;
        public CategoryController(ICategory<Category> category)
        {
            _category = category;
        }
        public List<Category> GetCategory()
        {
            return _category.GetAll();
        }
    }
}