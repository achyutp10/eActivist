using System;

namespace Application.Profiles.DTos;

public class UserActivityDto
{
    public required string Id { get; set; }
    public required string Title { get; set; }
    public required string Category { get; set; }
    public DateTime Date { get; set; }

}
