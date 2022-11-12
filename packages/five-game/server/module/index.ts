export type TServerModule = {
	name: string;
};

export interface IServerModule {
	moduleName: string;
	moduleState: any;
	globalState: StateBagInterface;
}

export function ServerModule(constructor: Function);
export function ServerModule({ name }: TServerModule);
export function ServerModule(props: TServerModule) {
	if (typeof props === 'function') {
		return console.log('constructor name', props.name);
	}

	return function <T extends { new (...args: any[]): IServerModule }>(constructor: T) {
		console.log('with name field:', props.name);
		return class extends constructor {
			moduleName = props.name;
		};
	};
}

export class BaseModule {
	public globalState: StateBagInterface;
	constructor() {
		this.globalState = GlobalState;
	}
}
