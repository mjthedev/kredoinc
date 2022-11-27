using System;



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


    IDictionary<int, string> d = new Dictionary<int, string>();
    d.Add(new KeyValuePair<int, string>(1, "TVs"));
    d.Add(new KeyValuePair<int, string>(2, "Appliances"));
    d.Add(new KeyValuePair<int, string>(3, "Mobile"));
    d.Add(new KeyValuePair<int, string>(4, "Tablet"));
    d.Add(new KeyValuePair<int, string>(5, "Laptop"));
    d.Add(new KeyValuePair<int, string>(6, "Desktop"));
    d.Add(new KeyValuePair<int, string>(7, "Hard Drive"));
    d.Add(new KeyValuePair<int, string>(8, "Flash Drive"));

    return d;
});

//app.MapGet("/api/category/{id}", Ops.Operations.GetCategory);

//app.MapGet("/api/product/{id}", Ops.Operations.GetProduct);


app.Run();

