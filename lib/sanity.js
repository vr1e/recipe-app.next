import {
	createClient,
	createPreviewSubscriptionHook,
	createImageUrlBuilder,
	createPortableTextComponent,
} from 'next-sanity';

const config = {
	projectId: 'kzme8eng',
	dataset: 'production',
	apiVersion: 'v2021-03-25',
	useCdn: false,
};

export const sanityClient = createClient(config);
export const UsePreviewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = source => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
	...config,
	serializers: {},
});
