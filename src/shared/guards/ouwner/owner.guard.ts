import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { JwtOwnerStrategy } from './jwt-owner.strategy';
@Injectable()
export class OwnerGuard extends AuthGuard('jwt-owner') {

}
@Injectable()
export class OrderOwnerGuard extends AuthGuard('jwt-order-owner') {

}