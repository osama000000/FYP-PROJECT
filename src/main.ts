import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from "path";
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ChatGateway } from 'chat.gateway';

async function bootstrap() {



  const app = await NestFactory.create<NestExpressApplication>(AppModule);
 app.useStaticAssets(path.join(__dirname, "../uploads"));

  const options = new DocumentBuilder()
    .setTitle('FYP-PROJECT')
    .setDescription('The FYP API description')
    .addBearerAuth()
    .setVersion('1.0')
    .addTag('FYP')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  const corsOptions: CorsOptions = {
    origin: '*', // Change this to your frontend's origin when in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include cookies when sending the request
  };
  app.enableCors(corsOptions);
 // Enable WebSocket integration with your application

  await app.listen(3000);
}

bootstrap();
