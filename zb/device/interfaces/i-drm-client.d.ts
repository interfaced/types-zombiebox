import { Type } from '../drm/drm';
import IEventPublisher from '../../events/interfaces/i-event-publisher';

export default interface IDrmClient extends IEventPublisher {
    type: Type | string;
    EVENT_ERROR: string;
    init(): Promise<any>;
    prepare(): Promise<any>;
    destroy(): Promise<any>;
}