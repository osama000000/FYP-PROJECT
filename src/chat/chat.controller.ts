import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Chat } from './Schema/chat';

@Controller('chat')
@ApiTags('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
     
        message:{
          type:'string',
          example: 'xyz', 
        }, 
        sender:{
          type:'string',
          example: 'xyz', 
        },
        receiver:{
          type:'string',
          example: 'xyz', 
        },}}})
  async createChat(@Body() createChatDto: CreateChatDto): Promise<Chat> {
    return this.chatService.createChat(createChatDto);
  }

  @Get(':senderId/:receiverId')
  async getChat(
    @Param('senderId') senderId: string,
    @Param('receiverId') receiverId: string,
  ): Promise<Chat[]> {
    return this.chatService.getChatByUserIds(senderId, receiverId);
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chatService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
  //   return this.chatService.update(+id, updateChatDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.chatService.remove(+id);
  // }
}
