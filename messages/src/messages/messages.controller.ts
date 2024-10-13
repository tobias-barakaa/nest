import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return { message: 'List of messages' };
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return { id, message: `Message with ID ${id}` };
  }
}
