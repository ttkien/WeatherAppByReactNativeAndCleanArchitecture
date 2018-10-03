import { Container } from 'inversify'
import { Symbols } from './ioc.symbols';
import { LocationRepository } from '../../core/domain/repositories-interfaces/LocationRepository';
import { DefaultLocationRepository } from '../../core/repositories/location/LocationRepository';
import getDecorators from 'inversify-inject-decorators';

let iocContainer = new Container();
iocContainer.bind<LocationRepository>(Symbols.DefaultLocationRepository).to(DefaultLocationRepository);

let { lazyInject } = getDecorators(iocContainer);

export const Inject = lazyInject;