import IDrmClient from '../interfaces/i-drm-client';
import EventPublisher from '../../events/event-publisher';

export default class AbstractDRMClient extends EventPublisher implements IDrmClient {
    type: string;
    EVENT_ERROR: string;
    constructor();
    init(): Promise<undefined>;
    prepare(): Promise<undefined>;
    destroy(): Promise<undefined>;
}