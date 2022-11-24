using System;


using Ops;

var builder = WebApplication.CreateBuilder(args);




builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();




app.MapGet("/api/category", () =>
{


    GetAllCategories();
});

//app.MapGet("/api/category/{id}", Ops.Operations.GetCategory);

//app.MapGet("/api/product/{id}", Ops.Operations.GetProduct);


app.Run();

