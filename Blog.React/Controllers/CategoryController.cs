using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Helpers;
using Core.Business.Interfaces;
using Core.Common;
using Core.Domain.Models;
using Core.Domain.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.React.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategory<CategoryViewModel> _category;
        private IWebHostEnvironment _hostingEnvironment;
        public CategoryController(ICategory<CategoryViewModel> cateogory, IWebHostEnvironment environment)
        {
            _category = cateogory;
            _hostingEnvironment = environment;
        }
        [HttpPost]
        public IActionResult GetAll(Pagination paging)
        {
            //FileProcess.SaveImageFromBase64(_hostingEnvironment.WebRootPath, "");

            ApiRequest<string> apiRequest = new ApiRequest<string>()
            {
                Paging = paging,
                Body = paging.SearchText
            };
            ApiResponse<List<CategoryViewModel>> response = _category.GetAll(apiRequest, out int totalRows);
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
            ApiResponse<CategoryViewModel> category = _category.GetById(apiRequest);
            ApiResponse<Seo> seoInfo = _category.GetSeoInfo(id, 0);
            return Ok(new { entry = category.Data, seo = seoInfo.Data });
        }

        [HttpPost]
        public IActionResult AddUpdate(CategoryViewModel category)
        {
            ApiRequest<CategoryViewModel> apiRequest = new ApiRequest<CategoryViewModel>()
            {
                Body = category
            };
            ApiResponse<string> response = _category.AddUpdate(apiRequest);
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