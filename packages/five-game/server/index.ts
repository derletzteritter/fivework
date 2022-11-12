import { BaseModule, ServerModule } from '@fivework/decorators';

@ServerModule
class TestServerModule extends BaseModule {
	constructor() {
		super();
		console.log('1');
	}
}

new TestServerModule();
