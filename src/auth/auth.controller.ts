import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/loginDto';
import type { Response } from 'express';
import { JwtAuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { access_token } = await this.authService.login(loginDto);
    res.cookie('jwt', access_token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 72 * 3600000, // 72 hours
    });
    res.json({ message: 'Login successful' });  // Aquí mandas la respuesta
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('jwt'); // Clear the JWT cookie
    return { message: 'Logout successful' };
  }
}

