using Application.Activities.Queries;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// CORS policy name (optional)
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:3000", "https://localhost:3000");
    });
});
builder.Services.AddMediatR(x =>
x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());

var app = builder.Build();

// Use CORS BEFORE controllers
app.UseCors("MyPolicy");

// Enable HTTPS redirection if needed (optional)
app.UseHttpsRedirection();
app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{

    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}

app.Run();
