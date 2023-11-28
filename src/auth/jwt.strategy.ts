import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from './Schema/user';
import { Model } from 'mongoose';
import { ExtractJwt } from 'passport-jwt';
import { Provider } from './Schema/Provider';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    @InjectModel(Provider.name) private providerModel: Model<Provider>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrkey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new UnauthorizedException('Login first to access this endpoint');
    }
    return user;
  }

  async validateprovider(payload) {
    const { id } = payload;
    const provider = await this.providerModel.findById(id);
    if (!provider) {
      throw new UnauthorizedException('Login first to access this endpoint');
    }
    return provider;
  }
}
