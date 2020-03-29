using Core.Business.Interfaces;
using Core.Common;
using Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business
{
    public class CategoryBusiness: BaseBusiness<Category>, ICategory<Category>
    {
        public List<RefData> GetParents()
        {
            ParameterCollection paramIn = new ParameterCollection();
            return DataAccess.GetDataTable("spp_Category_GetParent", paramIn).To<RefData>();
        }
    }
}
