import { Injectable } from "@nestjs/common";

import { SignApiOptions, UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary'

@Injectable()

export class CloudinaryService {
    constructor() {
        v2.config({
            cloud_name: 'dqfyi3ijh',
            api_key: '428343419351375',
            api_secret: '0fhEQuSJgDp_s4bEVAKGUzHwpLo',
        });

    }

    async uploadImage(
        filePath: string,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> {


        return new Promise((resolve, reject) => {
            v2.uploader.upload(filePath, {
                folder: 'Users',

            }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
        })
    }


}