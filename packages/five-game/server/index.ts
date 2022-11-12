import { BaseModule, ServerModule } from './module';

@ServerModule
class TestServerModule extends BaseModule {
	constructor() {
		super();
		console.log('1');
	}
}

new TestServerModule();
