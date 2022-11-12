import S from 's-js';

const currentContext = null;

function createComponent(Comp, props) {
	return S.sample(() => Comp(props));
}

function useData<T = any>(initialVaue: T) {
	const data = S.data(initialVaue);
	return data;
}

const root = S.root;
const effect = S;
const on = S.on;
const cleanup = S.cleanup;
const sharedConfig = {};
const getOwner = null;

export { root, useData, createComponent, effect, sharedConfig, getOwner, on, cleanup };
