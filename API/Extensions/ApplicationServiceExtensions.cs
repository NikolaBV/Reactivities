using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Acitvities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
});
services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
    });
});
services.AddMediatR(config => config.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
services.AddAutoMapper(typeof(MappingProfilies).Assembly);
return services;
        }
    }
}