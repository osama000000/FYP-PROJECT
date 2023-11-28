import {Controller, Post, UploadedFile, UseInterceptors,} from '@nestjs/common';
import{FileInterceptor} from '@nestjs/platform-express';
import {CloudinaryService} from './cloudinary.service';

@Controller('images')
export class ImageController{
    constructor (private readonly cloudinaryService: CloudinaryService){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
   async uploadFile(@UploadedFile() file:Express.Multer.File){
    try{
        const result = await this.cloudinaryService.uploadImage(file.path);
        return result;

    }
    catch (error){
        console.error('error uploading Image:', error);
        throw new Error ('failed to upload Image');
    }
   }
}