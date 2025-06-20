using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using UI_UX_Mudblazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Si usas servicios adicionales, agrégalos aquí
// builder.Services.AddScoped<...>();

await builder.Build().RunAsync();