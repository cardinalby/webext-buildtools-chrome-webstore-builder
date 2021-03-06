import { ChromeWebstoreBuilder } from './builder';

export default ChromeWebstoreBuilder;
export * from '../declarations/options';
export * from '../declarations/uploadedExtInfo';
export * from '../declarations/publishedExtInfo';
export * from '../declarations/waitForWebstoreOptions';
export * from './buildResult';
export * from './errors';

export { IManifestObject } from 'webext-buildtools-utils';
export { WebstoreResource } from 'typed-chrome-webstore-api';
