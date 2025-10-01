import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
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
      secure: false, // Asegúrate de usar secure en producción con HTTPS
      //sameSite: 'none',
      maxAge: 72 * 3600000, // 72 hours
      path: '/',  // 👈 esto es clave
    });
    res.json({ message: 'Login successful' });  // Aquí mandas la respuesta
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req: any) {
    const token = req.cookies['jwt'];
    return this.authService.logout(token);
  }


  @Get('me')
  async getMe(@Req() req: any) {
    const token = req.cookies['jwt'];
    return this.authService.getLoggedUser(token);
  }
}

