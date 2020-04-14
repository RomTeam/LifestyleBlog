using Core.Business.Interfaces;
using Core.Common;
using Core.Domain.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Core.Business
{
    public class TokenService : IToken
    {
        private IConfiguration _config;

        public TokenService(IConfiguration config)
        {
            _config = config;
        }
        public JwtToken GetToken(string audience, IEnumerable<Claim> claims)
        {
            int expiredTime = int.Parse(_config["Jwt:ExpriedTime"]);
            var token = new JwtToken()
            {
                TokenType = _config["Jwt:Type"],
                Expired = expiredTime,
                Token = GenerateJwtToken(audience, claims),
                RefreshToken= GenerateRefreshToken()
            };
            CacheManager.Add($"JwtToken_{audience}", token);
            return token;
        }

        public JwtToken GetRefreshToken(string token, string refreshToken)
        {
            var principal = GetPrincipalFromExpiredToken(token);
            var username = principal.Identity.Name;
            var jwtToken = CacheManager.GetValue($"JwtToken_{username}") as JwtToken;
            if (!refreshToken.Equals(jwtToken.RefreshToken, StringComparison.OrdinalIgnoreCase))
            {
                throw new SecurityTokenException("Refresh token is invalid");
            }
            return GetToken(username, principal.Claims);
        }

        private string GenerateJwtToken(string audience, IEnumerable<Claim> claims)
        {
            int expiredTime = int.Parse(_config["Jwt:ExpriedTime"]);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                audience,
                claims,
                expires: DateTime.Now.AddMinutes(expiredTime),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        private ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
        {
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false, //you might want to validate the audience and issuer depending on your use case
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("the server key used to sign the JWT token is here, use more than 16 chars")),
                ValidateLifetime = false //here we are saying that we don't care about the token's expiration date
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out securityToken);
            var jwtSecurityToken = securityToken as JwtSecurityToken;
            if (jwtSecurityToken == null || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenException("Invalid token");

            return principal;
        }
    }
}
