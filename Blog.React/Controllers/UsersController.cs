using System;
using System.Collections.Generic;
using System.IO;
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
    public class UsersController : ControllerBase
    {
        private IUsers<UsersViewModel> _users;
        public UsersController(IUsers<UsersViewModel> users)
        {
            _users = users;
        }
        [HttpPost]
        public IActionResult GetAll(Pagination paging)
        {
            ApiRequest<string> apiRequest = new ApiRequest<string>()
            {
                Paging = paging,
                Body = paging.SearchText
            };
            ApiResponse<List<UsersViewModel>> response = _users.GetAll(apiRequest, out int totalRows);
            var users = response.Data;
            return Ok(new { users, totalRows });
        }

        [HttpGet]
        public IActionResult GetById(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            ApiResponse<UsersViewModel> response = _users.GetById(apiRequest);
            return Ok(response);
        }

        [HttpPost]
        public IActionResult AddUpdate(UsersViewModel users)
        {
            users.Password = "123456";
            users.Avatar = "avatar.jpg";
            ApiRequest<UsersViewModel> apiRequest = new ApiRequest<UsersViewModel>()
            {
                Body = users
            };
            ApiResponse<string> response = _users.AddUpdate(apiRequest);
            return Ok(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            ApiRequest<int> apiRequest = new ApiRequest<int>()
            {
                Body = id
            };
            return Ok(_users.Delete(apiRequest));
        }

        [HttpPost]
        public IActionResult UploadFile(List<FileUpload> files)
        {
            return Ok();
        }
    }
}