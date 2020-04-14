using Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Core.Business.Interfaces
{
    public interface IToken
    {
        JwtToken GetToken(string audience, IEnumerable<Claim> claims);

        JwtToken GetRefreshToken(string token, string refreshToken);
    }
}
