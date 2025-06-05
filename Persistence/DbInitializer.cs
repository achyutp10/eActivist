using System;
using Domain;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Activities.Any()) return;

        var activities = new List<Activity>
        {
            new() {
                Title = "Past Activity 1",
                Date = DateTime.Now.AddMonths(-2),
                Description = "Activity 2 months ago",
                Category = "drinks",
                City = "London",
                Venue = "The Lamb and Flag, 33, Rose Street, Seven Dials, Covent Garden, London, Greater London, England, WC2E 9EB, United Kingdom",
                Latitude = 51.51171665,
                Longitude = -0.1256611057818921,
            },
            new() {
                Title = "Past Activity 2",
                Date = DateTime.Now.AddMonths(-1),
                Description = "Activity 1 month ago",
                Category = "culture",
                City = "Paris",
                Venue = "Louvre Museum, Rue Saint-Honoré, Quartier du Palais Royal, 1st Arrondissement, Paris, Ile-de-France, Metropolitan France, 75001, France",
                Latitude = 48.8611473,
                Longitude = 2.33802768704666
            },
            new() {
                Title = "Future Activity 1",
                Date = DateTime.Now.AddMonths(1),
                Description = "Activity 1 month in future",
                Category = "culture",
                City = "London",
                Venue = "Natural History Museum",
                Latitude = 51.496510900000004,
                Longitude = -0.17600190725447445
            },
            new() {
                Title = "Future Activity 2",
                Date = DateTime.Now.AddMonths(2),
                Description = "Activity 2 months in future",
                Category = "music",
                City = "London",
                Venue = "The O2",
                Latitude = 51.502936649999995,
                Longitude = 0.0032029278126681844
            },
            new()
            {
                Title = "Future Activity 3",
                Date = DateTime.Now.AddMonths(3),
                Description = "Activity 3 months in future",
                Category = "drinks",
                City = "London",
                Venue = "The Mayflower",
                Latitude = 51.501778,
                Longitude = -0.053577
            },
            new()
            {
                Title = "Future Activity 4",
                Date = DateTime.Now.AddMonths(4),
                Description = "Activity 4 months in future",
                Category = "drinks",
                City = "London",
                Venue = "The Blackfriar",
                Latitude = 51.512146650000005,
                Longitude = -0.10364680647106028
            },
            new()
            {
                Title = "Future Activity 5",
                Date = DateTime.Now.AddMonths(5),
                Description = "Activity 5 months in future",
                Category = "culture",
                City = "London",
                Venue = "Sherlock Holmes Museum, 221b, Baker Street, Marylebone, London, Greater London, England, NW1 6XE, United Kingdom",
                Latitude = 51.5237629,
                Longitude = -0.1584743
            },
            new()
            {
                Title = "Future Activity 6",
                Date = DateTime.Now.AddMonths(6),
                Description = "Activity 6 months in future",
                Category = "music",
                City = "London",
                Venue = "Roundhouse, Chalk Farm Road, Maitland Park, Chalk Farm, London Borough of Camden, London, Greater London, England, NW1 8EH, United Kingdom",
                Latitude = 51.5432505,
                Longitude = -0.15197608174931165
            },
            new()
            {
                Title = "Future Activity 7",
                Date = DateTime.Now.AddMonths(7),
                Description = "Activity 2 months ago",
                Category = "travel",
                City = "London",
                Venue = "River Thames, England, United Kingdom",
                Latitude = 51.5575525,
                Longitude = -0.781404
            },
            new()
            {
                Title = "Future Activity 8",
                Date = DateTime.Now.AddMonths(8),
                Description = "Activity 8 months in future",
                Category = "film",
                City = "London",
                Venue = "River Thames, England, United Kingdom",
                Latitude = 51.5575525,
                Longitude = -0.781404
            },
            new()
            {
                Title = "Future Activity 9",
                Date = DateTime.Now.AddMonths(9),
                Description = "Activity 9 months in future",
                Category = "travel",
                City = "Rome",
                Venue = "Colosseum, Piazza del Colosseo, Rome, Italy",
                Latitude = 41.8902102,
                Longitude = 12.4922309
            },
            new()
            {
                Title = "Future Activity 10",
                Date = DateTime.Now.AddMonths(10),
                Description = "Activity 10 months in future",
                Category = "food",
                City = "Tokyo",
                Venue = "Tsukiji Fish Market, Tokyo, Japan",
                Latitude = 35.665213,
                Longitude = 139.770638
            },
            new()
            {
                Title = "Future Activity 11",
                Date = DateTime.Now.AddMonths(11),
                Description = "Activity 11 months in future",
                Category = "music",
                City = "New York",
                Venue = "Madison Square Garden, New York, USA",
                Latitude = 40.7505045,
                Longitude = -73.9934387
            },
            new()
            {
                Title = "Future Activity 12",
                Date = DateTime.Now.AddMonths(12),
                Description = "Activity 12 months in future",
                Category = "sports",
                City = "Barcelona",
                Venue = "Camp Nou, Barcelona, Spain",
                Latitude = 41.3809,
                Longitude = 2.1228
            },
            new()
            {
                Title = "Future Activity 13",
                Date = DateTime.Now.AddMonths(13),
                Description = "Activity 13 months in future",
                Category = "culture",
                City = "Istanbul",
                Venue = "Hagia Sophia, Istanbul, Turkey",
                Latitude = 41.0086,
                Longitude = 28.9802
            },
            new()
            {
                Title = "Future Activity 14",
                Date = DateTime.Now.AddMonths(14),
                Description = "Activity 14 months in future",
                Category = "film",
                City = "Los Angeles",
                Venue = "Hollywood Walk of Fame, Los Angeles, USA",
                Latitude = 34.1016,
                Longitude = -118.3269
            },
            new()
            {
                Title = "Future Activity 15",
                Date = DateTime.Now.AddMonths(15),
                Description = "Activity 15 months in future",
                Category = "drinks",
                City = "Dublin",
                Venue = "Guinness Storehouse, Dublin, Ireland",
                Latitude = 53.3419,
                Longitude = -6.2868
            },
            new()
            {
                Title = "Future Activity 16",
                Date = DateTime.Now.AddMonths(16),
                Description = "Activity 16 months in future",
                Category = "technology",
                City = "San Francisco",
                Venue = "Apple Park, Cupertino, California, USA",
                Latitude = 37.3349,
                Longitude = -122.00902
            },
            new()
            {
                Title = "Future Activity 17",
                Date = DateTime.Now.AddMonths(17),
                Description = "Activity 17 months in future",
                Category = "books",
                City = "Oxford",
                Venue = "Bodleian Library, Oxford, England",
                Latitude = 51.754816,
                Longitude = -1.254367
            },
            new()
            {
                Title = "Future Activity 18",
                Date = DateTime.Now.AddMonths(18),
                Description = "Activity 18 months in future",
                Category = "nature",
                City = "Kathmandu",
                Venue = "Shivapuri Nagarjun National Park, Kathmandu, Nepal",
                Latitude = 27.8011,
                Longitude = 85.3837
            }

        };
        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();

    }
}
