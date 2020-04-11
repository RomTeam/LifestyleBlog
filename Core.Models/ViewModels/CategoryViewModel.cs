using Core.Common;
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

        [IsParam(IsAddParam = false)]
        public int SeoID { get; set; }

        [IsParam(IsAddParam = false)]
        public int Category { get; set; }

        [IsParam(IsAddParam = false)]
        public int News { get; set; }

        [IsParam(IsAddParam = false)]
        public string SeoUrl { get; set; }

        [IsParam(IsAddParam = false)]
        public string Description { get; set; }

        [IsParam(IsAddParam = false)]
        public string Title { get; set; }

        [IsParam(IsAddParam = false)]
        public string Keywords { get; set; }

        [IsParam(IsAddParam = false)]
        public string Tags { get; set; }

        [IsParam(IsAddParam = false)]
        public string H1 { get; set; }

        [IsParam(IsAddParam = false)]
        public string H2 { get; set; }

        [IsParam(IsAddParam = false)]
        public string H3 { get; set; }

        [IsParam(IsAddParam = false)]
        public string H4 { get; set; }

        [IsParam(IsAddParam = false)]
        public string H5 { get; set; }

        [IsParam(IsAddParam = false)]
        public string H6 { get; set; }
    }
}
