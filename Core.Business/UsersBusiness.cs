using Core.Business.Interfaces;
using Core.Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business
{
    public class UsersBusiness : BaseBusiness<UsersViewModel>, IUsers<UsersViewModel>
    {
    }
}
