﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class Seo
    {
        public int ID { get; set; }
        public int Category { get; set; }
        public int News { get; set; }
        public string SeoUrl { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public string Keywords { get; set; }
        public string Tags { get; set; }
        public string H1 { get; set; }
        public string H2 { get; set; }
        public string H3 { get; set; }
        public string H4 { get; set; }
        public string H5 { get; set; }
        public string H6 { get; set; }
    }
}
