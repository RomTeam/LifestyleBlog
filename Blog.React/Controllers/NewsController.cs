using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Interfaces;
using Core.Common;
using Core.Domain.Models;
using Core.Domain.ViewModels;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Blog.React.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private INews<NewsViewModel> _News;
        private IWebHostEnvironment _hostingEnvironment;
        public NewsController(INews<NewsViewModel> cateogory, IWebHostEnvironment environment)
        {
            _News = cateogory;
            _hostingEnvironment = environment;
        }
        [HttpPost]
        public IActionResult GetAll(Pagination paging)
        {
            ApiRequest<string> apiRequest = new ApiRequest<string>()
            {
                Paging = paging,
                Body = paging.SearchText
            };
            ApiResponse<List<NewsViewModel>> response = _News.GetAll(apiRequest, out int totalRows);
            var newses = response.Data;
            return Ok(new { newses, totalRows });
        }

        [HttpGet]
        public IActionResult GetById(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            ApiResponse<NewsViewModel> newsInfo = _News.GetById(apiRequest);
            ApiResponse<Seo> seoInfo = _News.GetSeoInfo(0, id);
            return Ok(new { entry = newsInfo.Data, seo = seoInfo.Data});
        }

        [HttpPost]
        public IActionResult AddUpdate(NewsViewModel news)
        {
            news.CreatedBy = 1;
            ApiRequest<NewsViewModel> apiRequest = new ApiRequest<NewsViewModel>()
            {
                Body = news
            };
            ApiResponse<string> response = _News.AddUpdate(apiRequest);
            return Ok(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            return Ok(_News.Delete(apiRequest));
        }
    }
}
