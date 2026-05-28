import { Body, Controller, Get, Param, Patch, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/loginDto';
import type { Response } from 'express';
import { JwtAuthGuard } from '../shared/guards/auth/auth.guard';
import { ResetGuard } from '../shared/guards/reset/reset.guard';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { access_token } = await this.authService.login(loginDto);
    this.createCookie(access_token, res);
    res.json({ message: 'Login successful' });  // Aquí mandas la respuesta
  }

  createCookie(access_token: string, res: Response, cookieName: string = 'jwt', time: number = 72 * 3600000) {
    res.cookie(cookieName, access_token, {
      httpOnly: true,
      secure: true, // Asegúrate de usar secure en producción con HTTPS
      sameSite: 'none',
      maxAge: time,
      path: '/',  // 👈 esto es clave
    });
  }


  @Post('google')
  async googleLogin(@Body() body: { credential: string }, @Res() res: Response) {
    const { access_token } = await this.authService.googleLogin(body.credential);
    this.createCookie(access_token, res);
    res.json({ message: 'Login successful' });
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req: any) {
    const token = req.cookies['jwt'];
    return this.authService.logout(token);
  }

  @Post('admin')
  async logAdmin(@Body() data: { password: string }, @Res() res: Response) {
    const { access_token } = await this.authService.logAdmin(data.password)
    this.createCookie(access_token, res);
    res.json({ message: 'Login successful' });
  }

  @Patch('sendCode')
  sendCode(@Body() user: { email: string }) {
    return this.authService.sendCode(user.email);
  }

  @Patch('verifyCode')
  async verifyCode(@Body() user: { email: string, code: string }, @Res() res: Response) {
    const token = await this.authService.verifyCode(user.email, user.code);
    this.createCookie(token, res, 'jwt-reset', 3600000 / 6); // 10 minutos
    res.json({ message: 'Verification successful' });
  }
  @UseGuards(ResetGuard)
  @Patch('changePassword')
  changePassword(@Body() body: { newPassword: string, email: string }) {
    return this.authService.changePassword(body.email, body.newPassword);
  }

  @Get('me')
  async getMe(@Req() req: any) {
    const token = req.cookies['jwt'];
    return this.authService.getLoggedUser(token);
  }
}

