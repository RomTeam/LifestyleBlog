﻿using Core.Common;
using Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Domain.ViewModels
{
    [Display(Name = "Category")]
    public class CategoryViewModel : Category
    {
        [IsParam(IsAddParam = false)]
        public string ParentName { get; set; }
    }
}
