using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Interfaces;
using Core.Common;
using Core.Domain.Models;
using Core.Domain.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Blog.React.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class SeoController : ControllerBase
    {
        public IBusiness<Seo> _business;
        public SeoController(IBusiness<Seo> business)
        {
            _business = business;
        }

        [HttpPost]
        public IActionResult AddUpdate(Seo seo)
        {
            ApiRequest<Seo> apiRequest = new ApiRequest<Seo>()
            {
                Body = seo
            };
            ApiResponse<string> response = _business.AddUpdate(apiRequest);
            return Ok(response);
        }
    }
}