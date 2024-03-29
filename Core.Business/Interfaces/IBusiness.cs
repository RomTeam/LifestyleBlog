﻿using Core.Common;
using Core.Domain.Models;
using System.Collections.Generic;

namespace Core.Business.Interfaces
{
    public interface IBusiness<T> where T: new()
    {
        ApiResponse<List<T>> GetAll(ApiRequest apiRequest);
        ApiResponse<List<T>> GetAll(ApiRequest<string> apiRequest, out int totalRows);
        ApiResponse<T> GetById(ApiRequest<int> apiRequest);
        ApiResponse<int> Delete(ApiRequest<int> apiRequest);
        ApiResponse<string> AddUpdate(ApiRequest<T> apiRequest);
        ApiResponse<Seo> GetSeoInfo(int categoryId, int newsId);
    }
}
