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
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategory<Category> _category;
        public CategoryController(ICategory<Category> cateogory)
        {
            _category = cateogory;
        }
        [HttpGet]
        public List<Category> GetAll()
        {
            return _category.GetAll();
        }

        [HttpGet]
        public Category GetById(int id)
        {
            return _category.GetById(id);
        }

        [HttpPost]
        public void AddUpdate(Category category)
        {
            _category.AddUpdate(category);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _category.Delete(id);
        }

        [HttpGet]
        public List<RefData> GetParent()
        {
            return _category.GetParents();
        }
    }
}