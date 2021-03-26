using System;
using System.Collections.Generic;
using System.Text;
using Core.Business.Interfaces;
using Core.Domain.ViewModels;

namespace Core.Business
{
    public class NewsBusiness : BaseBusiness<NewsViewModel>, INews<NewsViewModel>
    {
    }
}
