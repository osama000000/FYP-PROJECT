import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './Schema/chat';
import { ChatGateway } from 'chat.gateway';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private readonly chatModel: Model<Chat>,
  private readonly chatGateway: ChatGateway) {}

  async createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto);
    const savedChat = await createdChat.save();

    this.chatGateway.server.to(createChatDto.receiver).emit('newMessage', savedChat);

    return savedChat;
  }

  async getChatByUserIds(senderId: string, receiverId: string): Promise<Chat[]> {
    return this.chatModel
      .find({
        $or: [
          { sender: senderId, receiver: receiverId },
          { reciever: receiverId, receiver: senderId },
        ],
      })
      .sort({ timestamp: 'asc' })
      .exec();
  }
}

