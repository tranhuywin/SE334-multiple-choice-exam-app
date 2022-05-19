import {
  Body,
  Controller, Get, Param, Patch, Request, UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'get profile user by JWT' })
  async findOne(@Request() req: Request & { user: User }): Promise<IResponse> {
    const data = await this.usersService.findOne({ id: req.user.id });
    delete data.password;
    return {
      data,
    };
  }

  @Patch('/me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'update user by JWT' })
  async update(@Request() req: Request & { user: User }, @Body() updateUserDto: UpdateUserDto): Promise<IResponse> {
    await this.usersService.update(+req.user.id, updateUserDto);
    return {
      message: 'User updated',
    };
  }
}
