using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Helpers;
using Core.Business.Interfaces;
using Core.Common;
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
        [HttpPost]
        public IActionResult GetAll(Pagination paging)
        {
            ApiRequest<string> apiRequest = new ApiRequest<string>()
            {
                Paging = paging,
                Body = paging.SearchText
            };
            ApiResponse<List<Category>> response = _category.GetAll(apiRequest, out int totalRows);
            var categories = response.Data;
            return Ok(new { categories, totalRows });
        }

        [HttpGet]
        public IActionResult GetById(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            ApiResponse<Category> response = _category.GetById(apiRequest);
            return Ok(response);
        }

        [HttpPost]
        public IActionResult AddUpdate(Category category)
        {
            ApiRequest<Category> apiRequest = new ApiRequest<Category>()
            {
                Body = category
            };
            ApiResponse response = _category.AddUpdate(apiRequest);
            return Ok(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            return Ok(_category.Delete(apiRequest));
        }

        [HttpGet]
        public IActionResult GetParent()
        {
            return Ok(_category.GetParents());
        }
    }
}