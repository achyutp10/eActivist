using System;
using Application.Profiles.DTos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces;

public interface IPhotoService
{
    Task<PhotoUploadResult?> UploadPhoto(IFormFile file);
    Task<string> DeletePhoto(string publicId);

}
